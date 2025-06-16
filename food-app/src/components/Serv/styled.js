import styled from "styled-components";
const ServMainContainer=styled.section`
    display: flex;
    justify-content: space-around;
    margin: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
`
const ServCartContainer=styled.div`
    background-color: #C7CFC5;
    border-radius: 10px;
    flex-basis: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover{
        transform: scale(1.05);
        transition: transform 0.6s ease-in-out;
    }
`
const ServCardDescription=styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    margin: 1rem 0rem;
`
const ServCardBtn=styled.button`
    border: solid #C7CFC5 2px;
    background-color: #F8E38D;
    border-radius: 30px;
    padding: 1rem;
`
export{
    ServMainContainer,
    ServCartContainer,
    ServCardDescription,
    ServCardBtn
}