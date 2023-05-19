'use client'

import { useRouter } from "next/navigation"
import { FormEvent } from "react"
import Image from 'next/image';
import telegramIcon from '@/public/telegram-svgrepo-com.svg'

function Hero () {

    const router = useRouter()


    const handleClick = (e: FormEvent) => {
        e.preventDefault()
        router.push('https://t.me/fenekcoin')
    }

    return(
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/stock/pawel-czerwinski-5aXdbAjd4bY-unsplash.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">$FENEK</h1>
            <p className="mb-5">The Algerian BEP-20 Token</p>
            <Image
            priority
            src={telegramIcon}
            alt="Join our Telegram"
            onClick={handleClick}
            className="mx-auto cursor-pointer"
            />
            </div>
        </div>
        </div>
    )
}

export default Hero