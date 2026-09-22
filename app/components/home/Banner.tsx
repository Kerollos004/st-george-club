"use client"
import React from 'react'
import Image from 'next/image'
import img from "../../../public/images/WhatsApp Image 2026-08-16 at 1.58.52 AM.jpeg"
import { verseArray } from '@/app/assets/assets'
import { motion , Variants } from 'motion/react'
export default function Banner() {
    const versevariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition:{duration:.5 , type:"spring" , stiffness:300 , delayChildren:.2 , delay:1, staggerChildren:.2}
        },
        
    };
    const wordVarints: Variants = {
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
        <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ amount: .5 ,  once:true }}
            style={{transformOrigin:"top"}}
            dir='rtl'
            className="w-full h-[70vh] px-5 md:px-20 flex items-center justify-center relative"
        >
            <Image
            src={img}
            alt='img'
            width={500}
            height={500}
            loading='lazy'
            className='h-full absolute top-0 left-0 object-cover    w-full'
            />
            <motion.div
                variants={versevariants}
                initial="hidden"
                whileInView="visible"
                viewport={{amount:.5 , once:true}}
                className='flex flex-wrap gap-3 justify-center'
            >
                {
                    verseArray.map((verse, i) => {
                        return (
                            <motion.h3  variants={wordVarints} key={i} className='text-6xl text-white font-bold z-30 relative' > {verse} </motion.h3>
                        )
                    })
                }
            </motion.div>
        </motion.div>
    )
}
