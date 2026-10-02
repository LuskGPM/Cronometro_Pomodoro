import { useEffect, useRef } from "react"

type TimerProps = {
    minutes: number
    seconds: number
}

export function Timer({minutes, seconds}: TimerProps) {

    const min = useRef(minutes)
    const seg = useRef(seconds)

    useEffect(() => {
        const interval = setInterval(() => {
            if (minutes !== 0 && seconds !== 0) {
                if (seconds <= 1) {
                    min.current --
                    seg.current = 60
                }
                seg.current --

                localStorage.setItem("minutes", String(min.current))
                localStorage.setItem("seconds", String(seg.current))

            } else clearInterval(interval)
        }, 1000)
    }, [minutes, seconds])

    return (
        <div className="text-center m-[2em]">{minutes} : {seconds}</div>
    )
}