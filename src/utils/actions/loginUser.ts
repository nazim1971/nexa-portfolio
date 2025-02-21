"use server"

import { TLogin } from "@/app/login/page";

export const loginUser = async(data: TLogin) =>{
    const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: 'no-store'
    });
    const userInfo = await res.json();
    return userInfo;
}