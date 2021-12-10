import { useContext } from 'react'
import ShowUser from './ShowUser'
import { UserContext } from './UserContext'

export const User = () => {
  const userContext = useContext(UserContext)
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
          Login
        </button>
      </div>
      <div className="d-inline-flex p-4">
        <button type="button" className="btn btn-outline-primary"
          onClick={handleLogout}
          disabled={!userContext.user}
        >
          Logout
        </button>
      </div>

    </div>
  )
}
