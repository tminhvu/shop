import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'

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
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    category ?
                        `http://localhost:5000/api/products?category=${category}`
                        : "http://localhost:5000/api/products")
                setProducts(res.data)
            } catch (err) { }
        }
        getProducts()
    }, [category])

    useEffect(() => {
        category &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
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
