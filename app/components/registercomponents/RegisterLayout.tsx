"use client"
import { useFormContext } from '@/app/assets/contexts'
import React from 'react'
import Login from './Login'
import SignUp from './SignUp'

export default function RegisterLayout() {
    const { form } = useFormContext()
    return (
        
        <>
        { form === "login"  ? <Login/> : <SignUp/>}
        </>
        
    )
}
