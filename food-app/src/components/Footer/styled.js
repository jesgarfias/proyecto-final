import styled from "styled-components";
const FooterContainer=styled.footer`
    display: flex;
    flex-direction: column;
`
const FooterInfoContainer=styled.div`
    display: flex;
    background-color:#C7CFC5;
`
const FooterInfoImageContainer=styled.div`
    width: 40%;
`
const FooterInfoImage=styled.img`
    width: 90%;
`
const FooterInfoLinksContainer=styled.div`
    display: flex;
    width: 60%;
`
export {
    FooterContainer,
    FooterInfoContainer,
    FooterInfoImageContainer,
    FooterInfoImage,
    FooterInfoLinksContainer
}