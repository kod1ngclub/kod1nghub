export interface Link {
    default: string
    sub: Array<{ name: string, href: string }>
}

export interface Service {
    name: string
    description: string
    link: Link
    major: boolean
}
