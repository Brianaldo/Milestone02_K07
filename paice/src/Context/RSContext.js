import React, { createContext, useState } from 'react';

export const RSContext = createContext()

export const RSProvider = props=>{
    const [rs, setRS] = useState([])

    return(
        <RSContext.Provider value={{rs, setRS}}>
            {props.children}
        </RSContext.Provider>
    )
};