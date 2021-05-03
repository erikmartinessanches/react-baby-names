import React, {useEffect, useRef} from 'react'

function Search({searchValue, setSearchValue}) {
    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()
    }, [])

    function handleChange(event){ //When the input text field changes,
        setSearchValue(event.target.value) //Change state.
    }

    return (
        <header>
            <input ref={inputRef} type="text" placeholder="Type a baby name..." value={searchValue} onChange={handleChange}/>
        </header>
        
    )
}

export default Search
