/* eslint-disable testing-library/no-unnecessary-act */
import { render, cleanup, fireEvent, rerender } from '@testing-library/react'
import React from 'react'
import ContactForm from '../AsideContact/ContactForm'
import ContactFormContainer from '../AsideContact/ContactFormContainer'
afterEach(cleanup);

describe("Test Contact Form", ()=>{
    describe("With valid inputs - Thank you message" , ()=>{
        it('calls the onSubmit function'
        , ()=>{
            const {getByRole, container} = render(<ContactFormContainer/>)
            fireEvent.click(getByRole("button"))

            expect(container.outerHTML).toMatch(/.*Thank you for submitting the form!*/i);

        })
    })
    describe("Warning with invalid email", ()=>{
        it('calls the onSubmit function', ()=>{
            const {getByTestId} = render(<ContactForm/>)

            const emailInput = getByTestId("email")
            fireEvent.change(emailInput, {target: {value: 'email@test'}})
            const alert = getByTestId("alert")
            expect(alert.outerHTML).toMatch(/.*Please enter valid email adress.*/i);
        })
    })

    describe("Warning with invalid phonenumber", ()=>{
        it('calls the onSubmit function', ()=>{
            const {getByTestId} = render(<ContactForm/>)
            const emailInput = getByTestId("phone")
            fireEvent.change(emailInput, {target: {value: '042348985'}})
            const alert = getByTestId("alert")
            expect(alert.outerHTML).toMatch(/.*Please enter valid phone number.*/i);
        })
    })
})