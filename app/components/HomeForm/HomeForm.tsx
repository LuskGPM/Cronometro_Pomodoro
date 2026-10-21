import { useState } from "react"
import { ToggleStateButton } from "../Buttons/Buttons"
import { Cycles } from "../Cycles/Cycles"
import { InputDefault } from "../InputDefaul/InputDefault"

export function HomeForm() {
    const [rodando, setRodando] = useState<boolean>()

    return (
        <>
            <section id="form" className="flex flex-col mt-10">
                <InputDefault id="taskName" type="text" label="Task:" title="Nome da task" placeholder="Digite o nome da task" />
                <p className="text-center mt-5">Foque neste ciclo <b>{String(0).padStart(2, "0")} minutos </b></p>
            </section>
            <section id="ciclos-button" className="flex flex-col gap-5 mt-5 items-center">
                <Cycles />
                <ToggleStateButton
                    width={30}
                    height={30}
                    href={rodando ? "/stop.svg#stop" : "/play.svg#play"}
                    corBorder={rodando ? "green" : "red"}
                    onClick={() => { setRodando(!rodando) }} />
            </section>
        </>
    )
}