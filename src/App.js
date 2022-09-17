import React from 'react';

import Head from './components/Head';

import 'bootstrap/dist/css/bootstrap.min.css';
import Contacting from './components/Contacting';
function App() {
  return (
    <div className="App">
        <Head branding="Contact Manager"/>
        <div className='Container'>
            <Contacting/>
        </div>

    </div>
  );
}

export default App;
