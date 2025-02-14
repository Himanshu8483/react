import Pr2 from "./Pr2"
const Pr1 = (props) => {
  let {name, agee}= props
    return (
        <>
        <h1>{name} Access Props {agee} in Practice1</h1>
        <Pr2 nname={name} aagee={agee}/>
        </>
    )
}
export default Pr1
