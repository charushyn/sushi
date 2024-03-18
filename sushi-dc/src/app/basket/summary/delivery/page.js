"use client"

import React from "react"
import Link from "next/link"
import Input from "@/app/UI/Input"
import Radio from "@/app/UI/Radio"
import TimePicker from "@/app/UI/TimePicker"

export default function Page(){

    const [valuesTwo, setValuesTwo] = React.useState({
        name: '',
        adress: '',
        phoneNumber: '',
        email: '',
        textArea: '',
        time: '',
    })

    const [valuesOne, setValuesOne] = React.useState({
        name: '',
        phoneNumber: '',
        textArea: '',
        time: '',
    })

    const [radio, setRadio] = React.useState(0)


    const inputsTwo = [
        {
            id: 1,
            name: 'name',
            placeholder: 'Імя отримувача',
            type: 'text',
            label: 'Імя отримувача',
            errorMessage: '3-20 Chars w/0 specials chars and numbers!',
            pattern: '^[A-Za-z]{3,20}$',
            required: true,
        },
        {
            id: 2,
            name: 'adress',
            placeholder: 'Adress',
            type: 'text',
            label: 'Adress',
            errorMessage: '3-16 Chars with 1 Number!',
            pattern: "^[A-Za-z]{3,20}",
        },
        {
            id: 3,
            name: 'email',
            placeholder: 'Email',
            type: 'email',
            label: 'Email',
            errorMessage: 'Its not an email!',
            required: true,
        },
        {
            id: 4,
            name: 'phoneNumber',
            placeholder: 'Phone number',
            type: 'tel',
            label: 'Phone',
            errorMessage: 'Its not a Full Number!',
            pattern: '^[0-9]{3}-[0-9]{3}-[0-9]{3}',
            required: true,
        },
        {
            id: 5,
            name: 'textArea',
            placeholder: 'comment to order',
            type: 'text',
            label: 'Comment to Order',
        },
    ]

    const inputsOne = [
        {
            id: 1,
            name: 'name',
            placeholder: 'Імя отримувача',
            type: 'text',
            label: 'Імя отримувача',
            errorMessage: '3-20 Chars w/o specials chars and numbers!',
            pattern: '^[A-Za-z]{3,20}$',
            required: true,
        },
        {
            id: 4,
            name: 'phoneNumber',
            placeholder: 'phone number',
            type: 'tel',
            label: 'Phone',
            errorMessage: 'Its not a Full Number!',
            pattern: '^[0-9]{3}-[0-9]{3}-[0-9]{3}',
            required: true,
        },
        {
            id: 5,
            name: 'textArea',
            placeholder: 'Comment to order',
            type: 'text',
            label: 'Comment to Order',
        },

    ]
    

    const handleForm = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
    }



    const onChange = (e) => {
        radio == 1 ?
        setValuesOne({...valuesOne, [e.target.name]: e.target.value}) :
        setValuesTwo({...valuesTwo, [e.target.name]: e.target.value})
    }

    
    return(
        <form onChange={onChange} class='font-NunitoSans p-2'>
            <div class='flex flex-col'>
                <p class='text-2xl text-center my-4'>Як бажаєте отримати замовлення?</p>
                <div class='flex flex-col gap-2'>
                    <div class='flex flex-row gap-2'>
                        {
                            radio == 1 ? 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6 mt-[2px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            : <div class='w-5 h-5 rounded-full border-[1px] border-black mt-[2px]' onClick={() => setRadio(1)}></div>
                        }
                        <label class={radio !== 1 ? 'text-xl text-gray-400' : 'text-xl text-black'}>На місці</label>
                    </div>
                    <p class={radio == 1 ? 'text-green-700' : ' text-gray-400'}>Місце отримання: Wileńska 21a, 20-603 Lublin</p>
                </div>
                <div class='flex gap-2'>
                        {
                            radio == 2 ? 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6 mt-[2px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            : <div class='w-5 h-5 rounded-full border-[1px] border-black mt-[2px]' onClick={() => setRadio(2)}></div>
                        }
                        <label class={radio === 1 ? 'text-xl text-gray-400' : 'text-xl text-black'}>Доставка</label>
                </div>
                {
                    radio !== 0 ?
                    <p class='text-2xl text-center my-4'>Заповніть дані:</p> : ''
                }
                {
                    radio == 1 ? inputsOne.map((input) => {
                        return(
                            <Input 
                            key={input.id} 
                            placeholder={input.placeholder} 
                            name={input.name} type={input.type} 
                            label={input.label} value={valuesOne[input.name]} 
                            onChange={onChange} 
                            errorMessage={input.errorMessage}
                            required={input.required}
                            pattern={input.pattern}
                            >
                            </Input>
                        )
                    }) : ''
                }
                                {
                    radio == 2 ? inputsTwo.map((input) => {
                        return(
                            <Input 
                            key={input.id} 
                            placeholder={input.placeholder} 
                            name={input.name} type={input.type} 
                            label={input.label} value={valuesTwo[input.name]} 
                            onChange={onChange} 
                            errorMessage={input.errorMessage}
                            required={input.required}
                            pattern={input.pattern}
                            >
                            </Input>
                        )
                    }) : ''
                }
                {
                    radio !== 0 ?
                    <TimePicker name='time' from={10} to={21}></TimePicker> : ''
                }
            </div>
            {
                radio !== 0 ?
                <button type="submit" class='w-full h-[40px] border-[1px] bg-white rounded-md border-black hover:text-white hover:bg-green-700 transition duration-300 my-[40px]'>Перейти до оплати</button> : ''
            }
        </form>

    )
}