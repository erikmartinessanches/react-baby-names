import React from 'react'
import NameList from './NameList'

function NamePicker({names, searchValue, shortList, setShortList}) {
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

