import React from 'react'

function ShortList({shortList, setShortList}) {
    return (
        <pre>
            {JSON.stringify(shortList)}
        </pre>
    )
}

export default ShortList
