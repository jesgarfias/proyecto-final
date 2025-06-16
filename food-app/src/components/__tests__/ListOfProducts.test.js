import { render,screen } from "@testing-library/react";
import ListOfProducts from "../../pages/ListOfProducts";

jest.mock("../Header",()=>()=><p>header</p>);
jest.mock("../ProductsList",()=>()=><p>ProductList</p>);
jest.mock("../Footer",()=>()=><p>Footer</p>)

describe('ListOfProducts',()=>{
    it('should render all components',()=>{
        render(
            <ListOfProducts/>
        )

        expect(screen.getByText(/Header/i)).toBeInTheDocument();
        expect(screen.getByText(/ProductList/i)).toBeInTheDocument();
        expect(screen.getByText(/Footer/i)).toBeInTheDocument();
    })
})