import Bag from "../../icons/Bag";
import Excersice from "../../icons/Excersice"
import Nutrition from "../../icons/Nutrition";
import { ServCardBtn, ServCardDescription, ServCartContainer, ServMainContainer } from "./styled";
import { HeaderLink } from "../Header/styled";

const Serv =()=>{
    return(
        <ServMainContainer>
            <ServCartContainer>
                <Excersice/>
                <ServCardDescription>
                    <p>Planes de entrenamiento</p>
                    <ServCardBtn>Ver planes</ServCardBtn>
                </ServCardDescription>
            </ServCartContainer>
            <ServCartContainer>
                <Nutrition/>
                <ServCardDescription>
                    <p>Planes nutricionales</p>
                    <ServCardBtn><HeaderLink to="/recipes" >Ver recetas</HeaderLink></ServCardBtn>
                </ServCardDescription>
            </ServCartContainer>
            <ServCartContainer>
                <Bag/>
                <ServCardDescription>
                    <p>Todo para tu dieta</p>
                    <ServCardBtn><HeaderLink to="/listOfProducts" >Ver productos</HeaderLink></ServCardBtn>
                </ServCardDescription>
            </ServCartContainer>
        </ServMainContainer>
    )
}

export default Serv;