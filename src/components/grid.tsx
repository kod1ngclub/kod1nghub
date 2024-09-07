// props
export interface GridProps { children: JSX.Element | Array<JSX.Element> }

const Grid = ({ children }: GridProps) => <div className="grid--g3">{ children }</div>

export default Grid
