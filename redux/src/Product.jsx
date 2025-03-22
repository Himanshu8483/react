import React from "react"
import myimage from './assets/react.svg'
import { useDispatch, useSelector } from "react-redux"
import { additem } from "./CartSlice"
const Product=()=>{
    let dataDispatch=useDispatch()
    function handleCart(e){
        dataDispatch(additem(e))
    }
    
    let storeData=useSelector((store)=>store.cart.cartitems)
    let cards = [
        {
            id: 1, name: "Laptop", price: 120000 , pimg: myimage,
        },
        {
            id: 2, name: "Mobile", price: 40000, pimg: myimage,
        }
    ]

    return(
        <>
        <h1>Cart item - {storeData.length} </h1>
        <div>
            {
                cards.map(
                    (e)=>
                    {
                        return(
                            <div key={e.id} style={{border:"2px solid black", padding:"5px"}}>
                                <img src={e.pimg} alt="noimg" />
                                <h2>Product Name {e.name}</h2>
                                <h3>Price {e.price}</h3>
                                <button onClick={()=>handleCart(e)}>Add to cart</button>
                            </div>
                        )
                    }
                )
            }
        </div>
        </>
    )
}
export default Product