import axios from 'axios';
import React, { useEffect, useState } from 'react'

type Post=
{
  userId:number
  id:number
  title: string
  body:string
}[]
function GetRequest() {
    const [person, setPerson] = useState<any>()
    const [massage, setMassage] = useState("Data Not Featch")
   

console.log(person)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
          if (res.status===200){
            setMassage("Data Fetched Succesfully")
          }
          const persons = res.data;
          setPerson({ persons});
          console.log("persons",persons)
        })
    }, [])
   
    return (
       <h1>    {massage}</h1>
      )
    
}

export default GetRequest
