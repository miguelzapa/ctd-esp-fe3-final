import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Form from '../Components/Form'

describe("send function in the form", () =>{
    test("show wrong message", () => {
        const { container } = render(<Form />)
        const enviar = container.querySelector("button")
        fireEvent.click(enviar)
        const textInfo = screen.getByText("Please verify your information again")
        expect(textInfo).toBeInTheDocument

    })
})