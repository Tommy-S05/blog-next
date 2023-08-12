'use client'
import {ThemeContext} from "@/context/ThemeContext";
import {useContext} from "react";

export default function DarkModeToggle() {
    const {toggleTheme, theme} = useContext(ThemeContext);
    return (
        <li onClick={toggleTheme}
            className={'relative flex justify-between items-center p-[2px] h-6 border-[1.5px] border-solid border-[#53c28b70] rounded-[30px] cursor-pointer'}>
            <div className={'text-[12px]'}>🌙</div>
            <div className={'text-[12px]'}>🔆</div>
            <div
                className={'absolute w-[15px] h-[15px] bg-[#53c28b] rounded-full'}
                style={theme === 'light' ? {left: '2px'} : {right: '2px'}}
            />
        </li>
    )
}