//Consuming the context NamesContext
import React, {useContext} from 'react'
import NameList from './NameList'
import {NamesContext} from '../providers/Names'

function NamePicker({searchValue, shortList, setShortList}) {
    /**Consuming NamesContext using useContext hook to retrieve our names. */
    const names = useContext(NamesContext)

    const filteredNames = names
    .filter((entry)=> //Only show names in the NamePicker containing the value in the search box.
        entry.name.toLowerCase().includes(searchValue.toLowerCase()) 
    )
    .filter((entry) => !shortList.includes(entry.id)) //Do not show names in NamePicker that are in ShortList

    function addToShortList(id){
        setShortList([...shortList, id]) //"Append" id to existing shortList array.
    }

    return (
        <NameList nameList={filteredNames} onItemClick={addToShortList} />
    );
}

export default NamePicker;

