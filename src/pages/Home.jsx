import Slider from "../components/Slider"
import Announcement from "../components/Announcement"
import NavBar from "../components/NavBar"
import Categories from "../components/Categories"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
    margin: 0px 0px 60px 0px;
    display: flex;
    align-content: center;
    justify-content: center;
`

const Button = styled.button`
    background-color: white;
    border: gray solid 1px;
    padding: 10px 30px;
    cursor: pointer;
    color: gray;
    font-weight: 600;

    &:hover {
        color: black;
        background-color: lightgray;
    }
`

const Home = () => {
    return (
        <div>
            <Announcement />
            <NavBar />
            <Slider />
            <Categories />
            <Products />
            <Wrapper>
                <Link to='/products'>
                    <Button>SEE ALL</Button>
                </Link>
            </Wrapper>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home
