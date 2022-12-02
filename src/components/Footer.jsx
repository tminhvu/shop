import { ContactPhoneOutlined, Email, Facebook, GitHub, MapOutlined, YouTube } from "@material-ui/icons"
import styled from "styled-components"
import { paymentImage } from "../data"

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    background-color: ${props => props.color};
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    cursor: pointer;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex:1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`
const Payment = styled.img`

`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>MONO</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </Desc>

                <SocialContainer>
                    <SocialIcon color="#385999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="darkslategray">
                        <GitHub />
                    </SocialIcon>
                    <SocialIcon color="#E60023">
                        <YouTube />
                    </SocialIcon>

                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Home</ListItem>
                    <ListItem>Term</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <MapOutlined style={{ marginRight: "10px" }} /> HCM City, Vietnam
                </ContactItem>
                <ContactItem>
                    <ContactPhoneOutlined style={{ marginRight: "10px" }} />+84637428987
                </ContactItem>
                <ContactItem>
                    <Email style={{ marginRight: "10px" }} /> contact@mono.fash
                </ContactItem>
                <Payment src={paymentImage} />
            </Right>
        </Container>
    )
}

export default Footer
