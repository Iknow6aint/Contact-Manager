import React, { Component } from 'react'

class Contacts extends Component {

    constructor() {
        super();
        this.state = {
            contacts: [
            ]
        }
    }

    render() {
        const { contacts } = this.state;
        return (
            <div>
                {contacts.map(contact => {
                    <h1>{contact.na}</h1>
                })}
            </div>
        )
    }
}


export default Contacts;