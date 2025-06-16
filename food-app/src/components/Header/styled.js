import styled from 'styled-components';
import { Link } from 'react-router-dom';
const HeaderContainer=styled.header`
    background-color: #C7CFC5;
    display: flex;
    justify-content: space-evenly;
`
const HeaderNav=styled.nav`
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 950px){
    display: none;
    }
`
const HeaderLink=styled(Link)`
    text-decoration: none;
    color: #3B4131;
    font-weight: 600;
    font-size: 1em;
`
const HeaderMenuIcon=styled.div`
    cursor: pointer;
    @media screen and (min-width: 950px){
    display: none;
    }
`
const HeaderDropMenu=styled.div.attrs(props => ({
    'data-open': props.isOpen ? 'true' : 'false',
    }))`
    background-color: #C7CFC5 ;
    position: absolute;
    top: 78px;
    left: 1px;
    width: 100%;
    transition: transform 0.5s ease-in-out, opacity .3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-10px)')};
    pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};

  @media screen and (min-width: 950px) {
    display: none;
  }
`
const HeaderNavDropMenu=styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 0.5rem;
`
export{
    HeaderContainer,
    HeaderNav,
    HeaderLink,
    HeaderMenuIcon,
    HeaderDropMenu,
    HeaderNavDropMenu
}