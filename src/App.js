import React from 'react';
import { Contacts } from './components/Contacts';
import Head from './components/Head';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
        <Head branding="Contact Manager"/>
        <div className='Container'>
        <Contacts name="iknow saint"
         email="iknowsaint@gmail.com"
          number="0903664542"
        />
         <Contacts name="saint"
         email="iknowsaint@gmail.com"
          number="0903664542"
        />
        </div>

    </div>
  );
}

export default App;
