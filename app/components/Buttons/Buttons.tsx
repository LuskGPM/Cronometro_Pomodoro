'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

import "./Buttons.css"

export function ButtonToggle() {

    const [theme, setTheme] = useState<"dark" | "light">("dark")

    useEffect(() => {
        const themeLocal = localStorage.getItem("theme")
        if (themeLocal === "dark" || themeLocal === "light") {
            setTheme(themeLocal)
            console.log("thema do effect: ", themeLocal)
        }
    }, [])

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])

    function toggleTheme() {
        setTheme(prevTheme => {
            const nextTheme = prevTheme === "dark" ? "light" : "dark"
            localStorage.setItem("theme", nextTheme)
            return nextTheme
        })
    }

    return (
        <button onClick={toggleTheme} className="button">
            <svg width="35" height="35">
                <use href={theme === "dark" ? "/sun.svg#sun" : "/moon.svg#moon"} />
            </svg>
        </button>
    )
}

type PropsLinkButton = {
    hrefLink: string
    hrefSvg: string
} & React.ComponentProps<'svg'>

export function LinkButton({ hrefLink, width = 35, height = 35, hrefSvg }: PropsLinkButton) {
    return (
        <Link href={hrefLink} className="button">
            <svg width={width} height={height}>
                <use href={hrefSvg} />
            </svg>
        </Link>
    )
}

type PropsToggleStateButton = {
    corBorder: "red" | "green"
} & React.ComponentProps<'button'> & React.ComponentProps<"svg">

export function ToggleStateButton({ corBorder, href, width, height, ...props }: PropsToggleStateButton) {
    console.log(corBorder)
    return (
        <button {...props} className={`button mt-5 p-2 rounded-xl w-56 flex justify-center ${corBorder}`}>
            <svg width={width} height={height}>
                <use href={href} />
            </svg>
        </button>
    )
}