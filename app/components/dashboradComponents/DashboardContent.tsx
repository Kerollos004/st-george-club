"use client"
import { PeopleFill , CashCoin , CardChecklist } from 'react-bootstrap-icons'
import {   useThemeContext,  } from '../../assets/contexts'
import { MemberType, subType } from '../../assets/assets'

export default function DashboardContent({users , plans}:{users:MemberType[] , plans:subType[]}) {
    const { theme } = useThemeContext()
    // const moneyMonth = paidUsers.reduce((acc, cur) => {
    //     return acc + Number(cur?.activeSubscription?.price)
    // }, 0)
return (
    <article className='grid grid-cols-1 mb-5 md:grid-cols-4 gap-2.5'>
        <article className={`   ${theme==="light"?"bg-gray-200 text-black" :"bg-gray-800 text-white"} p-3 rounded-2xl border-r-4 border-b-4  border-blue-600 `}>
            <div className="flex text-2xl mb-2.5 items-center justify-between">
                <h3 > عدد الاعضاء </h3>
                <PeopleFill />
            </div>
            <p className="text-2xl text-blue-600"> {users.length} </p>
        </article>
        <article className={`   ${theme==="light"?"bg-gray-200 text-black" :"bg-gray-800 text-white"} p-3 rounded-2xl border-r-4 border-b-4  border-blue-600 `}>
            <div className="flex items-center text-2xl mb-2.5 justify-between">
                <h3> عدد الباقات </h3>
                <CardChecklist />
            </div>
            <p className="text-2xl text-blue-600">{plans.length}</p>
        </article>
        <article className={`   ${theme==="light"?"bg-gray-200 text-black" :"bg-gray-800 text-white"} p-3 rounded-2xl border-r-4 border-b-4  border-blue-600 `}>
            <div className="flex text-2xl mb-2.5 items-center justify-between">
                <h3 >الماليه الشهريه</h3>
                <CashCoin/>
            </div>
            <p className="text-2xl text-blue-600">   EGP</p>
        </article>
        <article className={`   ${theme==="light"?"bg-gray-200 text-black" :"bg-gray-800 text-white"} p-3 rounded-2xl border-r-4 border-b-4  border-blue-600 `}>
            <div className="flex items-center text-2xl mb-2.5 justify-between">
                <h3> الماليه السنويه</h3>
                <CashCoin/>
            </div>
            <p className="text-2xl text-blue-600"> 00 EGP</p>
        </article>
    </article>
)
}
