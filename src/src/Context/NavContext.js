import React, { useState, createContext } from 'react'


export const NavContext = createContext();

export const NavProvider = props =>{
    const [showNav, setShowNav] = useState(false)

    return(
        <NavContext.Provider value={{showNav, setShowNav}}>
            {props.children}
        </NavContext.Provider>
    )
}