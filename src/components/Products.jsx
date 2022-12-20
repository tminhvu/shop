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

const Products = ({ category, filters, sort, atHome, searchKey }) => {
    const [products, setProducts] = useState([...popularProducts])
    const [filteredProducts, setFilteredProducts] = useState([])
console.log(searchKey)
    useEffect(() => {
        category && setProducts(popularProducts.filter((item) => {
            return item.categories.includes(category)
        }))
    }, [category])

    useEffect(() => {
        const searchFields = {
            title: searchKey,
            desc: searchKey,
            categories: searchKey,
            color: searchKey
        }

        searchKey && setProducts(() => {
            return popularProducts.filter((item) => {
                let contains = false
                for (const [key, value] of Object.entries(searchFields)) {
                    if (item[key].includes(value))
                        contains = true
                }
                return contains
            })
        })
    }, [searchKey])

    useEffect(() => {
        filters && setFilteredProducts(() =>
            products.filter((item) =>
                Object.entries(filters).every(([key, value]) =>
                    item[key]?.includes(value.toLowerCase())
                )
            )
        )
    }, [products, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((old) => {
                return [...old].sort((a, b) => {
                    return new Date(a.createdAt) - Date.parse(b.createdAt)
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
        } else if (filters) {
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
