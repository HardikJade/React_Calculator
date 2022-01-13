import React from 'react'
import '../css/Calculator.css'
import { Input } from './Input'
import { Screen } from './Screen'
export const CalcBody = () => {
    return (
        <>
            <div className="container">
                <Screen/>
                <Input/>
            </div>
        </>
    )
}
