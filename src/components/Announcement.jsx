import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`
const Announcement = () => {
    return (
        <Container>
            BLACK FRIDAY! 30% off and Free shipping on Orders over 50$
        </Container>
    )
}

export default Announcement
