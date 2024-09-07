// props
export interface JumbotronProps { children: JSX.Element | Array<JSX.Element> }

const Jumbotron = ({ children }: JumbotronProps) => <div className="jumbotron flex--c-c-g1">{ children }</div>

export default Jumbotron
