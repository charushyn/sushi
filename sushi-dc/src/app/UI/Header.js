'use client'

import Link from "next/link"
import { useSelector } from "react-redux"

export default function Header(){
    const basket = useSelector((state) => state.basketReducer.items)
    let finalCount = 0;
    basket.map((item) => {
        finalCount += item.count
    })

    return(
        <header class='mobile-s:p-2 mobile-s:flex border-b-[0.5px] border-b-black mobile-s:justify-end bg-white w-[100svw] h-[60px] sticky top-0 z-20'>
            <Link class='bg-basket bg-cover mobile-s:w-8 mobile-s:h-8 mobile-s:mt-2 relative' href={'/basket'}>
            </Link>
            {basket.length !== 0 ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Red_Circle%28small%29.svg/2048px-Red_Circle%28small%29.svg.png" class='w-5 h-5 top-3 right-1 absolute'></img> : ''}
            {basket.length !== 0 ? <div class='absolute top-3 right-[10px] text-white text-sm'>{finalCount}</div> : ''}
        </header>
    )
}