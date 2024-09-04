import Link from "next/link"

const ICON_TEXT = "Kod1ngclub"

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]

export const Nav = () => (
    <header className="nav">
        <h1 className="nav__icon">{ICON_TEXT}</h1>
        <nav className="flex--r-sb">
            { NAV_LINKS.map(item => {
                return <Link className="nav__item" href={item.href}>{item.name}</Link>
            })}
        </nav>
    </header>
)
