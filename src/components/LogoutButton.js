'use client'

import {signOut} from "next-auth/react";

export default function LogoutButton() {
    return (
        <button className={'bg-[#53c28b] p-1 text-white cursor-pointer rounded'} onClick={signOut}>
            Logout
        </button>
    )
}