import {React, createContext} from 'react'
import {names} from '../data'

//1. Crate a context...
export const NamesContext = createContext()

//2. NamesContext gives us provider and consumer. 
//   We make a context provider.
export function NamesProvider({children}){
    return (
    <NamesContext.Provider value={names}>{children}</NamesContext.Provider>
    )
}




