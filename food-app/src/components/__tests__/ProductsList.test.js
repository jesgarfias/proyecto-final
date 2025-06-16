import React from "react";
import {render, screen,fireEvent,waitFor } from "@testing-library/react";
import axiosMock from "axios";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../../features/products/productsSlice"
import { data } from "@remix-run/router";
import ProductsList from "../ProductsList";

jest.mock('axios'); 
describe('ProductList',()=>{
    let store;

    const mockProducts=[
        {id:1, title:'protein bar', image:'img1.png'},
        {id:2, title:'yogurt', image:'img2.png'}
    ];
    beforeEach(()=>{
        store=configureStore({
            reducer:{
                product:productReducer
            }
        });
        axiosMock.get.mockResolvedValue({
            data:{products:mockProducts}
        });
    });
    afterEach(()=>{
        jest.clearAllMocks();
    });
    it('dispatches fetchProducts on first render', async()=>{
        render(
            <Provider store={store}>
                <ProductsList/>
            </Provider>
        )
        expect(axiosMock.get).toHaveBeenCalledWith(
            expect.stringContaining('https://api.spoonacular.com/food/products/search'),
            expect.objectContaining({
                params:expect.objectContaining({query:'protein'})
            })
        );
        await waitFor(()=>{
            expect(screen.getByText(/protein Bar/i)).toBeInTheDocument();
        })
    })
    it('dispatches fetchProducts againg when query changes', async()=>{
        render(
            <Provider store={store}>
                <ProductsList/>
            </Provider>
        );
        await waitFor(()=>{
            expect(screen.getByText(/protein bar/i)).toBeInTheDocument();
        })
        fireEvent.change(screen.getByLabelText(/selecciona una dieta/i),{
            target:{value:'yogurt'}
        })
        await waitFor(()=>{
            expect(axiosMock.get).toHaveBeenCalledWith(
                expect.any(String),
                expect.objectContaining({
                    params:expect.objectContaining({query:'yogurt'})
                })
            )
        });
    })

})

