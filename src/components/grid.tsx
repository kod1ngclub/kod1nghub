export interface GridProps { children: JSX.Element | Array<JSX.Element> }

const Grid = ({ children }: GridProps) => <div className="grid">{ children }</div>

export default Grid
