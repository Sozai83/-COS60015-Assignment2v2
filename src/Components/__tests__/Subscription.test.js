/* eslint-disable testing-library/no-unnecessary-act */
import { render, cleanup, fireEvent } from '@testing-library/react'
import React from 'react'
import Subscription from '../Footer/Subscription'

afterEach(cleanup);

describe("Test Contact Form", ()=>{
    describe("Warning with invalid email", ()=>{
        it('calls the onSubmit function', ()=>{
            const {getByTestId} = render(<Subscription/>)
            const emailInput = getByTestId("email")
            fireEvent.change(emailInput, {target: {value: 'email@test'}})
            const alert = getByTestId("alert")
            expect(alert.outerHTML).toMatch(/.*Please enter valid email adress.*/i);
        })
    })
})