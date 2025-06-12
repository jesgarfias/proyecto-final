import React from "react";
import { render, screen } from "@testing-library/react";
import OpinionUsers from "../OpinionUsers";
import { useDispatch,useSelector } from "react-redux";
import { fetchComents } from "../../features/coments/comentsSlice";

jest.mock('react-redux');
jest.mock('../../features/coments/comentsSlice.js',()=>({
    fetchComents:jest.fn(),
}))

describe('OpinionUsers',()=>{
    it('should render "loading" when data.loading === true',()=>{
        useDispatch.mockReturnValue(jest.fn());
        useSelector.mockReturnValue({loading:true, coments:[]})
        render(
            <OpinionUsers/>
        )
        expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    })
    it('should dispatch fetchComents',()=>{
        const mockDispatch=jest.fn();
        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockReturnValue({loading:true, coments:[]})
        render(
            <OpinionUsers/>
        )
        expect(mockDispatch).toHaveBeenCalledWith(fetchComents())
    })
    it('should render the users coments',()=>{
        const mockComents=Array.from({length:8}, (_,i)=>({
            id:i,
            name:`user ${i}`,
            body:`comentario ${i}`
        }));
        useDispatch.mockReturnValue(jest.fn());
        useSelector.mockReturnValue({loading:false,coments:mockComents});
        render(<OpinionUsers/>);

        expect(screen.getAllByText(/usuario:/i)).toHaveLength(8);
        expect(screen.getByText(/comentario 0/i)).toBeInTheDocument();
    })
})