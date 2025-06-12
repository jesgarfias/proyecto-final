import { render,screen, getByText } from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from "../Header";
import { BrowserRouter } from 'react-router-dom';

describe('Header',()=>{
    it('should render the links in the header',()=>{
        render(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    )
        const linkElement=screen.getByText(/Recetas/i);
        expect(linkElement).toBeInTheDocument();
    })
})