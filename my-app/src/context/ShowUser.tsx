import { useContext } from 'react'
import { UserContext } from './UserContext'

export default function ShowUser() {
    const userContext = useContext(UserContext)
    console.log("ShowUser", userContext.user)
    return (
        <div>

        {!userContext.user?<h2>Please Log-In</h2>:
        <div>
            <h2>User name is {userContext.user?.name}</h2>
            <h2>User email is {userContext.user?.email}</h2>
            </div>}
      
        </div>
    )

}
