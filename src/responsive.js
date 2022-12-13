import { css } from 'styled-components'

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 750px) {
            ${props}
        }
    `
}

// then inside components use it like
// import {mobile} from '../responsive'
// const NavBar = styled.div`
//      ${mobile({backgroundColor: 'blue', fontSize: '14px'})}
// `
