import React, { createContext, useState } from 'react';

export const IOContext = createContext()

export const IOProvider = props=>{
    const [io, setIO] = useState([])

    return(
        <IOContext.Provider value={{io, setIO}}>
            {props.children}
        </IOContext.Provider>
    )
};