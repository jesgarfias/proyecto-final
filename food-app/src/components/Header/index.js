import Logo from "../../icons/Logo";
import { HeaderContainer, HeaderLink, HeaderNav } from "./styled";

const Header=()=>{
    return(
        <HeaderContainer>
            <div>
                <Logo/>
            </div>
            <HeaderNav>
                <HeaderLink to="/" ></HeaderLink>
                <HeaderLink to="/recipes" >Recetas</HeaderLink>
                <HeaderLink to="/listOfProducts" >Planes</HeaderLink>
            </HeaderNav>
        </HeaderContainer>
    )
}
export default Header;