import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";

jest.mock("../../pages/Home.js",()=>()=><div>Home Page</div>)

describe('app routing',()=>{
    it("renders Home component on '/' route", () => {
        window.history.pushState({}, "Home page", "/");    
        render(
            <App />
        );
        expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
})
})