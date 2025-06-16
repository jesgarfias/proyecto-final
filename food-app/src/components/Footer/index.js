import { FooterContainer, FooterInfoContainer, FooterInfoImage, FooterInfoImageContainer, FooterInfoLinksContainer, FooterInfoLinksElements } from "./styled";
import gym from "../../assets/gym.jpg";

const Footer=()=>{
    return(
            <FooterInfoContainer>
                <FooterInfoImageContainer>
                    <FooterInfoImage src={gym} alt="maguinas de ejercicio"/> 
                </FooterInfoImageContainer>
                <FooterInfoLinksContainer>
                    <FooterInfoLinksElements>
                        <h2>Ayuda </h2>
                        <span>Servicio al cliente</span>
                        <span>Contáctanos</span>
                        <span>Devoluciones </span>
                        <span>Rastrear mi pedido</span>
                    </FooterInfoLinksElements>
                    <FooterInfoLinksElements>
                        <h2>Informacion</h2>
                        <span>Acerca de nosotros</span>
                        <span>Terminos y condiciones</span>
                        <span>Afiliados </span>
                    </FooterInfoLinksElements>
                    <FooterInfoLinksElements>
                        <h2>Fidelidad y recompensas</h2>
                        <span>codigos de descuento</span>
                    </FooterInfoLinksElements>
                </FooterInfoLinksContainer>
            </FooterInfoContainer>
        
    )
}

export default Footer;