'use client'

import { useState } from "react"
import { addItem } from "../redux/features/basket-slice"
import { UseDispatch, useDispatch } from "react-redux"
import { useSelector } from "react-redux"

export default function FifthBlock(){
    const dispatch = useDispatch()

    const basket = useSelector((state) => state.basketReducer.items)

    return(
        <div class='h-fit py-2 px-2 font-NunitoSans flex flex-col gap-y-4'>
                    <div class='flex flex-col mx-auto bg-white border-[1px] border-gray-400 w-[250px]'>
                        <img src="https://static.vecteezy.com/system/resources/previews/025/064/113/non_2x/sushi-with-ai-generated-free-png.png" class={`h-[250px] bg-center bg-cover`}></img>
                        <div class='p-2 flex flex-col gap-4'>
                            <div class='text-3xl'>California 1</div>
                            <p class=' text-gray-500'>Łosoś, Nori, Ogórek, Ryż, Serek kremowy</p>
                            <div class='flex justify-between relative'>
                                <div class='text-2xl pt-[36px]'>50zl</div>
                                <button onClick={() => dispatch(addItem({
                                    name: 'California 1', 
                                    count: 1, 
                                    price: 50,
                                    urlPhoto: 'https://static.vecteezy.com/system/resources/previews/025/064/113/non_2x/sushi-with-ai-generated-free-png.png'
                                    }))} name="California 1" price='50' class=' bg-green-700 text-white py-2 px-2 w-[100px]'>Добавить в корзину</button>
                            </div>
                        </div>
                    </div>
                    <div class='flex flex-col mx-auto bg-white border-[1px] border-gray-400 w-[250px]'>
                        <img src="https://img.freepik.com/free-photo/maki-sushi-isolated-white_2829-5653.jpg?size=626&ext=jpg" class={`h-[250px] bg-center bg-cover`}></img>
                        <div class='p-2 flex flex-col gap-4'>
                            <div class='text-3xl'>California 2</div>
                            <p class=' text-gray-500'>Łosoś, Nori, Ogórek, Ryż, Serek kremowy</p>
                            <div class='flex justify-between relative'>
                                <div class='text-2xl pt-[36px]'>50zl</div>
                                <button onClick={() => dispatch(addItem({
                                    name: 'California 2', 
                                    count: 1, 
                                    price: 100,
                                    urlPhoto: 'https://img.freepik.com/free-photo/maki-sushi-isolated-white_2829-5653.jpg?size=626&ext=jpg'
                                    }))} name="California 2" price='100' class=' bg-green-700 text-white py-2 px-2 w-[100px]'>Добавить в корзину</button>
                            </div>
                        </div>
                    </div>
        </div>
    )
        
}