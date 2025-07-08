"use client"
import { useState } from "react";

 const Counter =()=>
{
    const[count , setCount] = useState<number>(0);

    function increment ()
    {
        setCount((prev)=>prev+1);
    }
    function decrement ()
    {
        setCount ((prev)=>prev-1);
    }
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h1>{count}</h1>
        </div>
        
    )
}
export default Counter;