// import React from "react";
// import {useParams} from 'react-router-dom'

// const User = () =>{
//     let {name, age} = useParams()
//     return (
//         <>
//         <h1>User page and my name is {name} age is {age}</h1>
//         </>
//     )
// }
// export default User


import React from "react";
import {useParams} from 'react-router-dom'

const User = () =>{
    let {id} = useParams()
    return (
        <>
        <h1>User page and my id is {id} </h1>
        </>
    )
}
export default User