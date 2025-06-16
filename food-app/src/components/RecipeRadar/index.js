import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../features/recipes/recipesSlice";
import { useEffect } from "react";
import Recetas from "../../assets/Recetas.jpg"
import { ProductSelectContainer, ProductSelect, ProductsTitleContainer,ProductsTitleImageContainer,ProductCardsContainer,ProductsCards, ProductsCardImageContainer,ProductsCardImage } from "../ProductsList/styled";

const RecipeRadar=()=>{
    const recipeDispatch=useDispatch()
    const dat=useSelector((state)=>state.recipe);
    const [diet,setDiet]=useState("vegan");// se agrego useState
    useEffect(()=>{
        recipeDispatch(fetchRecipes(diet)) //se agrego el parametro diet pasando de fetchRecipes() a fetchRecipes(diet)
    },[diet,recipeDispatch])// el array ya no se dejo vacio
    console.log(dat)
    return(
    <section>
        <ProductsTitleContainer>
            <ProductsTitleImageContainer>
                <img src={Recetas} alt="recetas"/>
                <h2>Buscar recetas por dieta</h2>
            </ProductsTitleImageContainer>
        </ProductsTitleContainer>
        <ProductSelectContainer>
            <label style={{fontSize:'1.2em'}} htmlFor="diet">Selecciona una dieta: </label>
            <ProductSelect id="diet" value={diet} onChange={(e) => setDiet(e.target.value)}>
                <option value="vegan">Vegan</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="gluten free">Gluten Free</option>
                <option value="ketogenic">Ketogenic</option>
                <option value="pescetarian">Pescetarian</option>
                <option value="paleo">Paleo</option>
                <option value="Whole30">Whole30</option>
            </ProductSelect>
        </ProductSelectContainer>
        <ProductCardsContainer>
            {
                dat.loading ? <h1> Loading...</h1>:
                dat.recipes?.map((elem)=>{
                    return(
                        <ProductsCards   key={elem.id}>
                            <p style={{margin:'1rem 0rem', textAlign:'center'}}>{elem.title}</p>
                            <ProductsCardImageContainer>
                                <ProductsCardImage src={elem.image} alt={elem.title} width={100} />
                            </ProductsCardImageContainer>
                        </ProductsCards>)
                })
            }
        </ProductCardsContainer>
    </section>
)
}
export default RecipeRadar;
