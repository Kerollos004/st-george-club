"use client"
import React from 'react'
import { subType } from '../../assets/assets'
import { useThemeContext } from '@/app/assets/contexts'

export default function DashboradSup({ sub }: { sub: subType }) {
    const {theme} = useThemeContext()
    const getStages = ()=>{
        if(sub.targetAgeGroup === 0){
            return "ابتدايي"
        }
        if(sub.targetAgeGroup === 1){
            return "اعدادي"
        }
        if(sub.targetAgeGroup === 2){
            return "ثانوي"
        }
        if(sub.targetAgeGroup === 3){
            return "حامعه"
        }
        if(sub.targetAgeGroup === 4){
            return "خريجين"
        }
        else {
            return "للجميع"
        }
    }
return (
    <div className={`   ${theme==="light"?"bg-gray-100 text-black":"bg-gray-600 text-white"}  p-4 rounded-2xl border gap-2.5 border-blue-600 mb-2 grid grid-cols-1 md:grid-cols-2 items-center `}>
        <h3 className='text-2xl'> النوع: {sub.name.replace("_", " ")} </h3>
        <h3 className='text-2xl'> السعر: {sub.price} جنيه </h3>
        <h3 className='text-2xl'> المده :{sub.durationInDays}  يوم</h3>
        <h3 className='text-2xl'> الحاله: {sub.isActive?"متاح":"غير متاح"} </h3>
        <h3 className='text-2xl'> المرحله العمريه: {getStages()} </h3>
    </div>    
)
}
