import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { useState, useEffect } from "react";
import { fetchProducts } from "../../features/products/productsSlice";
import { BtnCart, BtnContainer, ProductCardsContainer, ProductsCardImage, ProductsCardImageContainer, ProductsCards, ProductSelect, ProductSelectContainer, ProductsTitleContainer, ProductsTitleImageContainer } from "./styled";
import Productos from "../../assets/Productos.jpg"
import styled from "../ProductsList/styled.css"
import ShopBag from "../../icons/ShopBag";

const ProductsList=()=>{
    const productDispatch=useDispatch();
    const data=useSelector((state)=>state.product)
    const [query,setQuery]=useState("protein")
    useEffect(()=>{
        productDispatch(fetchProducts(query))
    },[query,productDispatch])
    console.log(data);
    const [isHover,setIsHover]=useState(null);
   return(
        <section>
            <ProductsTitleContainer>
                <ProductsTitleImageContainer>
                    <img src={Productos} alt="productos para tu dieta"/>
                    <h2>Todo lo que necesitas para tu dieta</h2>
                </ProductsTitleImageContainer>
            </ProductsTitleContainer>
            <ProductSelectContainer>
                <label style={{fontSize:'1.2em'}} htmlFor="query">Selecciona una dieta: </label>
                <ProductSelect id="query" value={query} onChange={(e) => setQuery(e.target.value)}>
                    <option value="protein">protein</option>
                    <option value="yogurt">yogurt</option>
                    <option value="bread">bread</option>
                    <option value="meat">meat</option>
                </ProductSelect>
            </ProductSelectContainer>
            <ProductCardsContainer>
            {
                data.loading ? <h1>loading...</h1>:
                data.productb?.map((element,index)=>{
                    return(
                        <ProductsCards key={index} onMouseEnter={()=>setIsHover(index)} onMouseLeave={()=>setIsHover(null)}>
                            <ProductsCardImageContainer>
                                <ProductsCardImage src={element.image}/>
                            </ProductsCardImageContainer>
                            <p>{element.title}</p>
                            <BtnContainer className={isHover===index? 'add-btn show': 'add-btn'} >
                                <BtnCart><ShopBag/></BtnCart>
                            </BtnContainer>
                        </ProductsCards>
                    )
                })
            }
            </ProductCardsContainer>
        </section>
    )
}
export default ProductsList;