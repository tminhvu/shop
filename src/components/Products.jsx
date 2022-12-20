import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'
import { popularProducts } from '../data'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between
`

const Products = ({ category, filters, sort, atHome }) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        setProducts(category ? popularProducts.filter((item) => {
            return item.categories.includes(category)
        }) : popularProducts)
    }, [category])

    useEffect(() => {
        category &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key] ? item[key].includes(value.toLowerCase()) : item[key]
                    )
                )
            );
    }, [products, category, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((old) => {
                return [...old].sort((a, b) => {
                    return a.createdAt - b.createdAt
                })
            })
        } else if (sort === "price_asc") {
            setFilteredProducts((old) => {
                return [...old].sort((a, b) => {
                    return a.price - b.price
                })
            })
        } else {
            setFilteredProducts((old) => {
                return [...old].sort((a, b) => {
                    return b.price - a.price
                })
            })
        }
    }, [sort])

    const render = () => {
        if (atHome) {
            return products.slice(0, 8).map((item) => <Product item={item} key={Math.random()} />);
        } else if (category) {
            return filteredProducts.map((item) => <Product item={item} key={Math.random()} />)
        } else {
            return products.map((item) => <Product item={item} key={Math.random()} />);
        }
    }

    return (
        <Container>
            {render()}
        </Container>
    )
}

export default Products
