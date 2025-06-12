import Bag from "../../icons/Bag";
import Excersice from "../../icons/Excersice"
import Nutrition from "../../icons/Nutrition";
import { ServCartContainer, ServMainContainer } from "./styled";

const Serv =()=>{
    return(
        <ServMainContainer>
            <ServCartContainer>
                <Excersice/>
                <div>
                    <p>Planes de entrenamiento</p>
                    <button>Ver planes</button>
                </div>
            </ServCartContainer>
            <ServCartContainer>
                <Nutrition/>
                <div>
                    <p>Planes nutricionales</p>
                    <button>Ver planes</button>
                </div>
            </ServCartContainer>
            <ServCartContainer>
                <Bag/>
                <div>
                    <p>Todo para tu dieta</p>
                    <button>Ver productos</button>
                </div>
            </ServCartContainer>
        </ServMainContainer>
    )
}

export default Serv;