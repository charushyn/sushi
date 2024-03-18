'use client'

import { Link } from "react-scroll"

export default function RunningButton(){
    return(
        <Link href="#" class="button" to="FifthBlock" duration={500} smooth={true}>
            <div class="button_inner">
                <span data-text="заказать">заказать</span>
            </div>
        </Link>
    )
}