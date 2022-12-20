import { Add, Remove } from "@material-ui/icons"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { popularProducts } from "../data"

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 500;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;

    border: ${props => props.type === 'filled' && "none"};
    background-color: ${props => props.type === 'filled' ? "black" : "transparent"};
    color: ${props => props.type === 'filled' && "white"};
`
const TopTexts = styled.div``
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 20px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductTitle = styled.span` `
const ProductId = styled.span` `
const ProductColor = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50px;
    border: solid teal 1px;
    background-color: ${props => props.color};
`
const ProductSize = styled.span` `

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;

`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && 500};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.div``
const SummaryItemPrice = styled.div``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`
const Cart = () => {
    const [cart, setCart] = useState(() => {
        const loggedIn = localStorage.getItem('loggedIn')
        const cart = JSON.parse(localStorage.getItem(loggedIn))?.cart

        let products

        cart?.forEach(element => {
            const product = popularProducts.find(e => e._id === element._id)

            const img = product.img
            const title = product.title
            const price = product.price

            if (products)
                products = [
                    ...products,
                    { img: img, title: title, price: price, ...element }
                ]
            else
                products = [
                    { img: img, title: title, price: price, ...element }
                ]
        });

        return products.sort((a, b) => a._id - b._id)
    })

    const [sum, setSum] = useState(0)
    const shipping = 0
    const discount = 0

    useEffect(() => {
        let sum = 0
        cart.forEach(product => {
            sum += product.price * product.amount
        })
        setSum(sum)
    }, [cart])

    const [notifyRerender, setNotifyRerender] = useState(false)

    const sortCondition = (a, b) => {
        if (a._id !== b._id) {
            return a._id - b._id
        } else {
            return a.amount - b.amount
        }
    }
    const handleDecreaseItemAmount = (product) => {
        setCart((oldCart) => {
            let isLastItem = false
            const filteredOldCart = oldCart.filter((item) => {
                if (item === product) {
                    if (product.amount === 1) {
                        isLastItem = true
                    }
                    return false
                }
                return true
            })

            if (isLastItem) {
                setNotifyRerender(!notifyRerender)
                return [...filteredOldCart]
            }

            return [
                ...filteredOldCart,
                { ...product, amount: product.amount - 1 }
            ].sort(sortCondition)
        })
    }

    const handleIncreaseItemAmount = (product) => {
        setCart((oldCart) => {
            return [
                ...oldCart.filter((item) => (item !== product)),
                { ...product, amount: product.amount + 1 }
            ].sort(sortCondition)
        })
    }

    useEffect(() => {
        const addCartToLocalStorage = () => {
            const loggedIn = localStorage.getItem('loggedIn')

            const user = JSON.parse(localStorage.getItem(loggedIn))
            const existingItem = cart

            localStorage.setItem(loggedIn, JSON.stringify(
                {
                    ...user,
                    cart: [...existingItem]
                }
            ))
        }
        addCartToLocalStorage()
    }, [cart])

    return (
        <Container>
            <Announcement />
            <NavBar notifyRerender={notifyRerender} />
            <Wrapper>
                <Title> YOUR CART </Title>
                <Top>
                    <Link to='/products'><TopButton>CONTINUE SHOPPING</TopButton></Link>
                    <TopTexts>
                        <TopText>Shopping cart({cart.length})</TopText>
                        <TopText onClick={() => { alert('wishlist missing') }}>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled" onClick={() => { alert('payment method missing') }}>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart?.map(product => (
                            <div key={Math.random()}>
                                <Product key={Math.random()}>
                                    <ProductDetail>
                                        <Image src={product.img}></Image>
                                        <Details>
                                            <ProductTitle><b>Product:</b> {product.title}</ProductTitle>
                                            <ProductId><b>ID:</b> {product._id}</ProductId>
                                            <ProductColor color={product.color} />
                                            <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                        </Details>
                                    </ProductDetail>

                                    <PriceDetail>
                                        <ProductAmountContainer>
                                            <Remove
                                                onClick={() => {
                                                    handleDecreaseItemAmount(product)
                                                }} />
                                            <ProductAmount>{product.amount}</ProductAmount>
                                            <Add
                                                onClick={() => {
                                                    handleIncreaseItemAmount(product)
                                                }} />
                                        </ProductAmountContainer>
                                        <ProductPrice>${product.price}</ProductPrice>
                                    </PriceDetail>
                                </Product>
                                <Hr />
                            </div>
                        ))}
                    </Info>
                    <Summary>
                        <SummaryTitle>ODER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>${sum}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated shipping</SummaryItemText>
                            <SummaryItemPrice>${shipping}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping discount</SummaryItemText>
                            <SummaryItemPrice>${discount}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>${sum + shipping + discount}</SummaryItemPrice>
                        </SummaryItem>
                        <Button onClick={() => { alert('payment method missing') }}>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
