import { FooterContainer, FooterInfoContainer, FooterInfoImage, FooterInfoImageContainer, FooterInfoLinksContainer } from "./styled";
import gym from "../../assets/gym.jpg";

const Footer=()=>{
    return(
        <FooterContainer>
            <FooterInfoContainer>
                <FooterInfoImageContainer>
                    <FooterInfoImage src={gym} alt="maguinas de ejercicio"/> 
                </FooterInfoImageContainer>
                <FooterInfoLinksContainer>
                    <div>
                        <h2>Ayuda e informacion</h2>
                        <span>Servicio al cliente</span>
                        <span>Contáctanos</span>
                        <span>Devoluciones </span>
                        <span>Rastrear mi pedido</span>
                    </div>
                    <div>
                        <h2>informacion</h2>
                        <span>Acerca de nosotros</span>
                        <span>Terminos y condiciones</span>
                        <span>Afiliados </span>
                    </div>
                    <div>
                        <h2>Fidelidad y recompensas</h2>
                        <span>codigos de descuento</span>
                    </div>
                </FooterInfoLinksContainer>
            </FooterInfoContainer>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;