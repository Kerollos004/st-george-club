"use client"
import React from 'react'
import Link from 'next/link'
import { useFormContext,  } from '../../assets/contexts'
import Image from 'next/image'
import img from "../../../public/images/image.png"
import { motion , Variants } from 'motion/react'
export default function HeroSection() {
    const { setForm } = useFormContext()
    const textsVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition:{duration:.5 , type:"spring" , stiffness:300 , delayChildren:.2 , staggerChildren:.2}
        },
        
    };
    const textVariant: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
        
    };
    
return (
    <section className={`  w-full flex items-center justify-center text-center relative px-2.5 md:px-20  pt-25 py-10  h-screen `}> 
        <motion.div
            variants={textsVariants}
            initial="hidden"
            animate="visible"
            className='relative z-20 '
        >
            <motion.h3
                variants={textVariant}

                className='text-5xl mb-3 font-bold '
            > هدفنا هو ربح النفوس
            </motion.h3>
            <motion.p
                variants={textVariant}

                className='text-4xl mb-3 '
            >اهلا بكم في نادي الكنيسه
            </motion.p>
            <motion.div
                variants={textVariant}

                className="flex flex-col  justify-center md:flex-row gap-2.5"
            >
                <Link className='inline-block py-2.5 px-5 rounded-2xl text-2xl bg-blue-600 hover:bg-blue-800 text-white' href={"/subs"}>  اختر باقتك </Link>
                <Link  onClick={()=>{setForm("signup")}} className='inline-block py-2.5 px-5 rounded-2xl text-2xl bg-blue-800 hover:bg-blue-900 text-white' href={"/register"}>انشئ حساب</Link>
            </motion.div>
        </motion.div>
        <motion.div
            initial={{   opacity:0 }}
            animate={{  opacity:1}}
            transition={{duration:1 }}
        >
            <Image
                src={img}
                alt='img'
                width={300}
                height={300}
                className='w-full h-screen object-cover z-0 top-0 left-0 absolute'
            />
            <span className={` absolute top-0 left-0  bg-linear-to-r   from-slate-900 via-slate-700/90 to-transparent w-full h-screen`}></span>    
        </motion.div>


    </section>
)
}
