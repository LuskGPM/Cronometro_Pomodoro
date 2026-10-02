'use client'

import { ButtonNavigation } from "@/layout/ButtonNavigation";
import { ThemeToggle } from "@/layout/ThemeToggle";
import { Timer } from "@/layout/Timer";
import { faClock, faLightbulb, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function Home() {

  const minutes = useRef<number>(0)
  const seconds = useRef<number>(0)
  const [theme, setTheme] = useState<boolean>(true)

  useEffect(() => {
    minutes.current = Number(localStorage.getItem("minutes")) || 0
    seconds.current = Number(localStorage.getItem("minutes")) || 0
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", String(theme))
  }, [theme])

  return (
    <>
      <Timer minutes={seconds.current} seconds={seconds.current} />

      <section id="buttons_navigation" className="grid grid-cols-2 grid-rows-2 gap-[3em] justify-center align-middle m-[2em]">
        <ButtonNavigation description="Cronômetro" href="/pages/timer">
          <FontAwesomeIcon icon={faClock} />
        </ButtonNavigation>

        <ButtonNavigation description="Histórico" href="#">
          <FontAwesomeIcon icon={faClockRotateLeft} />
        </ButtonNavigation>

        <ButtonNavigation description="Saiba mais" href="#">
          <FontAwesomeIcon icon={faLightbulb} />
        </ButtonNavigation>

        <ThemeToggle />
      </section>
    </>
  );
}
