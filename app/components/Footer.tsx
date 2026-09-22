"use client"
import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useThemeContext } from '../assets/contexts'
import img from "../../public/images/image.png"
import Image from 'next/image'
import { Facebook , Tiktok , Whatsapp } from 'react-bootstrap-icons'
export default function Footer() {
    const { theme } = useThemeContext()

    
    return (
        <motion.footer
            
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: .3  , once:true}}
            transition={{duration:1}}
            className={`   py-10 px-2.5 md:px-20 grid grid-cols-1 md:grid-cols-4 text-center gap-2.5 border-t-4 border-blue-600 ${theme==="light"?"bg-gray-200 text-black":"bg-gray-800 text-white"} `}
        >
        <div className="h-80  col-span-1 md:col-span-2 w-full bg-blue-600 [clip-path:polygon(38%_0%,62%_0%,62%_28%,100%_28%,100%_52%,62%_52%,62%_100%,38%_100%,38%_52%,0%_52%,0%_28%,38%_28%)]" >
                <Image
                    src={img}
                    alt='img'
                    width={300}
                    height={300}
                    className='h-full w-full   '
                    loading='lazy'
                />
            </div>
            
            <div> 
                <h3 className='text-5xl text-blue-600 mb-2.5'>  روابط سريعه </h3>
                <ul>
                    <li>
                        <Link className='text-2xl  mb-1 inline-block hover:text-blue-600 hover:translate-x-1' href={"/"}> الصفحه الرئيسيه </Link>
                    </li>
                    <li>
                        <Link className='text-2xl  mb-1 inline-block hover:text-blue-600 hover:translate-x-1' href={"/subs"}> الباقات المتاحه </Link>
                    </li>
                </ul>

            </div>

            <div>
                <h3 className='text-5xl text-blue-600 mb-2.5'>  سوشيال ميديا </h3>
                <ul>
                    <li>
                        <div className={`   flex  justify-center gap-2.5  mb-3 items-center p-3 rounded-3xl ${theme==="light" ? "bg-gray-400":"bg-gray-700  text-[23px]"} `}>
                            <Facebook/>
                            <a href="#"> فيسبوك </a>
                        </div>
                    </li>
                    <li>
                        <div className={`   flex  justify-center gap-2.5  mb-3 items-center p-3 rounded-3xl ${theme==="light" ? "bg-gray-400":"bg-gray-700  text-[23px]"} `}>
                            <Tiktok/>
                            <a href="#"> تيك توك </a>
                        </div>
                    </li>
                    <li>
                        <div className={`   flex   justify-center gap-2.5 mb-3 items-center p-3 rounded-3xl ${theme==="light" ? "bg-gray-400":"bg-gray-700 text-[23px]"} `}>
                            <Whatsapp/>
                            <a href="#"> واتساب </a>
                        </div>
                    </li>
                </ul>
            </div>
        </motion.footer>
    )
}
