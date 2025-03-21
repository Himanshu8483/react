import React from "react"
import myimage from './assets/react.svg'

const Product=()=>{
    let cards = [
        {
            id: 1, name: "Laptop", price: 120000 , pimg:"myimage",
        },
        {
            id: 2, name: "Mobile", price: 40000, pimg:"myimage",
        }
    ]
}
    return(
        <>
        <h1>Cart item - 0 </h1>
        <div>
            {
                cards.map((e)=>{return 
                    <div style={{border:"2px solid black"}}>
                        <img src="{e.pimg" alt="" />
                        <h2>Product Name {e.name}</h2>
                        <h3>Price {e.price}</h3>
                        <button>Add to cart</button>
                        </div>
                })
            }
        </div>
        </>
    )

export default Product