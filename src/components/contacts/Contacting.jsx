import React, { Component } from 'react';
import { Consumer } from '../../context';
import Contact from './Contact';

class Contacting extends Component {
    render() {

        return (
            <Consumer>
                {value => {
                    const { contacts } = value
                    return (
                        <React.Fragment>
                            <h1 className="display-4 mb2">
                                <span className="text-danger">Contact</span>
                                Contact list
                            </h1>
                            {contacts.map((contact) =>
                                <Contact
                                    key={contact.id}
                                    contact={contact}
                                />
                            )}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}
export default Contacting;

