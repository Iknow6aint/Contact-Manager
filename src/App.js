import React from 'react';

import Head from './components/layout/Head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacting from './components/contacts/Contacting';
import { Provider } from './context';
import AddContacts from './components/contacts/AddContacts';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';
import EditContacts from './components/contacts/EditContacts';




function App() {
  return (
    <Provider>
        <Router>
              <div className="App">
        <Head branding="Contact Manager"/>
        <div className='Container'>
            <Routes>
                <Route exact path='/add/contact' element= 
                {<AddContacts/>} />
                <Route exact path='contacts/edit/:id' element= 
                {<EditContacts/>} />
                <Route exact path='/' element= 
                {<Contacting/>} />
                <Route exact path='/about/' element= 
                {<About/>} />
                <Route  exact path="*" element= 
                {<NotFound/>} />
                 <Route  exact path="/test" element= 
                {<Test/>} />
            </Routes>
        </div>
    </div>
        </Router>

    </Provider>
  );
}

export default App;
