import Pr2 from "./Pr2"
const Pr1 = (props) => {
  let {name, agee}= props
    return (
        <>
        <h1>{name} Hello World {agee} from Practice1</h1>
        <Pr2 name={name}/>
        </>
    )
}
export default Pr1
