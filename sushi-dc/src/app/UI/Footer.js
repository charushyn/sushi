'use client'

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"

export default function Footer(){

    const position = [51.24272692022786, 22.519158024052366]

    const customIcon = new Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/128/3367/3367586.png',
        iconSize: [25,25]
    })

    return(
        <footer class='bg-black text-white h-fit font-NunitoSans p-4 flex gap-2 flex-col'>
                <div class='w-full h-fit relative'>
                    <MapContainer center={position} zoom={14.5} scrollWheelZoom={true}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position} icon={customIcon}>
                        <Popup>
                            Cloud Sushi <br />
                        </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <p class='text-xl'>Cloud Sushi Lublin</p>
                <p class=''>Adress: Wileńska 21a, 20-603 Lublin</p>
                <div class='flex flex-row gap-3 flex-wrap mt-4'>
                    <p class='text-xl'>Our Social Media:</p>
                    <div class='h-fit w-fit'>
                        <a href="https://www.instagram.com/cloudhookah.lublin/" class=' w-6 h-6 cursor-pointer'>
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.svg" class='h-6 w-6'></img>
                        </a>
                    </div>
                </div>
                <div class='flex flex-col gap-2'>
                    <p class='text-xl'>Графік:</p>
                    <p>Pon.:   00:00-00:00</p>
                    <p>Śr.:    00:00-00:00</p>
                    <p>Czw.:   00:00-00:00</p>
                    <p>Pt.:    00:00-00:00</p>
                    <p>Sob.:   00:00-00:00</p>
                    <p>Niedz.: 00:00-00:00</p>
                </div>
                <a class="underline my-4 cursor-pointer" href="">Політика конфіденційності сайту</a>
        </footer>
    )
}