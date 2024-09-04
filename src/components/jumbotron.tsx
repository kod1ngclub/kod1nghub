export interface JumbotronProps { children: JSX.Element | Array<JSX.Element> }

const Jumbotron = ({ children }: JumbotronProps) => <div className="jumbotron flex--c-c">{ children }</div>

export default Jumbotron
