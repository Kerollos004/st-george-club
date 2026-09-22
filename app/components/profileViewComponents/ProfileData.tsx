"use client"
import Image from 'next/image'
import { PenFill, Trash3Fill } from 'react-bootstrap-icons'
import { useEditContext, useThemeContext , useUpdatedUserContext } from '@/app/assets/contexts'
import img from "../../../public/images/images.png"
export default function ProfileData() {
    const { theme } = useThemeContext()
    const { UpdatedUser } = useUpdatedUserContext()
    const { setIsEdit } = useEditContext()
    return (
        <article className={`  ${theme==="light"?"bg-gray-200 text-black":"bg-gray-800 text-white"} p-5 border  mt-5  border-blue-500 rounded-3xl grid grid-cols-1 items-center md:grid-cols-[40%_60%]  `} >
            <div className="flex  mb-5  flex-col items-center justify-center gap-2.5">
                <Image
                    src={UpdatedUser.photoUrl? UpdatedUser.photoUrl : img}
                    alt='img'
                    width={300}
                    height={300}
                    className={`  border-4 ${UpdatedUser?.isActive ? "border-green-600" : "border-red-600" } w-75 h-75 rounded-full `}
                />
                <h3 className={`rounded-3xl border-2  ${theme==="light"?"bg-gray-400":"bg-gray-600"}  ${UpdatedUser?.isActive ? "border-green-600" : "border-red-600"} px-3 py-2  `}>
                    {UpdatedUser?.isActive ? "نشط" :"غير نشط"}
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 items-center " >
                <div className="card   p-3 rounded-3xl border border-blue-600  flex flex-col ">
                    <span>الاسم</span>
                    <h3>{ UpdatedUser.fullName}</h3>
                </div>
                <div className="card   p-3 rounded-3xl border border-blue-600  flex flex-col ">
                    <span>التليفون</span>
                    <h3>{ UpdatedUser.phoneNumber}</h3>
                </div>
                <div className="card   p-3 rounded-3xl border border-blue-600  flex flex-col ">
                    <span>المرحله العمريه</span>
                    <h3>{ UpdatedUser.ageGroup}</h3>
                </div>
                <div className="card   p-3 rounded-3xl border border-blue-600  flex flex-col ">
                    <span>nfc</span>
                    <h3>{ UpdatedUser.nfcUrl}</h3>
                </div>
                <div className="card   p-3 rounded-3xl border border-blue-600  flex flex-col ">
                    <span>الباقه المتاحه</span>
                    <h3>{ UpdatedUser.activeSubscription? UpdatedUser.activeSubscription?.planName.replace("_", " ") :"غير مشترك في باقه"}</h3>
                </div>
                <div className="card   p-3 rounded-3xl border border-blue-600  flex flex-col ">
                    <span>سعر الباقة</span>
                    <h3>{ UpdatedUser.activeSubscription? UpdatedUser.activeSubscription.price : "غير معروف"}</h3>
                </div>
                <div className="card   p-3 rounded-3xl border border-blue-600  flex flex-col ">
                    <span>بدايه  الاشتراك</span>
                    <h3>{ UpdatedUser.activeSubscription? UpdatedUser.activeSubscription?.startDate :"غير   معروف"}</h3>
                </div>
                <div className="card   p-3 rounded-3xl border border-blue-600  flex flex-col ">
                    <span>نهايه الاشتراك</span>
                    <h3>{ UpdatedUser.activeSubscription? UpdatedUser.activeSubscription?.endDate :"غير   معروف"}</h3>
                </div>
                <div className={`    ${UpdatedUser.role==="User"?"hidden":"grid"} col-span-1 md:col-span-2  grid-cols-1 md:grid-cols-2 gap-2.5 `}>
                    <button className='flex gap-2 justify-center items-center p-3 rounded-3xl bg-blue-600 hover:bg-red-800' > <Trash3Fill/> delete user</button>
                    <button   onClick={()=>{setIsEdit(true)}} className='flex gap-2 justify-center items-center p-3 rounded-3xl bg-blue-600 hover:bg-blue-800' > <PenFill/> edit user</button>
                </div>
            </div>

        </article>
    )
}
