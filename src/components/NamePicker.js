import React from 'react'

function NamePicker({names}) {
    return (
        <ul>
            {names.map(entry => <li className={entry.sex} key={entry.id}><button>{entry.name}</button></li>)}
        </ul>
    );
}

export default NamePicker;

