import Link from "next/link"

type ButtonNavigationProps = {
    children: React.ReactNode
    href: string
    description: string
    onclick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export function ButtonNavigation({ children, description, href, onclick }: ButtonNavigationProps) {
    return (
        <button onClick={onclick} className="font-mono d-flex flex-col items-stretch w-full">
            <Link href={href} className="block text-7xl p-8 pb-10 bg-white hover:bg-gray-300 hover:cursor-pointer rounded-2xl w-full">
                {children}
            </Link>
            <p className="mt-5 self-start">{description}</p>
        </button>

    )
}