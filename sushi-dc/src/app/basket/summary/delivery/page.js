"use client"

import { useState } from "react"
import Link from "next/link"

export default function Page(){
    const [isFormActive, setIsFormeActive] = useState(false)

    const listOfAvalibleHours = []

    const range = (start, stop, step = 1) => {
        Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
    }

    const [radioOne, setRadioOne] = useState(false)
    const [radioTwo, setRadioTwo] = useState(false)

    const [name, setName] = useState('')
    const [adress, setAdress] = useState('')
    const [floor, setFloor] = useState()
    const [apartament, setApartament] = useState()

    var time = new Date().getTime(); // get your number
    var date = new Date(time); // create Date object

    const currentHour = date.toString().slice(15,18)
    const currentMinutes = date.toString().slice(19,21)

    
    
    return(
        <div class='p-4 font-NunitoSans'>
            <div class='text-2xl'>Оберіть:</div>
            <div>
                <div class='flex gap-2' onClick={() => {
                    setRadioOne(!radioOne)
                    setRadioTwo(false)
                }}>
                    {
                        radioOne ? <img src='https://www.svgrepo.com/show/500507/circle-check-filled.svg' class='w-4 h-4 mt-1'></img> :
                        <img src="https://www.svgrepo.com/show/532681/circle.svg" class='w-4 h-4 mt-1'></img>
                    }
                    <p>Отримати на місці</p>
                </div>
                {!radioTwo ? <div class={radioOne ? ' text-green-700' : 'text-gray-400'}>Адреса отримання: Wileńska 21a, 20-603 Lublin</div> : ''}
                <div class='flex gap-2' onClick={() => {
                    setRadioTwo(!radioTwo)
                    setRadioOne(false)
                }}>
                    {
                        radioTwo ? <img src='https://www.svgrepo.com/show/500507/circle-check-filled.svg' class='w-4 h-4 mt-1'></img> :
                        <img src="https://www.svgrepo.com/show/532681/circle.svg" class='w-4 h-4 mt-1'></img>
                    }
                    <p>Доставка за адресом</p>
                </div>
            </div>
                <form class='flex flex-col gap-2'>
                    {
                        radioOne || radioTwo ? 
                        <>
                            <div>Заповніть інформацію:</div>
                            <input value={name} onChange={(e) => {setName(e.target.value)}} class=' border border-gray-500 rounded-lg p-2' placeholder="Name"></input>
                        </>
                         : ''
                    }
                    {
                        radioTwo ? 
                            <>                    
                                <input value={adress} onChange={(e) => {setAdress(e.target.value)}} class=' border border-gray-500 rounded-lg p-2' placeholder="Adress"></input>
                                <input value={floor} onChange={(e) => {setFloor(e.target.value)}} class=' border border-gray-500 rounded-lg p-2' placeholder="Floor"></input>
                                <input value={apartament} onChange={(e) => {setApartament(e.target.value)}} class=' border border-gray-500 rounded-lg p-2' placeholder="Apartament N"></input>
                            </> 
                        : ''}
                    {radioOne || radioTwo ? 
                                    <div>
                                        <p>О котрій бажаєте отримати замовлення?</p>
                                        <input type='time' min={date} class='border border-black rounded-lg p-2'></input>
                                    </div> : ''
                    }
                </form>
                {
                    radioOne && name ?
                            <Link href={'/basket/summary/delivery/payment'} class='flex gap-2 absolute bottom-5 right-2'>
                                <p class='text-xl'>Перейти до оплати</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 relative top-[0.75px]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </Link> : ''
                }
                {name && adress && apartament ?
                            <Link href={'/basket/summary/delivery/payment'} class='flex gap-2 absolute bottom-5 right-2'>
                                <p class='text-xl'>Перейти до оплати</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 relative top-[0.75px]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </Link> : ''}
        </div>
    )
}