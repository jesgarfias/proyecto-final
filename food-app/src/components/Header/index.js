import Logo from "../../icons/Logo";
import { HeaderContainer, HeaderLink, HeaderNav,HeaderDropMenu,HeaderNavDropMenu,HeaderMenuIcon } from "./styled";
import "../Header/style.css"
import Menu from "../../icons/Menu";
import { useState } from "react";

const Header=()=>{
    const[isOpen,setIsOpen]=useState(false);
    const HandleClick=()=>{
        setIsOpen(prev=>!prev)
        console.log(isOpen)
    }
    return(
        <HeaderContainer>
            <div>
                <HeaderLink to="/" ><Logo/></HeaderLink>
            </div>

            <HeaderNav>
                <HeaderLink to="/recipes" >Recetas</HeaderLink>
                <HeaderLink to="/listOfProducts" >Productos</HeaderLink>
            </HeaderNav>

            <HeaderMenuIcon  onClick={()=>HandleClick()} data-testid="menuBtn">
                <Menu />
            </HeaderMenuIcon>
            <HeaderDropMenu isOpen={isOpen} data-testid="dropMenu" >
                <HeaderNavDropMenu>
                    <HeaderLink to="/recipes" >Recetas</HeaderLink>
                    <HeaderLink to="/listOfProducts" >Productos</HeaderLink>
                </HeaderNavDropMenu>
            </HeaderDropMenu>
        </HeaderContainer>
    )
}
export default Header;