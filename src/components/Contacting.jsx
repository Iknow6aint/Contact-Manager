import React, { Component } from 'react';
import { Consumer } from '../context';
import Contact from './Contact';

class Contacting extends Component {
    render() {

        return (
            <Consumer>
                {value => {
                    const { contacts } = value
                    return (
                        <React.Fragment>
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

