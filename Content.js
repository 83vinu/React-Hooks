import React from 'react'
import { useState } from 'react';

const Content = () => {
    const [name,setName] = useState("earn");
    function handleNameChange(){
        const names =["earn" , "grow" , "give"];
        const int=Math.floor(Math.random()*3);
        setName (names[int])
      }
      
      

  return (
    <main>
    <p>Lets {name} Money</p>
    <button onClick={handleNameChange}>click</button>
    </main>
  )
}

export default Content