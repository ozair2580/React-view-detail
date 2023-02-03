import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './ListCSS.css';

const List=()=> {
    const [data,setdata]=useState();
    const [other,setother]=useState();
    useEffect(()=>{
        getApi();
    
        
    })
    const getApi=async ()=>{
        let result=await fetch('http://localhost:3100/user')
        result=await result.json();
        console.warn(result)
        setdata(result)
    }
  const findApi=async (id)=>{
    let result=await fetch(`http://localhost:3100/user/${id}`)
    result=await result.json();
    console.warn("find",result)
    setother(result)
  
  }
         



 
  
    return ( 
        <div>
           <div className='large-container'>
          <h1>hello</h1>
            <p>id: {other.id}</p>
            <p>Name: {other.name}</p>
            <p>phone: {other.phone}</p>
            <p>username :{other.username}</p>
            <p>website : {other.website}</p> 
         </div> 
            
        {
            data.map((e,i)=>
            
          
            <div className='container1' >
            <div className="under-container">
                <div className='id'>
               
                  <h5>id</h5>
                  <p>{e.id}</p>
                </div>
                <div className="Name">
                   <h5>Name</h5>
                   <p>{e.name}</p>
                </div>
                <div className="User name">
                    <h5>username</h5>
                    <p>{e.username}</p>
                </div>
                <div className="email">
                     <h5>email</h5>
                     <p>{e.email}</p>
                </div>
                <div className="button">
                      <button onClick={()=>findApi(e.id)} >view Details </button>

                </div>
              

            </div>
            
         </div>
          
            )
         } 
        
        </div>
    );
}

export default List;