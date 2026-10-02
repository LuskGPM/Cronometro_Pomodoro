import Link from "next/link"

type ButtonNavigationProps = {
    children: React.ReactNode
    href: string
    description: string
    onclick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export function ButtonNavigation({ children, description, href, onclick }: ButtonNavigationProps) {
    return (
        <button onClick={onclick} className="p-8 font-mono d-flex flex-col gap-5">
            <Link href={href} className="text-9xl">
                {children}
            </Link>
            <p>{description}</p>
        </button>
    )
}