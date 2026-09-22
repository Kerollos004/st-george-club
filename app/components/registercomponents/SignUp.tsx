"use client"
import {  useState } from "react"
import { Icon, LockFill, UnlockFill } from "react-bootstrap-icons"
import { useFormContext, useThemeContext,  } from "../../assets/contexts"
import { SignupUser } from "../../assets/assets"

export default function SignUp() {
    const [type, setType] = useState<string>("password")
    const [IconComponent, setIconComponent] = useState<Icon>(LockFill)
    const [confirmType, setConfirmType] = useState<string>("password")
    const [ConfirmIconComponent, setConfirmIconComponent] = useState<Icon>(LockFill)

    const [loading, setLoading] = useState<boolean>(false)
    const {theme} = useThemeContext()
    const { setForm } = useFormContext()
    const [imageFile, setImageFile] = useState<File | null>(null)

    // State الحقول النصية
    const [user, setUser] = useState<SignupUser>({ 
        Id:"",
        FullName: "", 
        PhoneNumber: "", 
        Gender: "", 
        AgeGroup: "", 
        Email: "", 
        Password: "", 
        ConfirmPassword: "",
        PhotoUrl: "", 
    })


    const handleType = () => {
        if (type === "text") {
            setType("password")
            setIconComponent(LockFill)
        } else {
            setType("text")
            setIconComponent(UnlockFill)
        }
    }

    const handleConfirmType = () => {
        if (confirmType === "text") {
            setConfirmType("password")
            setConfirmIconComponent(LockFill)
        } else {
            setConfirmType("text")
            setConfirmIconComponent(UnlockFill)
        }
    }

    const clearInputs = () => {
        setUser({
        Id:"",
        FullName: "", 
        PhoneNumber: "", 
        Gender: "", 
        AgeGroup: "", 
        Email: "", 
        Password: "", 
        ConfirmPassword: "",
        PhotoUrl: ""
        })
    }

    const handleAddUser = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        // 1. إنشاء كائن FormData وتعبئته بالبيانات
        const formData = new FormData()
        formData.append("FullName", user.FullName)
        formData.append("PhoneNumber", user.PhoneNumber)
        formData.append("Gender", user.Gender)
        formData.append("AgeGroup", user.AgeGroup)
        formData.append("Email", user.Email)
        formData.append("Password", user.Password)
        formData.append("ConfirmPassword", user.ConfirmPassword)
        // إضافة الصورة فقط في حال تم اختيارها
        if (imageFile) {
            formData.append("PhotoUrl", imageFile) 
        }

        
        try { 
        const res = await fetch("https://mahinproject.runasp.net/api/Auth/register", {
            method: 'POST', 
            body: formData 
        })
    
        if (!res.ok) {
            const errorDetails = await res.json()
            console.dir(errorDetails) // هيطبع لك اسم الحقل اللي عامل المشكلة
            return
        }

        const data = await res.json()
        clearInputs()
        setForm("login") 
        return data
        } catch (err) {
            console.error("Network error:", err)
        }
    }

    const labelStyle = "block mb-1 font-semibold text-[16px] capitalize"
    const inputStyle = "p-3 text-[18px] border rounded-2xl border-blue-600 w-full mb-1 focus:bg-blue-900 outline-none text-black"

    return (
        <article className={`  ${theme === "light" ? "bg-gray-200 text-black" :"bg-gray-800 text-white"} w-11/12 border border-t-4 border-r-4 border-blue-600 md:w-200 p-4 rounded-2xl`}>
            <h3 className='text-4xl capitalize text-center font-bold mb-4 text-blue-600'> انشئ حساب </h3>
            
            <form onSubmit={handleAddUser} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                
                {/* Full Name */}
                <div>
                    <label htmlFor="userName" className={labelStyle}>  (15 حرف حد ادني)  الاسم بالكامل </label>
                    <input
                        id="userName"
                        className={inputStyle}
                        type="text"
                        placeholder='kero john ...'
                        value={user.FullName}
                        onChange={(e) => setUser({ ...user, FullName: e.target.value })}
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <label htmlFor="number" className={labelStyle}> رقم الهاتف </label>
                    <input
                        id="number"
                        className={inputStyle}
                        type="text"
                        placeholder='0105555...'
                        value={user.PhoneNumber}
                        onChange={(e) => setUser({ ...user, PhoneNumber: e.target.value })}
                    />
                </div>

                {/* Profile Image - ملف الفايل التلقائي */}
                <div>
                    <label htmlFor="image" className={labelStyle}>  الصوره الشخصيه </label>
                    <input
                        id="image"
                        className={inputStyle}
                        type="file"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            const file = event.target.files?.[0];
                            if (file) {
                                setImageFile(file); // حفظ كـ File Object
                            }
                        }}
                    />
                </div>

                {/* Academic Stage */}
                <div>
                    <label htmlFor="stage" className={labelStyle}>  المرحله العمريه </label>
                    <select
                        id="stage"
                        className={inputStyle}
                        value={user.AgeGroup}
                        onChange={(e) => setUser({ ...user, AgeGroup: e.target.value })}
                    >
                        <option value="" disabled> اختر المرحله </option>
                        <option value={0}>ابتدائي</option>
                        <option value={1}>اعدادي</option>
                        <option value={2}>ثانوي</option>
                        <option value={3}>جامعه </option>
                        <option value={4}>خريجين</option>
                    </select>
                </div>

                {/* Gender */}
                <div className="p-3 border rounded-2xl border-blue-600 w-full mb-2">
                    <label className={labelStyle}> الفئه </label>
                    <div className="flex items-center gap-10 mt-2">
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                id="male"
                                value="male"
                                checked={user.Gender === "male"}
                                onChange={(e) => setUser({ ...user, Gender: e.target.value })}
                            />
                            <label htmlFor="male" className="cursor-pointer capitalize">شباب</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                id="female"
                                value="female"
                                checked={user.Gender === "female"}
                                onChange={(e) => setUser({ ...user, Gender: e.target.value })}
                            />
                            <label htmlFor="female" className="cursor-pointer capitalize">شابات</label>
                        </div>
                    </div>
                </div>

                {/* EMAIL */}
                <div>
                    <label htmlFor="email" className={labelStyle}>الايميل</label>
                    <input
                        id="email"
                        className={inputStyle}
                        type="email"
                        placeholder='kero@mail...'
                        value={user.Email}
                        onChange={(e) => setUser({ ...user, Email: e.target.value })}
                    />
                </div>

                {/* Password */}
                <div>
                    <label htmlFor="password" className={labelStyle}>الباسوورد</label>
                    <div className="relative">
                        <input
                            id="password"
                            className={inputStyle}
                            type={type}
                            placeholder='Kero/123456'
                            value={user.Password}
                            onChange={(e) => setUser({ ...user, Password: e.target.value })}
                        />
                        <IconComponent 
                            onClick={handleType} 
                            className="absolute left-3 text-[18px] top-1/2 -translate-y-1/2 cursor-pointer text-blue-600" 
                        />
                    </div>
                </div>

                {/* Confirm Password */}
                <div>
                    <label htmlFor="confirmPassword" className={labelStyle}>تاكيد الباسوورد</label>
                    <div className="relative">
                        <input
                            id="confirmPassword"
                            className={inputStyle}
                            type={confirmType}
                            placeholder='Kero/123456'
                            value={user.ConfirmPassword}
                            onChange={(e) => setUser({ ...user, ConfirmPassword: e.target.value })}
                        />
                        <ConfirmIconComponent 
                            onClick={handleConfirmType} 
                            className="absolute left-3 text-[18px] top-1/2 -translate-y-1/2 cursor-pointer text-blue-600" 
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className='p-3 text-[20px] text-white font-bold col-span-1 md:col-span-2 rounded-2xl bg-blue-600 w-full mt-2 hover:bg-blue-900 transition-colors disabled:bg-gray-400'
                >
                    {loading ? "...يتم عمل حساب" : "انشئ حساب"}
                </button>

                {/* Navigation Link */}
                <div className="flex justify-between col-span-1 md:col-span-2 items-center mt-2">
                    <p className='capitalize'> يتواجد حساب بالفعل ؟ </p>
                    <a 
                        href="#" 
                        onClick={(e) => {
                            e.preventDefault();
                            setForm("login");
                        }} 
                        className='capitalize text-blue-600 hover:underline font-semibold'
                    >
                        سجل دخول
                    </a>
                </div>

            </form>
        </article>
    )
}