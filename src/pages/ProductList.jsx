import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    margin-right: 20px;
    padding: 5px;
`
const Option = styled.option`
    padding: 4px;

`
const ProductList = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    const urlQueries = useLocation().search.substring(1)?.split('&')
    const category = urlQueries.find(e => e.includes('category'))?.split('=')[1]
    const searchKey = urlQueries.find(e => e.includes('search'))?.split('=')[1]

    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState('newest')

    const handleSetFilters = (e) => {
        const value = e.target.value
        const name = e.target.name
        if (value !== '')
            setFilters({
                ...filters,
                [name]: value,
            })
        else {
            setFilters(() => {
                let newFilters = { ...filters }
                delete newFilters[name]
                return newFilters
            })
        }
    }

    const handleSetSort = (e) => {
        setSort(e.target.value)
    }

    const title = () => {
        if (searchKey && category) {
            return searchKey.toUpperCase() + ' ' + category.toUpperCase()
        } else if (searchKey) {
            return searchKey.toUpperCase()
        } else if (category) {
            return category.toUpperCase()
        }
    }

    return (
        <Container>
            <Announcement />
            <NavBar />
            <Title>{title() || 'ALL PRODUCTS'}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText> Filter Producsts </FilterText>
                    <Select name="color" defaultValue={'Color'}
                        onChange={handleSetFilters}>
                        <Option disabled>
                            Color
                        </Option>
                        <Option value=''>All</Option>
                        <Option value='white'>White</Option>
                        <Option value='black'>Black</Option>
                        <Option value='red'>Red</Option>
                        <Option value='blue'>Blue</Option>
                        <Option value='yellow'>Yellow</Option>
                        <Option value='green'>Green</Option>
                    </Select>
                    <Select name="size" defaultValue={'Size'}
                        onChange={handleSetFilters}>
                        <Option disabled>
                            Size
                        </Option>
                        <Option value=''>All</Option>
                        <Option value='xs'>XS</Option>
                        <Option value='s'>S</Option>
                        <Option value='m'>M</Option>
                        <Option value='l'>L</Option>
                        <Option value='xl'>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText> Sort Products </FilterText>
                    <Select defaultValue={'Newest'}
                        onChange={handleSetSort}>
                        <Option value='newest'>Newest</Option>
                        <Option value='price_asc'>Price (asc)</Option>
                        <Option value='price_desc'>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>

            <Products category={category} filters={filters} sort={sort} atHome={false} searchKey={searchKey} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
