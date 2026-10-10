import { JSX } from "react/jsx-runtime"
import "./Cycles.module.css"

export function Cycles() {
    const cycles = 8
    const list_cycles: JSX.Element[] = []

    function dotCycles(): JSX.Element[] {
        let cor = ''
        for (let i = 0; i < cycles; i++) {
            cor = i % 2 === 0 ? "bg-yellow-400" : "bg-green-400"
            if (i === 7) cor = "bg-blue-400"

            list_cycles.push(<span key={i} className={cor}></span>)
        }

        return list_cycles
    }

    return (
        <div className="text-center">
            <span>Ciclos: </span>
            <div className="flex gap-3 cycle-div mt-3">
                {dotCycles()}
            </div>
        </div>
    )
}