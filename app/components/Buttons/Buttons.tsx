'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

import "./Buttons.css"

export function ButtonToggle() {

    const [href, setHref] = useState<string>()

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        document.documentElement.classList.add(theme || "light")

        if (theme === "dark") setHref("/sun.svg#sun")
        else setHref("/moon.svg#moon")
    }, [])

    function toggle() {
        const docClass: DOMTokenList = document.documentElement.classList
        docClass.toggle("dark")

        if (docClass.contains("dark")) {
            localStorage.setItem("theme", "dark")
            setHref("/sun.svg#sun")
        }
        else {
            localStorage.setItem("theme", "light")
            setHref("/moon.svg#moon")
        }
    }

    return (
        <button onClick={toggle} className="button">
            <svg width="35" height="35">
                <use href={href} />
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
    corBorder: string
} & React.ComponentProps<'button'> & React.ComponentProps<"svg">

export function ToggleStateButton({ corBorder, href, width, height, ...props }: PropsToggleStateButton) {
    return (
        <button {...props} className={"button mt-5 p-2 rounded-xl w-56 flex justify-center border-3 " + corBorder}>
            <svg width={width} height={height}>
                <use href={href} />
            </svg>
        </button>
    )
}