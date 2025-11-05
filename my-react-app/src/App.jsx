
import React,{useState,useEffect,useRef} from "react";



function Review(){
  const [state,setState]=useState(0);
  const [color,setColor]=useState("white");
  

  function Inc(){
    setState((pre)=>pre+1);
    setColor("green")
  }
  function Dec(){
    setState((pre)=>pre-1)
    setColor("red")
  }
  function reset(hello){
    setState((pre)=>pre=0)
     setColor("white")
     hello
  }

  // function redd(){
  //   setColor("red")
  // }
  
  // function yello(){
  //   setColor("yellow")
  // }
  
  // function blue(){
  //   setColor("blue")
  // }

  return(
    <div>
      <div>
      <h1 style={{backgroundColor:color}}>{state}</h1>
      <button onClick={()=>Inc("alice")}>increase</button>
      <button onClick={Dec}>decrease</button>
      <button onClick={reset}>reset</button>
      </div>
      {/* <div>
        <button onChange={redd}>Red</button>
        <button onClick={yello}>Yellow</button>
        <button onClick={blue}>Blue</button>
      </div> */}
    </div>
    
  )
}

export default Review






