import { render,screen } from "@testing-library/react";
import Serv from "../Serv";
import { BrowserRouter } from "react-router-dom";

describe('Serv',()=>{
    it('should render the text of the element',()=>{
        render(
            <BrowserRouter>
                <Serv/>
            </BrowserRouter>
        )
        expect(screen.getByText(/Planes de entrenamiento/i)).toBeInTheDocument()
    })
})