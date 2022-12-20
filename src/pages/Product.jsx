import { Add, RemoveOutlined } from "@material-ui/icons"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Newsletter from "../components/Newsletter"
import { popularProducts } from "../data.js"

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImageContainer = styled.div`
    flex: 1;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;

`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    margin-right: 5px;
`
const FilterColor = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin: 0px 5px;
    cursor: pointer;
    border: solid black 1px;
    background-color: ${props => props.color};
    border: ${props => props.chosen ? 'solid teal 3px' : 'solid gray 1px'}
`
const FilterSize = styled.select`
    padding: 5px;
`
const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 20%;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    cursor: pointer;
    background-color: white;
    font-weight: 500;

    &:hover {
        background-color: #e8e4e4;
    }
`
const Product = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const address = useLocation().pathname
    const id = address.split("/")[2]

    const [product, setProduct] = useState({})

    useEffect(() => {
        setProduct(popularProducts.find(e => e._id === id))
    }, [id])

    const [amount, setAmount] = useState(1)

    const [color, setColor] = useState()
    const [size, setSize] = useState()

    useEffect(() => {
        setColor(product.color ? product.color[0] : '')
        setSize(product.size ? product.size[0] : '')
    }, [product])

    const handleAddToCart = () => {
        const loggedIn = localStorage.getItem('loggedIn')

        if (loggedIn) {
            const user = JSON.parse(localStorage.getItem(loggedIn))
            const existingItem = user?.cart

            if (existingItem)
                localStorage.setItem(loggedIn, JSON.stringify({ ...user, cart: [...existingItem, { _id: id, size: size, color: color, amount: amount }] }))
            else
                localStorage.setItem(loggedIn, JSON.stringify({ ...user, cart: [{ _id: id, size: size, color: color, amount: amount }] }))

            alert('Item added to cart')
        } else
            alert('Login first')
    }

    return (
        <Container>
            <Announcement />
            <NavBar />
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img} />
                </ImageContainer>
                <InfoContainer>
                    <Title>{product.title}
                    </Title>
                    <Desc>{product.desc}
                    </Desc>
                    <Price>$ {product.price}
                    </Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map((c) => (
                                <FilterColor color={c} key={c}
                                    onClick={(e) => {
                                        setColor(e.target.attributes.color.value)
                                    }}
                                    chosen={color === c}
                                />
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => {
                                setSize(e.target.value)
                            }}>
                                {product.size?.map((size) => (
                                    <FilterSizeOption key={size}>{size.toUpperCase()}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <RemoveOutlined onClick={() => setAmount((old) => old > 1 ? old - 1 : 1)} />
                            <Amount>{amount}</Amount>
                            <Add onClick={() => setAmount((old) => old + 1)} />
                        </AmountContainer>
                        <Button onClick={handleAddToCart}>Add to cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
