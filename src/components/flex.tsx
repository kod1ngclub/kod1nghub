// props
export enum FlexDirection { Row = "r" , Column = "c" }
export enum FlexJustifying { Start = "st", SpaceBetween = "sb", Center = "c" }

export interface FlexProps {
    children: JSX.Element | Array<JSX.Element>,
    direction: FlexDirection,
    justifying: FlexJustifying
}

const Flex = ({ children, direction, justifying }: FlexProps) => (
    <div className={`flex--${direction}-${justifying}`}>
        { children }
    </div>
)

export default Flex
