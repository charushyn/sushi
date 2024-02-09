"use client"

import { useSelector } from "react-redux"

export default function Page(){

    const basket = useSelector((state) => state.basketReducer.items)
    let finalCount = 0;
    basket.map((item) => {
        finalCount += item.count * item.price
    })

    return(
        <div class='h-fit flex flex-col p-2 font-NunitoSans'>
            <div class='flex flex-col items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-40 h-40 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                </svg>
                <p class='text-xl text-center'>Ваше замовлення прийняте та готується!</p>
            </div>
            <div class='flex flex-col gap-2'>
                <p class='text-2xl mt-10'>Замовлення:</p>
                {
                    basket.map((item) => {
                        return(
                            <div class='flex justify-between bg-white border-y-2' key={Math.random()}>
                                <img src={item.urlPhoto} class='w-[100px] h-[100px] bg-center bg-cover'></img>
                                <div class='flex flex-col justify-between py-2'>
                                    <div class='text-2xl text-right'>{item.name}</div>
                                    <div class='text-right'>{item.count}x</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}