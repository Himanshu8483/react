import { useState } from "react"

function Bg(){
  
    const [bgColor, setBgColor] = useState("white");
    const [showText, setShowText] = useState(true);

    return (
        <div style={{ width: "100%", height: "90vh", backgroundColor: bgColor }}>
            <button onClick={() => setBgColor("red")}>Red</button>
            <button onClick={() => setBgColor("cyan")}>Cyan</button>
            <button onClick={() => setBgColor("black")}>Black</button>
            <button onClick={() => setBgColor("orange")}>Orange</button>
            <button onClick={() => setBgColor("yellow")}>Yellow</button>

            {/* We use ternary operator in JSX but not if-else */}
            {/* {showText && <h1>Don't Use The Mobile</h1>} */}
            {showText ? <h1>Don't Use The Mobile</h1> : "" }
            <button onClick={() => setShowText(false)}>Hide</button>
            <button onClick={() => setShowText(true)}>Show</button>
            <br /><br />
            <button onClick={() => setShowText(!showText)}>{showText ? "Hide" : "Show"}</button>
        </div>
    );
}


export default Bg