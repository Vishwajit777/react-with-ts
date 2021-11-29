import React from 'react'
import { Greet } from './Greet'
import { Person } from './Person'
import { PersonList } from './PersonList'

export const PropsMain = () => {
    const personName = {
        first: 'Bruce',
        last: 'Wayne'
    }

    const nameList = [
        {
            first: 'Bruce',
            last: 'Wayne'
        },
        {
            first: 'Clark',
            last: 'Kent'
        },
        {
            first: 'Princess',
            last: 'Diana'
        }
    ]
    return (
        <div>
            <h1 className="text-success">Props </h1>
            <hr />
            <h2 className="text-primary">From Greet Component</h2>
            <Greet name='Vishwajit' messageCount={10} isLoggedIn={true} />
            <hr />
            <h2 className="text-primary"> From Person Component</h2>
            <Person name={personName} />
            <hr />
            <h2 className="text-primary">From PersonList Component</h2>
            <PersonList names={nameList} />
        </div>
    )
}
