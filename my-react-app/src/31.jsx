
import React,{useState,useEffect} from "react"

function Fetching(){
    const [post,setPost]=useState([]);

  useEffect(function(){
    
    async function Canva(){
        try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const data= await response.json();
        setPost(data)
 
    
    } catch(error){
        console.log(error)
    }
}
    Canva()
  },[])

return(
    <div>
        {post.map((names)=>(<h2 key={names.id}>{names.name}</h2>))}
    </div>
)

}



export default Fetching
