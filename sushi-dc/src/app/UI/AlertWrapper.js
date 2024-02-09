"use client"

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function AlertWrapper(){
    const [isShow, setIsShow] = useState(false)

    const basket = useSelector((state) => state.basketReducer.items)
    console.log(basket)

    useEffect(() => {
        basket.length === 0 ? '' : setIsShow(true)
        setTimeout(() => {
            setIsShow(false)
        }, 5000)
    }, [basket])

    return(
        <div className={isShow ? 'alert-box' : 'hidden'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p class='font-NunitoSans text-green-700'>Успішно</p>
        </div>
    )
}