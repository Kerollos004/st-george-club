"use client"
import React from 'react'
import { PlanType } from '../../assets/assets'
import Image from 'next/image'
import clubImg from "../../../public/images/image copy.png"
import { useThemeContext } from '@/app/assets/contexts'
export default function Sub({ plan }: { plan: PlanType }) {
    const {theme} = useThemeContext()
        const getStages = ()=>{
        if(plan.targetAgeGroup === 0){
            return "  مرحله ابتدايي "
        }
        if(plan.targetAgeGroup === 1){
            return " مرحله اعدادي"
        }
        if(plan.targetAgeGroup === 2){
            return "  مرحله ثانوي"
        }
        if(plan.targetAgeGroup === 3){
            return  " مرحله جامعه "
        }
        if(plan.targetAgeGroup === 4){
            return "مرحله خريجين"
        }
        else {
            return "للجميع"
        }
    }
return (
    <div className={`   ${theme === "light" ? "bg-gray-200" : "bg-gray-800"} overflow-hidden   border border-r-4  border-b-4 border-blue-600 rounded-2xl`}>
        <Image 
            src={clubImg}
            alt='img'
            width={300}
            height={300}
            className='w-full h-80 object-cover object-top'
            loading='lazy'
        />
        <div className="p-3">
            <h3 className='text-4xl text-center text-blue-600 mb-2.5 capitalize'>{plan.name.replace("_" , "")}</h3>
            <p className='text-4xl text-center text-blue-600 mb-2.5'> متاح {getStages()}</p>
            <h3 className='text-4xl text-center  text-blue-600 mb-2.5 uppercase'>{plan.price}جنيه / الشهر</h3>
        </div>
    </div>
)
}
