import React, { createContext, useState } from 'react';

export const LVContext = createContext()

export const LVProvider = props=>{
    const [lv, setLV] = useState([])

    return(
        <LVContext.Provider value={{lv, setLV}}>
            {props.children}
        </LVContext.Provider>
    )
};