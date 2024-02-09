"use client"

import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { decrementItem, incrementItem } from "../redux/features/basket-slice"

export default function Page(){
    const dispatch = useDispatch()
    const basket = useSelector((state) => state.basketReducer.items)
    let finalCount = 0;
    basket.map((item) => {
        finalCount += item.count * item.price
    })
    return(
        <div class='h-[100svh] bg-white p-2 flex flex-col gap-2 font-NunitoSans relative'>
            <Link href={'/'} class='flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 relative top-0.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                <p>На главную</p>
            </Link>
            <div class=''>Твій кошик:</div>
            <hr></hr>
            <div class='flex flex-col gap-2'>{basket.length > 0 ? basket.map((item) => {
            return(
                <div class='flex justify-between' key={Math.random()}>
                    <div class='bg-sushi-pos-1 w-[100px] h-[100px] bg-center bg-cover'></div>
                    <div class='flex flex-col justify-between'>
                        <div class='text-2xl'>{item.name}</div>
                        <div class='flex gap-2 justify-end'>
                            <svg onClick={() => {dispatch(incrementItem(item.name))}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 bg-green-700 rounded-md">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <p class='text-xl relative bottom-0.5'>{item.count}</p>
                            <svg onClick={() => {dispatch(decrementItem(item.name))}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 bg-green-700 rounded-md">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                            </svg>

                        </div>
                        <div class='flex justify-end'>
                            <p class=''>{item.price} zl</p>
                        </div>
                    </div>
                </div>
            )
            }) : 'Basket is empty!'}</div>
            <hr class=''></hr>
            {
                finalCount >= 200 ? '' 
                :  <div class='text-orange-700'>Мінімальна сума для безкоштовної доставки: 200zl</div>
            }
            <div class='text-xl'>Загальна вартість: {finalCount} zl</div>
            {
                basket.length > 0 ?
                <Link href={'/basket/summary'} class='flex gap-2 absolute bottom-5 right-2'>
                    <p class='text-xl'>Скласти замовлення</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 relative top-[0.75px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </Link> : ''
            }
        </div>
    
    )
}