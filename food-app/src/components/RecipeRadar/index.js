/*import { useState,useEffect } from "react";
import axios from "axios";
const RecipeRadar=()=>{
    const [recipes,setRecipes]=useState([])
    useEffect (()=>{
            axios.get('https://api.spoonacular.com/recipes/complexSearch',{
            params:{
            apiKey:"d993df72284d4dcc82bdb7a2506321ca",
            diet:"vegan"
        }
    })
    .then(response=>setRecipes(response.data.results))
    .catch(error=>console.error(error)
    )
    console.log (recipes);
    },[])
    
    return(
        <section>
            <h2>buscador de recetas</h2>  
            {
                recipes.map((elem)=>{
                    return(
                     <div   key={elem.id}>
                        <p>{elem.title}</p>
                        <img src={elem.image} alt={elem.title} width={100} />
                    </div>
                    )
                })
            }   
        </section>
    )
}

export default RecipeRadar;*/
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../features/recipes/recipesSlice";
import { useEffect } from "react";

const RecipeRadar=()=>{
    const recipeDispatch=useDispatch()
    const dat=useSelector((state)=>state.recipe);
    const [diet,setDiet]=useState("");// se agrego useState
    useEffect(()=>{
        recipeDispatch(fetchRecipes(diet)) //se agrego el parametro diet pasando de fetchRecipes() a fetchRecipes(diet)
    },[diet,recipeDispatch])// el array ya no se dejo vacio
    console.log(dat)
    return(
    <section>
        <h2>Buscar recetas por dieta</h2>
        <label htmlFor="diet">Selecciona una dieta: </label>
        <select id="diet" value={diet} onChange={(e) => setDiet(e.target.value)}>
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="gluten free">Gluten Free</option>
        <option value="ketogenic">Ketogenic</option>
        <option value="pescetarian">Pescetarian</option>
        <option value="paleo">Paleo</option>
        <option value="Whole30">Whole30</option>

      </select>

        {
            dat.loading ? <h1> Loading...</h1>:
            dat.recipes.map((elem)=>{
                return(
                     <div   key={elem.id}>
                        <p>{elem.title}</p>
                        <img src={elem.image} alt={elem.title} width={100} />
                    </div>)
            })
        }
    </section>
)
}
export default RecipeRadar;
