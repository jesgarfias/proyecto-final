import styled from "styled-components";
/*const FooterContainer=styled.footer`
    display: flex;
    flex-direction: column;
`*/
const FooterInfoContainer=styled.div`
    display: flex;
    background-color:#C7CFC5;
@media screen and (max-width: 950px){
       flex-direction: column;
       align-items: center;
    }
`
const FooterInfoImageContainer=styled.div`
    width: 40%;
    @media screen and (max-width: 950px){
       width: 100%;
    }
`
const FooterInfoImage=styled.img`
    width: 90%;
    @media screen and (max-width: 950px){
       width: 100%;
    }
`
const FooterInfoLinksContainer=styled.div`
    display: flex;
    width: 60%;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 950px){
       flex-direction: column;
       text-align: center;
       row-gap: 1rem;
    }
`
const FooterInfoLinksElements=styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1em;
    font-weight: 600;
    align-items: center;
    gap: 1.5rem;
    span{
        font-weight: 200;
    }
    h2{
        font-weight: 800;
    }
    @media screen and (max-width: 1024px){
        flex-basis: 200px;
        text-align: center;
    }
`
export {
    FooterInfoContainer,
    FooterInfoImageContainer,
    FooterInfoImage,
    FooterInfoLinksContainer,
    FooterInfoLinksElements
}