import React from 'react';
import { IOProvider } from './IOContext';
import { KategoriProvider } from './KategoriContext';
import { LVProvider } from './LVContext';
import { NavProvider } from './NavContext';
import { RSProvider } from './RSContext';


export const MainProvider = props=>{
    return(
        <NavProvider>
            <KategoriProvider>
                <RSProvider>
                    <IOProvider>
                        <LVProvider>
                            {props.children}
                        </LVProvider>
                    </IOProvider>
                </RSProvider>
            </KategoriProvider>
        </NavProvider>
    )
};