import React from 'react';
import { Contacts } from './components/Contacts';
import Head from './components/Head';
function App() {
  return (
    <div className="App">
        <Head branding=""/>
        <Contacts name="iknow saint"
         email="iknowsaint@gmail.com"
          number="0903664542"
        />
         <Contacts name="saint"
         email="iknowsaint@gmail.com"
          number="0903664542"
        />
    </div>
  );
}

export default App;
