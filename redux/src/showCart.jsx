import { useSelector } from "react-redux"
import { clearcart } from "./CartSlice"

function ShowCart(){
    let clear=()=>{
        clearcart()
    }
    let shdata= useSelector((store)=>store.cart.cartitems)
    return(
        <>
        <div>
            <button onClick={clear}>Clear Cart</button>
            {
            shdata.map((e)=>{
                return(
                    <div key={e.id} style={{border:"2px solid black", padding:"5px"}}>

                    <h1>{e.name}</h1>
                    <h1>{e.price}</h1>
                    <img src={e.pimg} alt=""/>
                    </div>

                )
            })
        }
        </div>
        </>
    )
}
export default ShowCart