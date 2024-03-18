'use client'

import { Link } from 'react-scroll'

export default function FourthBlock(){
    return(
        <div class='h-[100svh] relative' id='FourthBlock'>
            <div>
                
            </div>
            <div class='absolute top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,.8)] px-4 pt-4'>
                <div class='w-full h-[12rem] bg-white'>
                    <div class='bg-sushi-pos-1 w-full h-full bg-center bg-cover bg-no-repeat'></div>
                </div>
                <div class='text-white'>
                    <div class='flex flex-col gap-y-4 mt-4'>
                        <div class='font-Asia text-4xl'>California sushi set</div>
                        <div class=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard</div>
                    </div>
                    <Link class='h-fit w-fit p-4 border-[1px] absolute bottom-4 z-20' to={'FifthBlock'} smooth={true} duration={500}>Смотреть</Link>
                </div>
            </div>
            <video src={(require('../images/sushi-bg.mp4'))} autoPlay loop muted className='video-sushi-bg'></video>
        </div>
    )
}