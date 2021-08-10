import React, { createContext, useState } from 'react';

export const KategoriContext = createContext()

export const KategoriProvider = props=>{
    const [kategori, setKategori] = useState('')

    return(
        <KategoriContext.Provider value={{kategori, setKategori}}>
            {props.children}
        </KategoriContext.Provider>
    )
};