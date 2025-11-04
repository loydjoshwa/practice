import Hello from "./31";
import "./App.css";
import React,{useState} from "react";

function App() {
  return (
    <div>
      < Hello />
    </div>
  );
}

function Help(){
  return <h1>follow me</h1>
}

function Butto(){

  const [value,setValue]=useState(0);
  const [color,setColor]=useState("white");

  return(
    <div className="usage">
      <div className="child" style={{backgroundColor:color}}>
        <button className="button" onClick={()=>(setValue(value+1))}>
          increment
        </button><br/>
        <label>{value}</label><br/>
        <button className="button" onClick= {()=>(setValue(value-1))}> 
          decrement</button><br/>
          <button className="button" onClick={()=>(setValue(0))}>reset</button>
          <br/>
          <button className="button" onClick={()=>(setColor("green"))}>green</button><br/>
          <button className="button" onClick={()=>(setColor("blue"))}>blue</button><br/>
          <button className="button" onClick={()=>(setColor("white"))}>rest</button><br/>
          


      </div>

    </div>
  )
  
}


export default App;
export {Help,Butto};
