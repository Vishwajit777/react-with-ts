import React from 'react'
import Generics from './Generics'

export const GenericMain = () => {
    const personName = {
        first: 'Bruce',
        last: 'Wayne'
      }
    return (
        <div>
              {/* 
       In this example we have passed different types of data but typescript not showing error
      because of we have type as generic 
      */}
      <Generics data={personName} />
      <Generics data={[1, 2, 3, 4, 5, 6]} />
      <Generics data={10} />
      <Generics data="vishwajit" />
      <Generics data={true} />
     
        </div>
    )
}
