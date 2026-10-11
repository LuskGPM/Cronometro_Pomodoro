'use client'

import { ToggleStateButton } from "@/components/Buttons/Buttons";
import { Cycles } from "@/components/Cycles/Cycles";
import { InputDefault } from "@/components/InputDefaul/InputDefault";
import { useState } from "react";

export default function Home() {

  const [minutes, setMinutes] = useState<number>(25)
  const [seconds, setSeconds] = useState<number>(0)
  const [rodando, setRodando] = useState<boolean>(false)

  return (
    <main className="w-full flex flex-col items-center">
      <section id="contador" className="mt-10 text-8xl font-mono">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, "0")}
      </section>
      <section id="form" className="flex flex-col mt-10">
        <InputDefault id="taskName" type="text" label="Task:" title="Nome da task" placeholder="Digite o nome da task" />
        <p className="text-center mt-5">Foque neste ciclo <b>{String(minutes).padStart(2, "0")} minutos </b></p>
      </section>
      <section id="ciclos-button" className="flex flex-col gap-5 mt-5 items-center">
        <Cycles />
        <ToggleStateButton
          width={30}
          height={30}
          href={rodando ? "/stop.svg#stop" : "/play.svg#play"}
          corBorder={rodando ? "border-emerald-700" : "border-red-700"}
          onClick={() => { setRodando(!rodando) }} />
      </section>
    </main>
  );
}
