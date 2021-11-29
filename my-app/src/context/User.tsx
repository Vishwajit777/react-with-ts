import { useContext } from 'react'
import ShowUser from './ShowUser'
import { UserContext } from './UserContext'

export const User = () => {
  const userContext = useContext(UserContext)
  console.log("user in user.tsx",userContext.user)
  const handleLogin = () => {
    // if (userContext) {
    userContext.setUser({
      name: 'Vishwajit',
      email: 'vishwajit@gmail.com'
    })


    // }
  }
  const handleLogout = () => {
    // if (userContext) {
    userContext.setUser(null)
    // }
  }
  return (
    <div>
      <ShowUser />
      <div className="d-inline-flex p-4">
        <button type="button" className="btn btn-outline-primary"
          onClick={handleLogin}
        >
          Login as vishwajit
        </button>
      </div>
      <div className="d-inline-flex p-4">
        <button type="button" className="btn btn-outline-primary"
          onClick={handleLogout}
          disabled={!userContext.user}
        >
          Reset
        </button>
      </div>

    </div>
  )
}
