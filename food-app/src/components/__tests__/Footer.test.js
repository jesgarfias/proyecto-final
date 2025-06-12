import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe('Footer',()=>{
    it('should render an img',()=>{
        render(
            <Footer/>
        )
        const fImg=screen.getByAltText(/maguinas de ejercicio/i)
        expect(fImg).toBeInTheDocument()
    })
    it('should render the text "links"',()=>{
        render(
            <Footer/>
        )
        const fTxt=screen.getByText(/Servicio al cliente/i)
        expect(fTxt).toBeInTheDocument()
    })
})