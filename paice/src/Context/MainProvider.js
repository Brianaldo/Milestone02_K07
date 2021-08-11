import React from 'react';
import { IOProvider } from './IOContext';
import { KategoriProvider } from './KategoriContext';
import { LVProvider } from './LVContext';
import { NavProvider } from './NavContext';
import { ProvinsiProvider } from './ProvinsiContext';
import { RSProvider } from './RSContext';


export const MainProvider = props=>{
    return(
        <NavProvider>
            <KategoriProvider>
                <ProvinsiProvider>
                    <RSProvider>
                        <IOProvider>
                            <LVProvider>
                                {props.children}
                            </LVProvider>
                        </IOProvider>
                    </RSProvider>
                </ProvinsiProvider>
            </KategoriProvider>
        </NavProvider>
    )
};