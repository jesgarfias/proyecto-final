import React from "react";
import {render, screen,fireEvent,waitFor } from "@testing-library/react";
import axiosMock from "axios";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { data } from "@remix-run/router";
import recipeReducer from "../../features/recipes/recipesSlice"
import RecipeRadar from "../RecipeRadar";


jest.mock('axios'); 
describe('RecipeRadar',()=>{
    let store;

    const mockRecipe=[
        {id:1, title:'chicken bbq', image:'img1.png'},
        {id:2, title:'pork bbq', image:'img2.png'}
    ];
    beforeEach(()=>{
        store=configureStore({
            reducer:{
                recipe:recipeReducer
            }
        });
        axiosMock.get.mockResolvedValue({
            data:{results:mockRecipe}
        });
    });
    afterEach(()=>{
        jest.clearAllMocks();
    });
    it('dispatches fetchRecipes on first render', async()=>{
        render(
            <Provider store={store}>
                <RecipeRadar/>
            </Provider>
        )
        expect(axiosMock.get).toHaveBeenCalledWith(
            expect.stringContaining('https://api.spoonacular.com/recipes/complexSearch'),
            expect.objectContaining({
                params:expect.objectContaining({diet:"vegan"})
            })
        );
        await waitFor(()=>{
            expect(screen.getByText(/pork bbq/i)).toBeInTheDocument();
        })
    })
})