import React, { useState, createContext } from 'react'

type AuthUser = {
  name: string
  email: string
}

const users = {
  name: 'ram',
  email: 'ram@gmail.com'
}

type UserContextType = {
  user: AuthUser | null
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps = {
  children: React.ReactNode
}

// export const UserContext = createContext<UserContextType | null>(null)
export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(users)
  console.log("user userContext",user)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
