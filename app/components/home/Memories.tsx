"use client"
import React from 'react'
import Image from 'next/image'
import img1 from "../../../public/images/WhatsApp Image 2026-08-31 at 4.05.59 PM (1).jpeg"
import img2 from "../../../public/images/WhatsApp Image 2026-08-31 at 4.06.00 PM (1).jpeg"
import img3 from "../../../public/images/WhatsApp Image 2026-08-31 at 4.06.03 PM (1).jpeg"
import img4 from "../../../public/images/WhatsApp Image 2026-08-31 at 4.06.05 PM (1).jpeg"
import img5 from "../../../public/images/WhatsApp Image 2026-08-31 at 4.06.11 PM.jpeg"
import { motion  , Variants} from 'motion/react'
export default function Memories() {
    const wrraperVariants: Variants = {
        hidden: {
            scaleY:0
        },
        visible: {
            scaleY:1,
            transition:{duration:.5 , type:"spring" , stiffness:300 , delayChildren:.2 , staggerChildren:.4}
        },
        style: {
            transformOrigin:"top"
        }
        
    };
    const imgVariant: Variants = {
        hidden: {
            scaleY:0
        },
        visible: {
            scaleY:1,
        },
        style: {
            transformOrigin:"top"
        }
        
    };
    return (
        <motion.div
            variants={wrraperVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: .4 }}
            className={` py-10 px-5 md:px-20 gap-2.5  `}
        >
            <h3 className={`p-3 text-3xl rounded-3xl  border border-blue-600 w-fit text-blue-600 `}>  ذكرياتنا </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5   mt-3 ">
                <motion.div variants={imgVariant}  className='h-80  col-span-1 md:col-span-2 overflow-hidden rounded-3xl border-4 border-blue-600 '>
                    <Image  
                        src={img1}
                        alt='img'
                        width={300}
                        height={300}
                        className='h-full w-full  object-cover'
                    />
                </motion.div>
                <motion.div  variants={imgVariant} className='h-80 overflow-hidden rounded-3xl border-4 border-blue-600 '>
                    <Image  
                        src={img2}
                        alt='img'
                        width={300}
                        height={300}
                        className='h-full w-full object-cover'
                    />
                </motion.div>
                <motion.div  variants={imgVariant} className='h-80   overflow-hidden rounded-3xl border-4 border-blue-600 '>
                    <Image  
                        src={img3}
                        alt='img'
                        width={300}
                        height={300}
                        className='h-full w-full object-cover'
                    />
                </motion.div>
                <motion.div variants={imgVariant}  className='h-80  col-span-1 md:col-span-2 overflow-hidden rounded-3xl border-4 border-blue-600 '>
                    <Image  
                        src={img4}
                        alt='img'
                        width={300}
                        height={300}
                        className='h-full w-full object-cover'
                    />
                </motion.div>
                <motion.div variants={imgVariant}  className='h-80 overflow-hidden  col-span-1 md:col-span-3 rounded-3xl border-4 border-blue-600 '>
                    <Image  
                        src={img5}
                        alt='img'
                        width={300}
                        height={300}
                        className='h-full w-full object-cover'
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}
