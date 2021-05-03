import React, {useState, Fragment} from 'react'

import NamePicker from './components/NamePicker'
import Search from './components/Search'
/** We can either receive 'props' containing all props, or
 * destructure in the argument parenthesis and only receive
 * names property. */
function App({names}) {
  const [searchValue, setSearchValue] = useState("") //Passing an initial default name...

  return (
    <Fragment>
      <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      <NamePicker names={names} searchValue={searchValue}/>
    </Fragment>
    
  );
}

export default App;
