import './App.css'

let Sec2=()=>{
    let name ="in Car G"
    let person={
        first:"Himanshu",
        last:"Kushwaha"
    }
    function fun(){
        alert("working")
    }
    function func(a){
        return a+a 
    }
    let age=prompt("Enter Your Age: ")

    return(
        <>
        <section className='sec2'>
            <span>Cars Variety</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quo veniam aliquam rerum nesciunt quas velit dolore corrupti cum totam deserunt, pariatur, nulla sequi laboriosam nam dolor adipisci eum. Voluptate.</p>
            {fun()}
            {func(10)}
            <>Welcome {name} & Your Age {age} Years, name: {person.first}</>
            <div className="container"> 
                <div><img src="car1.png" alt="" /></div>
                <div><img src="car2.png" alt="" /></div>
                <div><img src="car3.png" alt="" /></div>
            </div>
        </section>
        </>
    )
}
export default Sec2;