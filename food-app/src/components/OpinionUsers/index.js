import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { fetchComents } from "../../features/coments/comentsSlice";
import { useState, useEffect } from "react";
import Starts from "../../icons/Starts";
import { ComentsContainer, ComentsCard } from "./styled";

const OpinionUsers=()=>{
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.coment);
    useEffect(()=>{
        dispatch(fetchComents())
    },[])
    console.log(data)
    return(
     <> 
        <div style={{display:'flex', justifyContent:'center'}}>  
            <h2>Reseñas de clientes</h2>
        </div>
        <ComentsContainer>
            {
                data.loading ? <h1> Loading...</h1>:
                data.coments.slice(0,8).map((elem)=>{
                    return(
                        <ComentsCard key={elem.id}>
                            <Starts style={{with:'100px', fill:'#C7CFC5'}}/>
                            <p> <span style={{fontWeight:'600'}}>usuario:</span> {elem.name}</p>
                            <span>{elem.body}</span>
                        </ComentsCard>
                    )
                })
            }
        </ComentsContainer>
    </>
)
}

export default OpinionUsers;