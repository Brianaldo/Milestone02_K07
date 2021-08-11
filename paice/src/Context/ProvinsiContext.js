import React, { createContext, useState } from 'react';

export const ProvinsiContext = createContext()

export const ProvinsiProvider = props=>{
    const [provinsi, setProvinsi] = useState([
        {nama: '', rs: false, io: false, lv: false}
    ])

    return(
        <ProvinsiContext.Provider value={{provinsi, setProvinsi}}>
            {props.children}
        </ProvinsiContext.Provider>
    )
};
