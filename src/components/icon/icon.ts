export interface IconProps {
    size: number
    color: null | string
}

export type Icon = ({ size, color }: IconProps) => JSX.Element
