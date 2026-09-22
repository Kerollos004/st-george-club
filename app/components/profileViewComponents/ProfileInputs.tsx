// /* eslint-disable react-hooks/set-state-in-effect */

"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { getAllPlans } from '@/app/assets/Apis'
import { MemberType, selectedSubType, subType } from '@/app/assets/assets'
import { XCircleFill } from 'react-bootstrap-icons'
import { useEditContext,  useThemeContext, useUpdatedUserContext } from '@/app/assets/contexts'
import img from "../../../public/images/images.png"

export default function ProfileInputs({ member }: { member: MemberType }) {
    const { theme } = useThemeContext()
    const { isEdit, setIsEdit } = useEditContext() 
    const { setUpdatedUser, UpdatedUser } = useUpdatedUserContext()
    const [allSubs, setAllSubs] = useState<subType[]>([])
    const [selectedPlanId, setSelectedPlanId] = useState<string>("")
    const [selectedPlan, setSelectedPlan] = useState<selectedSubType>({
        id: "", 
        name: "", 
        price: 0, 
        isActive: false, 
        startDate: "", 
        endDate: ""
    })
    const [updatedImage, setUpdatedImage] = useState<File | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [subLoading, setSubLoading] = useState<boolean>(false)

    const [userData, setUserData] = useState<MemberType>({
        id: member.id,
        fullName: member.fullName || "",
        phoneNumber: member.phoneNumber || "",
        email: member.email || "",
        ageGroup: member.ageGroup || "",
        gender: member.gender || "",
        activeSubscription: member.activeSubscription ,
        photoUrl: member.photoUrl || "",
        isActive: member.isActive,
        role: member.role,
        nfcUrl: member.nfcUrl,
    })

    useEffect(() => {
        setUpdatedUser(member)
    }, [setUpdatedUser, member])

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const results = await getAllPlans()
                setAllSubs(results )
            } catch (err) {
                console.error("❌ خطأ في جلب الباقات:", err)
            }
        }
        fetchPlans()
    }, [])


    

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            setUpdatedImage(file)
        }
    }

    const handleEditUser = async () => {
        setLoading(true)
        const token = localStorage.getItem("token")
        const currentId = member?.id || userData?.id || ""

        const formData = new FormData()
        formData.append("Id", currentId)
        formData.append("id", currentId)
        formData.append("FullName", userData.fullName)
        formData.append("PhoneNumber", userData.phoneNumber)
        formData.append("Email", userData.email)
        formData.append("AgeGroup", String(userData.ageGroup))
        formData.append("Gender", String(userData.gender))

        if (updatedImage) {
            formData.append("PhotoUrl", updatedImage)
        }

        try {
            const res = await fetch(`https://mahinproject.runasp.net/api/User/update-user/${currentId}`, {
                method: "PUT",
                headers: {
                    ...(token ? { "Authorization": `Bearer ${token}` } : {})
                },
                body: formData
            })

            if (res.ok) {
                const data = await res.json()
                console.log("✅ تم تحديث بيانات المستخدم:", data)
                setUpdatedUser(data)
                setIsEdit(false)
            } else {
                const errorDetails = await res.json()
                console.error("❌ خطأ من السيرفر:", errorDetails)
            }
        } catch (err) {
            console.error("❌ خطأ شبكة:", err)
        } finally {
            setLoading(false)
        }
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const planId = e.target.value
        setSelectedPlanId(planId)

    const selectedPlanTarget = allSubs.find((s) => String(s.id) === String(planId))
    if (selectedPlanTarget) {
        const now = new Date();
        
        const endTime = new Date(now);
        endTime.setDate(now.getDate() + 30);
    
        setSelectedPlan({
            id: String(selectedPlanTarget.id),
            name: selectedPlanTarget.name,
            price: selectedPlanTarget.price || 0,
            isActive: true,
            startDate: now.toISOString(),   
            endDate: endTime.toISOString()  
        });
    }
    }

    const handlePostSub = async () => {
        if (!selectedPlanId) return
        setSubLoading(true)
        const token = localStorage.getItem("token")
        const currentId = member?.id || userData?.id || ""
        try {
            const res = await fetch("https://mahinproject.runasp.net/api/Subscription/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { "Authorization": `Bearer ${token}` } : {})
                },
                body: JSON.stringify({
                    UserId: currentId,
                    SubscriptionPlanId: Number(selectedPlan?.id),
                    UserName: userData.fullName,
                    UserPhoneNumber: userData.phoneNumber,
                    PlanName: selectedPlan?.name,
                    Price: selectedPlan.isActive? selectedPlan.price : selectedPlan.price+20 ,
                    IsActive: selectedPlan?.isActive,
                    StartDate: selectedPlan?.startDate,
                    EndDate: selectedPlan?.endDate
                })
            })

            

            if (res.ok) {
                const subData = await res.json()
                console.log("✅ تم إسناد الباقة بنجاح:", subData)
            } else {
                const errorData = await res.json()
                console.error("❌ خطأ أثناء إسناد الباقة:", errorData)
            }
        } catch (err) {
            console.error("❌ خطأ شبكة أثناء إسناد الباقة:", err)
        } finally {
            setUpdatedUser({ ...UpdatedUser, ...selectedPlan })
            setSubLoading(false)
        }
    }



    return (
        <article className={` ${isEdit ? "grid" : "hidden"} ${theme === "light" ? "bg-gray-200 text-black" : "bg-gray-800 text-white"} relative p-6 rounded-2xl border border-blue-600 grid-cols-1 md:grid-cols-2 gap-3 items-center`}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2.5'>
                <div className="flex flex-col gap-2.5">
                    <label>الاسم</label>
                    <input
                        value={userData.fullName} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, fullName: e.target.value })}
                        type="text" 
                        className='p-2 w-full text-[17px] rounded-2xl border border-blue-600 focus:outline-none focus:border-blue-800 text-black'
                    />
                </div>

                <div className="flex flex-col gap-2.5">
                    <label>التليفون</label>
                    <input
                        value={userData.phoneNumber} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, phoneNumber: e.target.value })}
                        type="text" 
                        className='p-2 w-full text-[17px] rounded-2xl border border-blue-600 focus:outline-none focus:border-blue-800 text-black'
                    />
                </div>

                <div className="flex flex-col gap-2.5">
                    <label>الايميل</label>
                    <input
                        value={userData.email} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, email: e.target.value })}
                        type="email" 
                        className='p-2 w-full text-[17px] rounded-2xl border border-blue-600 focus:outline-none focus:border-blue-800 text-black'
                    />
                </div>

                <div className="flex flex-col gap-2.5">
                    <label>المرحله العمريه</label>
                    <input
                        value={userData.ageGroup} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, ageGroup: e.target.value })}
                        type="text" 
                        className='p-2 w-full text-[17px] rounded-2xl border border-blue-600 focus:outline-none focus:border-blue-800 text-black'
                    />
                </div>

                <div className="flex flex-col gap-2.5">
                    <label>الفئه</label>
                    <input
                        value={userData.gender} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, gender: e.target.value })}
                        type="text" 
                        className='p-2 w-full text-[17px] rounded-2xl border border-blue-600 focus:outline-none focus:border-blue-800 text-black'
                    />
                </div>

                <div className="flex flex-col gap-2.5">
                    <label>الباقه المختاره</label>
                    <select
                        value={selectedPlanId}
                        onChange={handleSelectChange}
                        className='p-2 w-full text-[17px] rounded-2xl border border-blue-600 focus:outline-none focus:border-blue-800 text-black'
                    >
                        <option value="">اختر الباقة</option>
                        {allSubs.map((sub) => (
                            <option key={sub.id} value={sub.id}>
                                {sub.name.replace("_", " ")}
                            </option>
                        ))}
                    </select>

                    <button 
                        disabled={subLoading || !selectedPlanId}
                        onClick={async (e: React.MouseEvent) => {
                            e.preventDefault()
                            await handlePostSub()
                        }} 
                        className={`p-3 ${selectedPlanId ? "block" : "hidden"} rounded-3xl w-full text-center bg-blue-600 hover:bg-blue-800 text-white font-bold transition-all disabled:bg-gray-400`}
                    >
                        {subLoading ? "جاري الإسناد..." : "إسناد الباقة"}
                    </button>
                </div>
            </div>

            <div className='flex flex-col my-4 gap-2.5 items-center justify-center'>
                <Image
                    src={ userData.photoUrl ? userData.photoUrl : img}
                    alt='Profile'
                    width={300}
                    height={300}
                    className={`w-40 h-40 object-cover rounded-full border-4 ${member.isActive ? "border-green-600" : "border-red-600"}`}
                />
                <div className="flex flex-col gap-2.5 w-full max-w-xs">
                    <label>الصوره الشخصيه</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className='p-2 w-full text-[17px] rounded-2xl border border-blue-600 focus:outline-none'
                    />
                </div>
            </div>

            <button 
                disabled={loading}
                onClick={async (e: React.MouseEvent) => {
                    e.preventDefault()
                    await handleEditUser()
                }} 
                className='col-span-1 md:col-span-2 p-3 rounded-3xl w-full text-center bg-blue-600 hover:bg-blue-800 text-white font-bold transition-all disabled:bg-gray-400'
            >
                {loading ? "جاري الحفظ..." : "حفظ التغييرات"}
            </button>

            <XCircleFill 
                onClick={() => setIsEdit(false)} 
                className='absolute top-3 right-3 text-[18px] cursor-pointer hover:text-red-600 transition-colors' 
            />
        </article>
    )
}