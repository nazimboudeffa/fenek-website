'use client'

import { useRouter } from "next/navigation"
import { FormEvent } from "react"

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
            <button className="btn btn-primary" onClick={handleClick}>Join Telegram</button>
            </div>
        </div>
        </div>
    )
}

export default Hero