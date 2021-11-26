
import React from 'react'

export default function  Generics <T>(data:T){
  console.log("data",data)
  return (
    <div>
    </div>
  )
}

// Generics({name:"vishwajit",id:1});
// Generics([1,2,3,4,5,6]);
// Generics(1);
// Generics(true);
// Generics("vishwajit");
// Generics([1,2,3,4,5,6]);
