import { render,screen } from "@testing-library/react";
import Recipes from "../../pages/Recipes";


jest.mock("../Header",()=>()=><p>Header</p>);
jest.mock("../RecipeRadar",()=>()=><p>Look for recipe</p>);
jest.mock("../Footer",()=>()=><p> Footer</p>)

describe('Recipes',()=>{
    it('should render all components',()=>{
        render(
            <Recipes/>
        )
        expect(screen.getByText(/Header/i)).toBeInTheDocument();
        expect(screen.getByText(/Look for recipe/i)).toBeInTheDocument();
        expect(screen.getByText(/Footer/i)).toBeInTheDocument();
    })
})