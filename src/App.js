

/** We can either receive 'props' containing all props, or
 * destructure in the argument parenthesis and only receive
 * names property. */
function App({names}) {
  return (
    <ul>
      {names.map(entry => <li className={entry.sex} key={entry.id}><button>{entry.name}</button></li>)}
    </ul>

    //  <pre>
    //     {JSON.stringify(names, null, 2)}
    // </pre> 
  );
}

export default App;
