import React, {useState, Fragment} from 'react'

import NamePicker from './components/NamePicker'
import Search from './components/Search'
import ShortList from './components/ShortList'
/** We can either receive 'props' containing all props, or
 * destructure in the argument parenthesis and only receive
 * names property. */
function App({names}) {
  const [searchValue, setSearchValue] = useState("") //Passing an initial default name...
  const [shortList, setShortList] = useState([]);

  return (
    <Fragment>
      <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      <ShortList names={names} shortList={shortList} setShortList={setShortList}/>
      <NamePicker names={names} searchValue={searchValue} shortList={shortList} setShortList={setShortList}/>
    </Fragment>
    
  );
}

export default App;
