import styled from 'styled-components';
import { Link } from 'react-router-dom';
const HeaderContainer=styled.header`
    background-color: #C7CFC5;
    display: flex;
`
const HeaderNav=styled.nav`
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const HeaderLink=styled(Link)`
    text-decoration: none;
    color: #3B4131;
`
export{
    HeaderContainer,
    HeaderNav,
    HeaderLink
}