// components
import { Nav } from "@/components/nav"

// CSS import
import "@/style/style.min.css"

const Layout = ({ children }: Readonly<{ children: React.ReactNode }> ) => {
    return (
        <html>
            <body>
                <Nav />
                {children}
            </body>
        </html>
    )
}

export default Layout
