import styled from "styled-components"
import { mobile } from '../responsive.js'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 60px;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    margin: 10px 10px 0px 0px;
    padding: 10px;
`
const Button = styled.button`
    margin: 20px 0px;
    width: 40%;
    ${mobile({ width: '50%' })};
    font-weight: 900;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`
const Link = styled.a`
    cursor: pointer;
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    color: teal;

    &:hover {
        transform: scale(1.01);
    }
`
const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                    <Button>SIGN IN</Button>
                    <Link>FORGOT PASSWORD</Link>
                    <Link>CREATE NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
