import styled from "styled-components";
const ProductsTitleContainer=styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0.5rem;
`
const ProductsTitleImageContainer=styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.5rem;
    img{
        width: 100%;
        //height: 400px;
        object-fit: cover;
        border-radius: 5px;
    }
    h2{
        text-align: center;
    }
`
const ProductSelectContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    background-color: #C7CFC5  ;
    margin: 0 auto;
    height: 100px;
    border-radius: 10px;
    @media screen and (max-width: 700px){
        flex-direction: column;
    }
`
const ProductSelect = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: white;
  color: #333;
  cursor: pointer;

  &:hover {
    border-color: #999;
  }

  &:focus {
    outline: none;
    border-color: #555;
  }
`;

const ProductCardsContainer=styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 2rem 0.5rem;
    row-gap: 1.2rem;
`
const ProductsCards=styled.div`
    border: solid #1111 2px;
    flex-basis: 300px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    &:hover{
        background-color: #C7CFC5 ;
        transition: background-color 0.6s ease-in-out;
    }
`
const ProductsCardImageContainer=styled.div`
    width: 90%;
`
const ProductsCardImage=styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
`
const BtnContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const BtnCart=styled.button`
    background: transparent;
    cursor: pointer;
    border: none;
    width: 100%;
`
export{
    ProductsTitleContainer,
    ProductsTitleImageContainer,
    ProductSelectContainer,
    ProductSelect,
    ProductCardsContainer,
    ProductsCards,
    ProductsCardImageContainer,
    ProductsCardImage,
    BtnContainer,
    BtnCart,
}