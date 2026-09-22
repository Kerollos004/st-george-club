import {  LoginUser } from "./assets"
import { jwtDecode } from "jwt-decode"
//authentication
export const handleAuth = async (user: LoginUser) => {
    try { 
        const res = await fetch("https://mahinproject.runasp.net/api/Auth/login", {
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                PhoneNumber: user.PhoneNumber, 
                Password: user.Password
            })
        })

        if (!res.ok) {
            console.log("error in auth")
        }

        const data = await res.json()

        if (data?.token) {
            localStorage.setItem("token" , data?.token)
        }
        if (!res.ok) {
            console.log("SERVER ERRORS DETAILS:",)
            return { success: false, errors: data.errors }
        }

        console.log("Logged in successfully:", )
        return { success: true, data }


    } catch (err) {
        console.error("Network error:", err)
    }
}


import {  JwtPayload } from "jwt-decode";

// 1. تعريف الواجهة لتشمل الـ Custom URIs من ASP.NET
interface CustomJwtPayload extends JwtPayload {
    FullName?: string;
    IsActive?: string;
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"?: string;
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"?: string;
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"?: string;
}

export const getUserFromToken = (token: string) => {
    try {
        // 2. إعطاء الـ Generic Type للدالة
        const decoded = jwtDecode<CustomJwtPayload>(token);
        return {
            id: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
            fullName: decoded.FullName,
            email: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
            role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
            isActive: decoded.IsActive === "true",
            exp: decoded.exp
        };
    } catch (error) {
        console.error("Failed to decode token:", error);
        return null;
    }
};

//apis endpoints
    export const getAllUsers = async () => {
        try{
        const response = await fetch("https://mahinproject.runasp.net/api/User/get-all-user")
        if (response.ok) {
            const results = await response.json()
            return results
        }
        if (!response.ok) {
            console.log("errrrrrroooooor")
        }
        }catch(err){
            console.error(err)
        }
    }

    export const getAllPlans = async () => {
        try{
            const response = await fetch("https://mahinproject.runasp.net/api/Subscription/get-all-plans")
            if (response.ok) {
            const results = await response.json()
            return results
        }
        if (!response.ok) {
            console.log("errrrrrroooooor")
        }
        }catch(err){
            console.error(err)
        }
    }