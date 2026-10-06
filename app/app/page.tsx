'use client'

import { ButtonNavigation } from "@/layout/ButtonNavigation";
import { Timer } from "@/layout/Timer";
import { faClock, faLightbulb, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    localStorage.setItem("theme", String(theme))
  }, [theme])

  useEffect(() => {
    localStorage.setItem("theme", theme)
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    let tema = localStorage.getItem("theme")
    if (tema == "dark") setTheme(tema)
  }, []);

  function toggleTheme() {
    setTheme(theme == "dark" ? "light" : "dark")
  }

  return (
    <main>
      <section id="buttons_navigation" className="grid grid-cols-2 grid-rows-2 gap-[5em] m-[2em]">
        <ButtonNavigation description="Cronômetro" href="/pages/timer">
          <FontAwesomeIcon icon={faClock} />
        </ButtonNavigation>

        <ButtonNavigation description="Histórico" href="#">
          <FontAwesomeIcon icon={faClockRotateLeft} />
        </ButtonNavigation>

        <ButtonNavigation description="Saiba mais" href="#">
          <FontAwesomeIcon icon={faLightbulb} />
        </ButtonNavigation>
        
        <ButtonNavigation description="Alterar Tema" href="#" onclick={toggleTheme}>
          <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
        </ButtonNavigation>
      </section>
    </main>
  );
}
