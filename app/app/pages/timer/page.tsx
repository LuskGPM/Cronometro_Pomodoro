'use client'

import { Timer } from "@/layout/Timer"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Page() {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        setMinutes(Number(localStorage.getItem("minutes")) || 0)
        setSeconds(Number(localStorage.getItem("seconds")) || 0)
    }, [])

    function resetTime() {
        setMinutes(0)
        setSeconds(0)
    }

    return (
        <>
            <Link href="/">
                <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
            <Timer minutes={minutes} seconds={seconds} />
        </>
    )
}