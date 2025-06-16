import styled from "styled-components";
const BannerSectionContainer=styled.section`
margin: 2rem;
`
const BannerImage=styled.img`
    margin: auto;
    display: flex;
    justify-content: center;
    width: 95%;
`
const BannerText=styled.div`
    font-size: 2em;
    font-weight: bold;
    color: #333;
    display: flex;
    justify-content: center;
    text-align: center;
    @media screen and (max-width: 950px){
        font-size: 1.5em;
    }
`
export{
    BannerSectionContainer,
    BannerImage,
    BannerText
}