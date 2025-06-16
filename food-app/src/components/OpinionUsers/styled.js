import styled from "styled-components";
const ComentsContainer=styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 2rem 0rem;
`
const ComentsCard=styled.div`
    flex-basis: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: justify;
`
export {
    ComentsContainer,
    ComentsCard, 
}