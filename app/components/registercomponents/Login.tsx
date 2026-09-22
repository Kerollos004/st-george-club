"use client"
import { useState } from "react"
import { Icon, LockFill , UnlockFill } from "react-bootstrap-icons"
import { LoginUser } from "../../assets/assets"
import { useFormContext, useThemeContext,  } from "../../assets/contexts"
import { useRouter } from 'next/navigation'
import { handleAuth } from "../../assets/Apis"
export default function Login() {
    const {theme} = useThemeContext()
    const [type , setType] = useState<string>("password")
    const [Icon , setIcon] = useState<Icon>(LockFill)
    const [user , setUser] = useState<LoginUser>({   PhoneNumber:"" , Password:""})
    const {setForm} = useFormContext()
    const router = useRouter()
    const handleType = ()=>{
        if(type === "text"){
            setType("password") 
            setIcon(LockFill)
        }
        else{
            setType("text") 
            setIcon(UnlockFill)
        }
    }
    return (
        <article className={`  ${theme === "light" ? "bg-gray-200 text-black" :"bg-gray-800 text-white"}  w-11/12 border bg-gray-200 border-t-4 border-r-4 border-blue-600 md:w-200 p-3 rounded-2xl`}>
            <h3 className='text-4xl  capitalize text-center  font-bold mb-3  text-blue-600'>تسجيل دخول</h3>
            <form action="">
                <input 
                className='p-3 text-[18px] border rounded-2xl border-blue-600 w-full mb-2 focus:bg-blue-900' 
                type="text" 
                placeholder='...رقم الهاتف'
                value={user.PhoneNumber}
                onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{
                    setUser({...user , PhoneNumber:event.target.value})
                }}
                />
                <div className="relative">
                    <input 
                    className='p-3 text-[18px] border rounded-2xl border-blue-600 w-full mb-2 focus:bg-blue-900'
                    type={type} 
                    placeholder='...الباسورد'
                    value={user.Password}
                    onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{
                    setUser({...user , Password:event.target.value})
                }}
                    />
                    
                    <Icon onClick={handleType} className=" absolute left-3 text-[18px] top-1/2 -translate-y-1/2"/>
                </div>
                <button onClick={async (e: React.MouseEvent) => {
                    e.preventDefault()
                    await handleAuth(user)
                    router.push("/")
                }} className='p-3 text-[20px]  rounded-2xl bg-blue-600 w-full mb-2 hover:bg-blue-900'> سجل دخول</button>
                <div className="flex justify-between items-center">
                    <p className='capitalize'> لا يوجد حساب </p>
                    <a href="#" onClick={()=>{
                        setForm("signup")
                    }} className=' capitalize hover:underline'>انشئ حساب</a>
                </div>
            </form>
        </article>
)
}
