import React from 'react';

import Head from './components/Head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacting from './components/Contacting';
import { Provider } from './context';

function App() {
  return (
    <Provider>
            <div className="App">
        <Head branding="Contact Manager"/>
        <div className='Container'>
            <Contacting/>
        </div>

    </div>
    </Provider>
  );
}

export default App;
