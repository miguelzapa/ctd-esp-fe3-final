import React from "react";
import { screen, render } from "@testing-library/react";
import Home from '../Routes/Home';
import ContextProvider from "../Components/utils/global.context";
import Card from "../Components/Card";


describe("home card rendering", () =>{
    test("render cards", () => {
        render(<ContextProvider>
            <Home/>
        </ContextProvider>)
        const card = screen.getByText("Home")
        expect(card).toBeInTheDocument
    })
})