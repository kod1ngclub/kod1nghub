import Link from "next/link"

export interface CardProps {
    title: string
    description: string
    link: { default: string, sub: Array<{ name: string, href: string }> }
}

const Card = ({ title, description, link }: CardProps) => (
    <div className="text tstyl-center" style={{ display: "block"}}>
        <h3 className="tstyl-bold">
            <Link className="link" href={link.default}>{title}</Link>
        </h3>
        
        <p className="my-2">{description}</p>
        <div className="flex--r-c">
            { link.sub.map(item => <Link className="link--deco" href={item.href}>{item.name}</Link>) }
        </div>
    </div>
)

export default Card
