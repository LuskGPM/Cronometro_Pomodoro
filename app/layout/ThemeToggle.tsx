"use client";

import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export function ThemeToggle() {

    const [theme, setTheme] = useState<"light" | "dark">("light")

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
        console.log(theme)
    }

    return (
        <>
            <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
                className="flex flex-col items-center gap-5 p-8 font-mono"
            >
                <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} className="text-9xl" />
                <p>Theme</p>
            </button>
        </>
    );
}