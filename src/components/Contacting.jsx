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

    render() {
        const { contacts } = this.state;
        return (
            <div>
                {contacts.map((contacts) =>
                    <Contact
                        key={contacts.id}
                        contact={contacts}
                    />
                )}
            </div>
        )
    }
}
export default Contacting;

