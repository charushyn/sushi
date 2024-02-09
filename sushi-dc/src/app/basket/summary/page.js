"use client"

import { useDispatch } from "react-redux"
import { addItem } from "@/app/redux/features/basket-slice"
import Link from "next/link"
import AlertWrapper from "@/app/UI/AlertWrapper"

export default function Page(){

    const dispatch = useDispatch()

    return(
        <div class='h-fit font-NunitoSans gap-2 flex flex-col pt-4 bg-white'>
            <AlertWrapper></AlertWrapper>
            <div class='text-4xl flex justify-center'>
                <p>Додатки?</p>
            </div>
            <div class='flex flex-col mx-auto bg-white border-[1px] border-gray-400 w-[250px]'>
                        <img class='w-full h-[250px]' src="https://niemirka.com/1043-large_default/zywiec-niegazowany-05l-x-12-sztuk.jpg"></img>
                        <div class='p-2 flex flex-col gap-4'>
                            <div class='text-2xl'>ŻYWIEC NIEGAZOWANY 0.5L</div>
                            <div class='flex justify-between relative'>
                                <div class='text-2xl pt-[36px]'>5 zl</div>
                                <button onClick={() => dispatch(addItem({
                                    name: 'ŻYWIEC NIEGAZOWANY 0.5L', 
                                    count: 1, 
                                    price: 5,
                                    urlPhoto: 'https://niemirka.com/1043-large_default/zywiec-niegazowany-05l-x-12-sztuk.jpg'
                                    }))} name="ŻYWIEC NIEGAZOWANY 0.5L" price='5' class=' bg-green-700 text-white py-2 px-2 w-[100px]'>Добавить в корзину</button>
                            </div>
                        </div>
            </div>
            <div class='flex flex-col mx-auto bg-white border-[1px] border-gray-400 w-[250px]'>
                        <img class='w-full h-[250px]' src="https://images.prom.ua/3381355242_w640_h640_imbir-belyj-dlya.jpg"></img>
                        <div class='p-2 flex flex-col gap-4'>
                            <div class='text-2xl'>Имбирь белый 50г</div>
                            <div class='flex justify-between relative'>
                                <div class='text-2xl pt-[36px]'>5 zl</div>
                                <button onClick={() => dispatch(addItem({
                                    name: 'Имбирь белый', 
                                    count: 1, 
                                    price: 5,
                                    urlPhoto: 'https://images.prom.ua/3381355242_w640_h640_imbir-belyj-dlya.jpg',
                                    }))} name="ŻYWIEC NIEGAZOWANY 0.5L" price='5' class=' bg-green-700 text-white py-2 px-2 w-[100px]'>Добавить в корзину</button>
                            </div>
                        </div>
            </div>
            <div>
                <Link href={'/basket/summary/delivery'} class='flex gap-2 justify-end mt-10 mb-4 mr-4'>
                    <p class='text-xl'>Скласти замовлення</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 relative top-[0.75px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}