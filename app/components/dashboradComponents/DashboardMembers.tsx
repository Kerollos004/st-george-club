"use client"
import Link from 'next/link'
import {   useState } from 'react'
import { MemberType } from '../../assets/assets'
import DasboardMember from './DasboardMember'
import { useFormContext, useThemeContext } from '../../assets/contexts'
import { Search } from 'react-bootstrap-icons'

export default function DashboardMembers({users} : {users:MemberType[]}) {
    const { setForm } = useFormContext()
    const [searchValue, setSearchValue] = useState<string>("")
    const { theme } = useThemeContext()



    
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    
    const usersMap = users.map((user) => {
        return (
            <DasboardMember key={user.id} member={user}  />
        )
    })
    const filteredUsers = users.filter(user => user.fullName.toLowerCase().includes(searchValue.toLowerCase()))
    const filteredUsersMap = filteredUsers.map((user) => {
        return (
            <DasboardMember key={user.id} member={user}  />
        )
    })

    return (
        <article className={`p-3   rounded-2xl mb-2.5 ${theme === "light" ? "text-black bg-gray-200" : "bg-gray-800 text-white"} border-r-4 border-b-4 border-blue-600`}>
            <div className="flex justify-between items-start md:items-center flex-col md:flex-row">
                <h3 className='mb-2.5 text-2xl capitalize text-blue-600'>all members</h3>
                <div className="relative mb-5 w-full md:w-1/2">
                    <input 
                        type="text"
                        placeholder='search member'
                        value={searchValue} 
                        onChange={handleChange}
                        className='focus:bg-blue-400 w-full p-3 border border-blue-600 rounded-2xl' 
                    />
                    <Search  className={`absolute top-1/2 left-2.5 -translate-y-1/2 `} />
                </div>
            </div>
            

            <div>
                {users.length === 0 ?
                    <h3 className='text-center text-3xl text-blue'> جاري التحميل </h3>
                    : 
                    searchValue !==""? filteredUsersMap : usersMap
                }
            </div>


            <Link 
                onClick={() => { setForm("signup") }} 
                className='text-center mt-2.5 p-2 capitalize bg-blue-600 inline-block w-full rounded-2xl hover:bg-blue-800 text-white' 
                href={"/register"}
            >
                add member
            </Link>
        </article>
    )
}