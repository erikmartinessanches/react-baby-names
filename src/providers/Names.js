import {React, createContext, useContext} from 'react'
import {names} from '../data'

//1. Crate a context...
const NamesContext = createContext()

//2. NamesContext gives us provider and consumer. 
//   We make a context provider.
export function NamesProvider({children}){
    return (
    <NamesContext.Provider value={names}>{children}</NamesContext.Provider>
    )
}
//Custom hook.
export function useNames(){
    const context = useContext(NamesContext)
    if(!context){
        throw new Error('You may have forgotten a <NamesProvider> context provider.')
    }
    return context
}
