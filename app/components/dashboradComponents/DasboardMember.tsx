"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MemberType } from '../../assets/assets'
import img from "../../../public/images/images.png"
import { useThemeContext } from '../../assets/contexts'

export default function DasboardMember({ member }: { member: MemberType }) {
    const { theme } = useThemeContext()
    const [activeState, setActiveState] = useState<boolean>(member?.isActive)

    const handleToggleActive = async () => {

        setActiveState(!activeState)
    
        try {
            const response = await fetch(`https://mahinproject.runasp.net/api/User/${member.id}/toggle-active`, {
                method: 'PATCH', 
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({
                    ...member,
                    isActive: activeState 
                })
            })
    
            if (response.ok) {
            console.log("Updated successfully:", response.status)
            }
        } catch (err) {

            console.error("Network error:", err)
        }
    }
    return (
        <div className={`p-4   ${theme==="light"?"bg-gray-100 text-black":"bg-gray-600 text-white"}  rounded-2xl gap-2.5 border border-blue-600 mb-2 flex flex-wrap items-center justify-between`}>
                <Image 
                    src={member?.photoUrl  ? member?.photoUrl  : img}
                    alt='img'
                    width={300}
                    loading='lazy'
                    height={300}
                    className={`w-20 h-20 rounded-full object-cover ${activeState ? "border-4 border-green-600" : "border-4 border-red-600"} `}
                />
            <div>
                <h3 className='text-2xl '>{member.fullName}</h3>
                <p> {member.phoneNumber} </p>
            </div>
            <h3 className='text-2xl '>
                الاشتراك: {activeState ? "نشط" : "غير نشط"}
            </h3>
            <div className="flex gap-2.5 items-center">
                <button onClick={async () => {
                    await handleToggleActive()
                }} className={`p-3 text-white rounded-2xl ${activeState ? "bg-green-700" : "bg-red-700"}`}>
                    {activeState ? "إلغاء التفعيل" : "تفعيل"}
                </button>
                <Link  className='p-3 rounded-2xl bg-blue-600 hover:bg-blue-800'  href={`/viewProfile/${member.id}`}> معاينه </Link>
            </div>
        </div>
    )
}