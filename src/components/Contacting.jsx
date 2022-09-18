import React, { Component } from 'react';
import Contact from './Contact';


class Contacting extends Component {

    constructor() {
        super();
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: 'john',
                    email: 'iknowsaint',
                    phone: '555-555-523'
                },
                {
                    id: 2,
                    name: 'saint',
                    email: 'iamsaint',
                    phone: '555-555-555'
                }, {
                    id: 3,
                    name: 'deli',
                    email: 'iknowsjames',
                    phone: '555-555-541'
                }
            ]
        }
    }

    deleteContact = (id) => {
        const { contacts } = this.state;

        const newContacts = contacts.filter(contact => contact.id !== id);

        this.setState({
            contacts: newContacts
        })
    }

    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map((contacts) =>
                    <Contact
                        key={contacts.id}
                        contact={contacts}
                        deleteClickHandler={this.deleteContact.bind
                            (this, contacts.id)
                        }
                    />
                )}
            </React.Fragment>
        )
    }
}
export default Contacting;

