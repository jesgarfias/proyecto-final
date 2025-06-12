import { render, screen, getByText } from "@testing-library/react";
import Banner from "../Banner";

jest.mock("react-typed", () => ({
  ReactTyped: (props) => <span>{props.strings[0]}</span>,
}));

describe('Banner',()=>{
    it('should render the img and the text',()=>{
        render(
            <Banner/>
        )
        const img=screen.getByAltText(/diferentes tipos de comida/i)
        expect(img).toBeInTheDocument();
    });
    it('shound render the text in the banner',()=>{
        render(
            <Banner/>
        )
        const txt=screen.getByText(/te ayudamos a cumplir tus objetivos/i)
        expect(txt).toBeInTheDocument();
    })
})