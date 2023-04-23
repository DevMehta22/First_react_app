import React from "react"
export default function Counter(){
    // let count=0
    const [count,setcount]=React.useState(0)
    function incrementcounter(){
    //  count=count+1 
        setcount(count+1)
       console.log(count)
    }
    return(
        <div>
            <h1>Counter</h1>
            <h2>Current value of count is:{count}</h2>
            <button onClick={incrementcounter}>click to increment counter</button>
        </div>
        
    )
}