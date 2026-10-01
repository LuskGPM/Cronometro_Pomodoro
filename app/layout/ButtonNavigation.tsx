import Link from "next/link"

type ButtonNavigationProps = {
    children: React.ReactNode
    href: string
    description: string
}

export function ButtonNavigation({ children, description, href }: ButtonNavigationProps) {
    return (
        <>
            <Link href={href}>
                {children}
            </Link>
            <p>{description}</p>
        </>
    )
}