"use client"
import React from 'react'
import Image from 'next/image'
import aboutImg from "../../../public/images/image copy.png"
import { aboutWords } from '@/app/assets/assets'
import { motion  , Variants} from 'motion/react'
export default function About() {
    const aboutvariants: Variants = {
        hidden: {
            opacity: 0.5,
        },
        visible: {
            opacity: 1,
            transition:{duration:.5 , type:"spring" , stiffness:300 , delayChildren:.2 , delay:1, staggerChildren:.1}
        },
        
    };
    const wordVarints: Variants = {
        hidden: {
            opacity: 0.5,
        },
        visible: {
            opacity: 1,
        }
        
    };
return (
    <div className={`grid grid-cols-1 md:grid-cols-[55%_45%]  overflow-hidden py-10 px-5 md:px-20 gap-2.5 items-center  `}>
        <motion.div className=""
            initial={{x:-200 , opacity:0}}
            whileInView={{x:0 , opacity:1}}
            viewport={{amount:.4 ,  once:true}}
        >
            <motion.div
                variants={aboutvariants}
                initial="hidden"
                whileInView='visible'
                viewport={{amount:.4}}
            >
                <h3 className={`p-3 text-3xl rounded-3xl  border border-blue-600 w-fit text-blue-600 `}>قصتنا</h3>
                <h3 className='text-4xl font-semibold capitalize text-blue-600 mb-3'> تخطيط و صلاه و تعب بمحبه </h3>
                <div className='flex flex-wrap gap-2'>
                    {
                        aboutWords.map((word , i) => {
                            return (
                                <motion.p variants={wordVarints} key={i}> {word} </motion.p>
                            )
                        })
                    }
                </div>
            </motion.div>
        </motion.div>
        <motion.div
            initial={{x:200 , opacity:0}}
            whileInView={{x:0 , opacity:1}}
            viewport={{amount:.4}}
        >
            <Image
                src={aboutImg}
                alt='img'
                width={300}
                height={300}
                className='h-120 w-full border-4 rounded-3xl border-blue-600 object-cover '
            />
        </motion.div>
    </div>
)
}
