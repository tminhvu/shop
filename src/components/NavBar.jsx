import styled from "styled-components"
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Avatar, Badge } from "@material-ui/core"
import { Link, redirect, useNavigate } from "react-router-dom"
import { linkStyle } from "../linkstyle.js"
import { useState } from "react"

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

const SearchInput = styled.input`
    outline: none;
    border: none;
`

const Username = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfd;
    padding: 2px 10px;
    border-radius: 3px;
    color: teal;
    font-weight: 600;
    text-decoration: underline;
`

const Logout = styled.button`
    background-color: #f5fbfd;
    border: solid teal 1px;
    font-size: 12px;
    cursor: pointer;
`

const NavBar = () => {
    const loggedIn = localStorage.getItem('loggedIn')
    const cartAmount = JSON.parse(localStorage.getItem(loggedIn))?.cart.length

    const [searchKey, setSearchKey] = useState('')

    const navigate = useNavigate()

    const search = () => {
        navigate('/products?search=' + searchKey)
    }

    const handleLogOut = () => {
        localStorage.removeItem('loggedIn')
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainter>
                        <SearchInput onChange={(e) => {
                            setSearchKey(e.target.value)
                        }}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter')
                                    search()
                            }}
                        />
                        <Search style={{ color: "gray", fontSize: 16 }}
                            onClick={() => {
                                search()
                            }} />
                    </SearchContainter>
                </Left>
                <Center>
                    <Link to='/' style={linkStyle}>
                        <Logo> MONO </Logo>
                    </Link>
                </Center>
                <Right>
                    {loggedIn ?
                        <>
                            <Username>
                                <Avatar style={{ height: '23px', width: '23px', color: 'teal', marginRight: '5px' }} />
                                {loggedIn}
                            </Username>
                            <Logout onClick={() => handleLogOut()}>Log out</Logout>
                        </> :
                        <>
                            <Link to='/register' style={linkStyle}>
                                <MenuItem>Register</MenuItem>
                            </Link>
                            <Link to='/login' style={linkStyle}>
                                <MenuItem>Log in</MenuItem>
                            </Link>
                        </>

                    }
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
