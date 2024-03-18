import React from "react"

export default function TimePicker(props){
    const {from, to} = props

    const minutes = ['00', '15', '30', '45']
    const hours = []
    const avalibleTime = []
    const date = new Date().toLocaleTimeString('pl-PL')
    let currentHour = date.slice(0,2)
    console.log(+currentHour)

    const variants = {
        open: 0,
        willOpenInNextDay: 0,
        willOpenInCurrentDay: 0,
    }

    function IsShopOpen(currentHour, workingHours){
        if(currentHour < workingHours.from){
            variants.willOpenInCurrentDay = 1;
            for(let i = workingHours.from; i < workingHours.to+1; i++){
                hours.push(i)
            }
            hours.map((hour) => {
                minutes.map((minute) => {
                    avalibleTime.push(`${hour}:${minute}`)
                })
            })
        } else if(currentHour > workingHours.from && currentHour < workingHours.to){
            variants.open = 1
        } else {
            variants.willOpenInNextDay = 1
        }
    }

    for(let i = from; i < to+1; i++){
        hours.push(`${i}`)
    }
    IsShopOpen(9, {from: 10, to: 20})
    console.log(avalibleTime)

    return(
        <div>1</div>
    )
}