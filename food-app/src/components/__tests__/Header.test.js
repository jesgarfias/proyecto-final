import { render,screen, fireEvent, waitFor } from "@testing-library/react"
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
        const linkElement=screen.getAllByText(/Recetas/i);
        expect(linkElement.length).toBeGreaterThan(0);
    })

    it('should toggle the menu on hamburger click', async()=>{
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )
        const menuBTn=screen.getByTestId('menuBtn');
        const dropMenu=screen.getByTestId('dropMenu');
        /*expect(dropMenu).toHaveStyle('opacity: 0')

        fireEvent.click(menuBTn);
        await waitFor(()=>{
            expect(dropMenu).toHaveStyle('opacity: 1');
        })*/
        expect(dropMenu).toHaveAttribute('data-open', 'false');

        fireEvent.click(menuBTn);

        await waitFor(()=>{
            expect(dropMenu).toHaveAttribute('data-open', 'true');
        })
    })
})