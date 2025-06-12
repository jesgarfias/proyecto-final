import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { useState, useEffect } from "react";
import { fetchProducts } from "../../features/products/productsSlice";

const ProductsList=()=>{
    const productDispatch=useDispatch();
    const data=useSelector((state)=>state.product)
    useEffect(()=>{
        productDispatch(fetchProducts())
    },[])
    console.log(data);
   return(
        <section>
            {
                data.loading ? <h1>loading...</h1>:
                data.productb.map((element)=>{
                    return(
                        <div key={element.id}>
                            <img src={element.image}/>
                            <p>{element.title}</p>
                        </div>
                    )
                })
            }
        </section>
    )
}
export default ProductsList;