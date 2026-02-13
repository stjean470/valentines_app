import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <AppContext.Provider value={{isOpen, setIsOpen, toggleNavbar}}>{children}</AppContext.Provider>
  )
}

export default AppProvider
export const useMadeContext = () => {
    return useContext(AppContext);
}
