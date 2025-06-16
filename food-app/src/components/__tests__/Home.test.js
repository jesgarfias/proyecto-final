import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home";


jest.mock("../Header",()=>()=><p>header</p>);
jest.mock("../Banner",()=>()=><p>banner</p>);
jest.mock("../Serv",()=>()=><p>servcomponent</p>);
jest.mock("../OpinionUsers", ()=>()=><p>OpinionUser</p>)
jest.mock("../Footer",()=>()=><p>Footer</p>)

describe('Home', ()=>{
    it('should render all the components',()=>{
        render(
            <Home/>
        )
        expect(screen.getByText(/header/i)).toBeInTheDocument();
        expect(screen.getByText(/banner/i)).toBeInTheDocument();
        expect(screen.getByText(/servcomponent/i)).toBeInTheDocument();
        expect(screen.getByText(/opinionuser/i)).toBeInTheDocument();
        expect(screen.getByText(/footer/i)).toBeInTheDocument();
    })
})