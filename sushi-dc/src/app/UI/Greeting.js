

import RuuningButton from "./RunningButton"

export default function Greeting(){
    return(
        <div class='flex flex-col px-5 gap-y-8 h-[100svh]'>
            <div class='mobile-s:font-Asia text-red-700 text-7xl'>CLOUD SUSHI</div>
            <div class='flex justify-end'>
                <div class='mobile-s:w-[130px]'>
                    Комплексное продвижение бизнеса, как твоя волшебная digital-таблетка
                </div>
            </div>
            <RuuningButton></RuuningButton>
        </div>
    )
}