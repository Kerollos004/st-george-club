/* eslint-disable react-hooks/set-state-in-effect */
"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Icon, MoonFill , BrightnessHighFill, List } from 'react-bootstrap-icons'
import { useMenuContext, useThemeContext, useUpdatedUserContext } from '../assets/contexts'
import logo from "../../public/images/WhatsApp Image 2026-08-15 at 5.55.47 AM.jpeg"
import Image from 'next/image'
import altImg from "../../public/images/images.png"
import { getUserFromToken } from '../assets/Apis'
import { motion } from 'motion/react'
export default function Header() {
    const { theme , setTheme} = useThemeContext()
    const [ThemeIcon, setThemeIcon] = useState<Icon>(MoonFill)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const { UpdatedUser, setUpdatedUser } = useUpdatedUserContext()
    const {isOpen, setIsOpen} = useMenuContext()
    const handleToggleTheme = ()=>{
        if(theme === "light"){
            setTheme("dark")
            localStorage.setItem("theme" , "dark")
            setThemeIcon(BrightnessHighFill)
            document.querySelector("body")?.classList.remove("light-mode")
            document.querySelector("body")?.classList.add("dark-mode")
        }
        else{
            setTheme("light")
            localStorage.setItem("theme" , "light")
            setThemeIcon(MoonFill)
            document.querySelector("body")?.classList.remove("dark-mode")
            document.querySelector("body")?.classList.add("light-mode")
        }
    }

    useEffect(()=>{
        const currentTheme = localStorage.getItem("theme")
        if(currentTheme === "dark"){
            setTheme("dark")
            setThemeIcon(BrightnessHighFill)
            document.querySelector("body")?.classList.remove("light-mode")
            document.querySelector("body")?.classList.add("dark-mode")
        }else{
            setTheme("light")
            setThemeIcon(MoonFill)
            document.querySelector("body")?.classList.remove("dark-mode")
            document.querySelector("body")?.classList.add("light-mode")
        }
    } , [setTheme])


    


    useEffect(() => {


    const fetchUserData = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            return;
        }

        const decoded = getUserFromToken(token);
        const userId = decoded?.id;

        if (!userId) {
            setIsLoggedIn(false);
            return;
        }

        try {
            const res = await fetch(`https://mahinproject.runasp.net/api/User/get-user/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            if (!res.ok) {
                const errorData = await res.text();
                throw new Error(`Server status ${res.status}: ${errorData}`);
            }

            const data = await res.json();
            setUpdatedUser(data)
            setIsLoggedIn(true);

        } catch (err) {
            console.error(err)
        }
    };

    fetchUserData();

}, [setUpdatedUser]);
return (
    <motion.header
        initial={ {y:-50 , opacity:0} }
        animate={{ y: 0 , opacity:1 }}
        transition={{duration:1}}
        className={`   ${theme === "light" ? "text-black" : "text-white"}  bg-black/15 backdrop-blur-md  w-full h-20 px-5 md:px-20 text-[20px] fixed text-black flex items-center justify-between top-0 left-0 z-30`}
    >
        <div>
        <Image
            src={logo}
            alt='img'
            width={300}
            height={300}
            className='w-18 h-18 rounded-full object-cover'
        />
        </div>
        <ul className={`
            absolute top-full left-0 w-1/2 md:w-auto
            ${isOpen ? "h-37.5" : "h-0"} 
            md:flex md:items-center md:flex-row 
            ${theme === "light" ? "bg-gray-200 text-black" : "bg-gray-800 text-white"} 
            overflow-hidden rounded-3xl flex flex-col items-center justify-center gap-3  md:p-0 md:static
            md:bg-transparent md:justify-between md:h-auto
        `}>
            <li>
                <Link onClick={()=>{setIsOpen(false)}} className='hover:text-blue-600 capitalize text-[25px]' href={"/"}>  الصفحه الرئيسيه </Link>
            </li>
            <li>
                <Link onClick={()=>{setIsOpen(false)}} className='hover:text-blue-600 capitalize text-[25px]' href={"/subs"}>الباقات</Link>
            </li>
            {
                isLoggedIn ? 
                    <li className={`${UpdatedUser?.role==="Admin"?"block":"hidden"}`}>
                        <Link  onClick={()=>{setIsOpen(false)}} className='hover:text-blue-600 capitalize text-[25px]' href={"/dashboard"}> صفحه الادمن </Link>
                    </li>
                :""
            }
        </ul>
        <div className="flex items-center gap-3">
            {isLoggedIn ? 
        
                <Link href={`/viewProfile/${UpdatedUser?.id}`}>
                <Image
                    src={UpdatedUser?.photoUrl ? UpdatedUser.photoUrl : altImg}
                    alt='img'
                    width={300}
                    height={300}
                    className='w-15 h-15 rounded-full '
                />
                </Link>
        :
                <Link className='px-5 py-2.5 capitalize bg-blue-600 hover:bg-blue-800 rounded-3xl' href={"/register"}>تسجيل الدخول</Link>
        }
            <ThemeIcon onClick={handleToggleTheme} className='hover:text-blue-600 text-2xl' />
            <List  className='hover:text-blue-600 text-2xl block md:hidden' onClick={()=>{setIsOpen(!isOpen)}} />
        </div>
    </motion.header>
)
}
