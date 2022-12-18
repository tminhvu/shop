import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'
import { popularProducts } from '../data'
import { publicRequest } from '../requestMethod'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between
`

const Products = ({ category, filters, sort }) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        publicRequest.get(category ? "products?category=" + category : "products").then((res) => {

            setProducts(res.data)
        }).catch(() => {
            setProducts(category ? popularProducts.filter((item) => {
                return item.categories.includes(category)
            }) : popularProducts)
        })
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

    return (
        <Container>
            {category ? filteredProducts.map((item) => <Product item={item} key={Math.random()} />)
                : products.slice(0, 8).map((item) => <Product item={item} key={Math.random()} />)}
        </Container>
    )
}

export default Products
