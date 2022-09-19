import React from 'react';

import Head from './components/layout/Head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacting from './components/contacts/Contacting';
import { Provider } from './context';
import AddContacts from './components/contacts/AddContacts';


function App() {
  return (
    <Provider>
            <div className="App">
        <Head branding="Contact Manager"/>
        <div className='Container'>
            <AddContacts/>
            {/* <Contacting/> */}
        </div>
    </div>
    </Provider>
  );
}

export default App;
