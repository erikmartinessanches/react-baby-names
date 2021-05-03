import React, {useState, Fragment} from 'react'
import Search from './components/Search'
import Footer from './components/Footer'
import NamePicker from './components/NamePicker'
import ShortList from './components/ShortList'
import ResetSearch from './components/ResetSearch'

/** We can either receive 'props' containing all props, or
 * destructure in the argument parenthesis and only receive
 * names property. */
function App() {
  const [searchValue, setSearchValue] = useState("") //Passing an initial default name...
  const [shortList, setShortList] = useState([]);

  return (
    <Fragment>
      <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      <NamesContainer 
        searchValue={searchValue}
        shortList={shortList}
        setShortList={setShortList}
      />
      <Footer />
    </Fragment>
    
  );
}

function NamesContainer({searchValue, shortList, setShortList, setSearchValue}) {
  return (
      <Fragment>
      <ShortList shortList={shortList} setShortList={setShortList}/>
      <NamePicker searchValue={searchValue} shortList={shortList} setShortList={setShortList}/>
      <ResetSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </Fragment>
  )
}

export default App;
