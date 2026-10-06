'use client'

import { Timer } from "@/layout/Timer"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Form } from "./layout/form"
import { HandlerSubmit } from "./layout/HandlerSubmit"
import { Cycles } from "./layout/cycles"

export default function Page() {
    const [ciclos, setCiclos] = useState<number>(0)
    const [minutes, setMinutes] = useState<number>(0)
    const [seconds, setSeconds] = useState<number>(0)

    useEffect(() => {
        if (ciclos != 0) {
            setMinutes(Number(localStorage.getItem("minutes")) || 0)
            setSeconds(Number(localStorage.getItem("seconds")) || 0)
        }
    }, [])

    const [nomeTask, setNomeTask] = useState<string>('')
    const [rodando, setRodando] = useState<boolean>(false)

    useEffect(() => {
        if (!rodando) return

        let interval = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
                setRodando(false)
                return
            }
            if (minutes === 0 && seconds === 1) setCiclos((c) => c + 1)

            setMinutes(seconds === 0 ? minutes - 1 : minutes)
            setSeconds(seconds === 0 ? 59 : seconds - 1)

            localStorage.setItem("minutes", String(minutes))
            localStorage.setItem("seconds", String(seconds))

        }, 1000)

        return () => clearInterval(interval)
    }, [rodando, minutes, seconds])

    function stopTimer(parar: boolean) {
        if (parar) {
            setRodando(false)
            setSeconds(0)
            setMinutes(0)
        } else {
            setCiclos((c) => c + 1)
            if (ciclos % 2 == 0) setMinutes(25); else setMinutes(5)
            setRodando(true)
        }
    }

    return (
        <main className="flex flex-col items-center">
            <Link href="/" className="text-5xl mt-5 ml-5 self-start">
                <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
            <Timer
                minutes={minutes}
                seconds={seconds}
            />
            <Form nomeTask={nomeTask} setNomeTask={setNomeTask} />
            <HandlerSubmit rodando={rodando} stopTimer={stopTimer} />
            <Cycles ciclos={ciclos} />
        </main>

    )
}