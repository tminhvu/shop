import styled from "styled-components"
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from "@material-ui/core"
import { Link } from "react-router-dom"
import { linkStyle } from "../linkstyle.js"

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainter = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border:none;
`
const Logo = styled.h1`
    font-weight: bold;
`

const Center = styled.div`
    flex:1;
    text-align: center;
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const NavBar = () => {
    const loggedIn = localStorage.getItem('loggedIn')
    const cartAmount = JSON.parse(localStorage.getItem(loggedIn))?.cart.length

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainter>
                        <Input />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainter>
                </Left>
                <Center>
                    <Link to='/' style={linkStyle}>
                        <Logo> MONO </Logo>
                    </Link>
                </Center>
                <Right>
                    <Link to='/register' style={linkStyle}>
                        <MenuItem>Register</MenuItem>
                    </Link>
                    <Link to='/login' style={linkStyle}>
                        <MenuItem>Log in</MenuItem>
                    </Link>
                    <Link to='/cart' style={linkStyle}>
                        <MenuItem>
                            <Badge badgeContent={cartAmount} color="primary" overlap="rectangular">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container >
    )
}

export default NavBar
