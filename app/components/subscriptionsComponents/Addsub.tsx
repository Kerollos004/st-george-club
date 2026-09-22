"use client"

import { NewSub } from "@/app/assets/assets"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useThemeContext } from "@/app/assets/contexts"
export default function Addsub() {
    const [plan, setPlan] = useState<NewSub>({ name: "", price: 0, durationInDays: 0, targetAgeGroup: 0 })
    const router = useRouter()
    const {theme} = useThemeContext()
    const handleAddPlan = async () => {
        try { 
            const res = await fetch("https://mahinproject.runasp.net/api/Subscription/craete-plan", {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(plan)
            })
            const newPlan = await res?.json()
            if (res.ok) {
                return newPlan
            }
            router.push("/dashboard")
        }
        catch (err) {
            console.error(err)
        }

    }
    return (
        <form action="" className={`  ${theme==="light"?"bg-gray-200 text-black":"bg-gray-800 text-white"}  w-11/12 p-6 md:w-200 border border-r-4 border-blue-600 rounded-2xl border-b-4  bg-gray-200`}>
            <h3 className='text-2xl text-blue-600 text-center mb-5 font-bold '> انشاء خطه جديده </h3>
            <div className="  flex flex-col gap-1.5">
                <label  htmlFor="input"> اسم الخطه </label>
                <input 
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                        setPlan({...plan , name:e.target.value})
                    }}
                value={plan.name}
                type="text"
                placeholder=" ِشهري اعدادي"
                className='p-2  mb-3 w-full text-[17px] rounded-2xl border border-blue-600 focus:bg-blue-700'
                />
            </div>
            <div className="  flex flex-col gap-1.5">
                <label  htmlFor="input">  السعر </label>
                <input
                        value={plan.price === 0 ?"" :plan.price}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                        setPlan({...plan , price : Number(e.target.value)})
                    }}
                    type="number"
                    placeholder='150 جنيه'
                    className='p-2  mb-3 w-full text-[17px] rounded-2xl border border-blue-600 focus:bg-blue-700'
                />
            </div>
            <div className="  flex flex-col gap-1.5">
                <label  htmlFor="input">المده</label>
                <input 
                        value={plan.durationInDays === 0 ? "" : plan.durationInDays}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                        setPlan({...plan , durationInDays: Number(e.target.value)})
                    }}
                    type="number"
                    placeholder='30 يوم'
                    className='p-2  mb-3 w-full text-[17px] rounded-2xl border border-blue-600 focus:bg-blue-700'
                />
            </div>
            <div className="  flex flex-col gap-1.5">
                <label  htmlFor="input">المرحله العمريه</label>
                <select
                    value={plan.targetAgeGroup }
                    className='w-full p-2  mb-3  text-[17px] rounded-2xl border border-blue-600 focus:bg-blue-700'
                    onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>{
                        setPlan({ ...plan, targetAgeGroup: Number(e.target.value) })
                    }}
                >
                    <option value={0}>ابتدايي</option>
                    <option value={1}>اعدادي</option>
                    <option value={2}>ثانوي</option>
                    <option value={3}>جامعه</option>
                    <option value={4}>خريجين</option>
                </select>
            </div>
            <button onClick={async (e) => {
                e.preventDefault()
                await handleAddPlan()
            }}  className='p-3 rounded-3xl w-full text-center bg-blue-600 hover:bg-blue-800' > اضف خطه جديده </button>
        </form>
    )
}
