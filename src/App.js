import React, {Fragment} from 'react'

import NamePicker from './components/NamePicker'
import Search from './components/Search'
/** We can either receive 'props' containing all props, or
 * destructure in the argument parenthesis and only receive
 * names property. */
function App({names}) {
  return (
    <Fragment>
      <Search />
      <NamePicker names={names} />
    </Fragment>
    
  );
}

export default App;
