import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

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
    width: 40%;
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
const Agreement = styled.div`
    font-size: 12px;
`
const Button = styled.button`
    margin: 20px 0px;
    width: 30%;
    font-weight: 900;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
    })

    const navigate = useNavigate()
    const handleRegister = () => {
        localStorage.setItem(userInfo.username, JSON.stringify(userInfo))
        alert('User added')
        navigate('/')
    }

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First name"
                        onChange={(e) => setUserInfo(old => {
                            old.firstName = e.target.value
                            return old
                        })} />
                    <Input placeholder="Last name"
                        onChange={(e) => setUserInfo(old => {
                            old.lastName = e.target.value
                            return old
                        })} />

                    <Input placeholder="Username"
                        onChange={(e) => setUserInfo(old => {
                            old.username = e.target.value
                            return old
                        })} />
                    <Input placeholder="Email" onChange={(e) => setUserInfo(old => {
                        old.email = e.target.value
                        return old
                    })} />
                    <Input placeholder="Password" onChange={(e) => setUserInfo(old => {
                        old.password = e.target.value
                        return old
                    })} />
                    <Input placeholder="Confirm password" onChange={() => {
                        // TODO: verify password
                    }} />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button onClick={handleRegister}>Register</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
