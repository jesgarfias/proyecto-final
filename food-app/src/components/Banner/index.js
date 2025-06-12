import bannerFood from "../../assets/bannerFood.jpg"
import Excersice from "../../icons/Excersice";
import {ReactTyped} from "react-typed"
import { BannerImage, BannerSectionContainer, BannerText } from "./styled";
const Banner=()=>{
    return(
        <BannerSectionContainer>
            <BannerImage src={bannerFood} alt="diferentes tipos de comida" />
            <BannerText>
                <ReactTyped
                    strings={["Te ayudamos a cumplir tus objetivos"]}
                    typeSpeed={150}
                    backSpeed={100}
                    loop
                />
            </BannerText>
        </BannerSectionContainer>
    )
}
export default Banner;