import React from 'react';
import ProfileInputs from "../../components/profileViewComponents/ProfileInputs";
import ProfileData from '@/app/components/profileViewComponents/ProfileData';

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const getUser = async () => {
        if (!id) return null;
        try {
            const response = await fetch(`https://mahinproject.runasp.net/api/User/get-user/${id}`, {
                cache: 'no-store'
            });

            if (!response.ok) {
                console.error(`HTTP Error: ${response.status}`);
                return null;
            }

            return await response.json();
        } catch (err) {
            // معالجة خطأ الـ Network / CORS دون إسقاط التطبيق
            console.error("Failed to fetch user (Network/CORS error):", err);
            return null;
        }
    };

    const currentProfile = await getUser();

    // في حالة فشل الاتصال بالسيرفر تماماً
    if (!currentProfile) {
        return (
            <main className='pt-25 w-full min-h-screen flex flex-col items-center justify-center gap-4 text-white'>
                <h4 className='text-2xl text-red-500 font-bold'>عذراً، تعذر جلب بيانات المستخدم</h4>
                <p className='text-gray-400 text-sm'>يرجى التأكد من الاتصال بالشبكة أو صحة رابط السيرفر (API CORS).</p>
            </main>
        );
    }

    return (
        <main className='pt-25 w-full min-h-screen bg-fixed py-5 px-5 md:px-20'>
            <ProfileInputs member={currentProfile} />
            <ProfileData />
        </main>
    );
}