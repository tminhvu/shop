import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.2);
    opacity: 0;
    transition: all 0.5s ease;
`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: #f5fbfd;
    position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`
const StyledLink = styled(Link)`
    color: black;
`
const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <StyledLink to={`/products/${item._id}`}>
                        <SearchOutlined />
                    </StyledLink>
                </Icon>
                <Icon>
                    <FavoriteBorder />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
