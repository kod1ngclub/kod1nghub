import { Nav } from "@/components/nav"

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
