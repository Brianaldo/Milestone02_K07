import React, { createContext, useState } from 'react';

export const RSContext = createContext()

export const RSProvider = props=>{
    const [rs, setRS] = useState([
        {rs: '', alamat: '', telp: '', jumlahBed: '', jumlahAntrian: ''}])

    return(
        <RSContext.Provider value={{rs, setRS}}>
            {props.children}
        </RSContext.Provider>
    )
};