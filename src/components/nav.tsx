// next components
import Link from "next/link"

// utils
import { NewID } from "@/utils/id"

const ICON_TEXT = "Kod1ngclub"

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]

export const Nav = () => (
    <header className="nav">
        <h1 className="nav__icon">{ICON_TEXT}</h1>
        <nav className="flex--r-sb-g1">
            { NAV_LINKS.map(item => {
                return <Link key={NewID()} className="nav__item" href={item.href}>{item.name}</Link>
            })}
        </nav>
    </header>
)
