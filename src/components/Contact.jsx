import React, { Component } from 'react';
// import PropTypes from 'prop-types';


class Contact extends Component {
    state = {};

    onShowClick = e => {
        console.log(e);
    }
    render() {
        const { name, email, phone } = this.props.contact
        return (
            <div>
                <div className='card-body m3-3'>
                    <h4>{name}
                        <i onClick={this.onShowClick}
                            className='fas fa-sort-down' />
                    </h4>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            email:{email}</li>
                        <li className='list-group-item'>phone:{phone}</li>
                    </ul>
                </div>
            </div>
        )
    }


}

// Contact.prototype = {
//     contact: PropTypes.object.isRequired
// }

export default Contact;




