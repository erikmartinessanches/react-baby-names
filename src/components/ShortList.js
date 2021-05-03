import {React, Fragment} from 'react'
import NameList from './NameList'

function ShortList({names, shortList, setShortList}) {
    const shortListedNames = names.filter((entry) => shortList.includes(entry.id))

    function removeFromShortList(id) {
        setShortList(shortList.filter((i) => i !== id))
    }

    const hasNames = shortListedNames.length > 0;

    return (
        <div className="short-list">
            <h2>{hasNames ? "Our shortlist" : "Click on a name to put it on our shortlist"}</h2>
            {/* Show NameList and hr only if hasNames is true: */}
            {hasNames && (
                <Fragment>
                    <NameList 
                        nameList={shortListedNames} 
                        onItemClick={removeFromShortList}
                    />
                    <hr/>
                </Fragment>
            )}
        </div>
        
    )
}

export default ShortList
