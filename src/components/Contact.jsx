import React, { Component } from 'react';
// import PropTypes from 'prop-types';


class Contact extends Component {
    state = {
        showContactInfo: true
    };

    onShowClick = e => {
        this.setState({
            showContactInfo:
                !this.state.showContactInfo
        })
    }
    onDeleteClick = e => {
        this.props.deleteClickHandler();
    }
    render() {
        const { name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <div>
                <div className='card-body m3-3'>
                    <h4>{name}
                        <i onClick={this.onShowClick}
                            className='fas fa-sort-down'
                            style={{ cursor: 'pointer' }}
                        />
                        <i className="fas fa-times" style={
                            {
                                cursor: 'pointer', float:
                                    'right', color: 'red'
                            }}
                            onClick={this.onDeleteClick}
                        />
                    </h4>
                    {showContactInfo ? (
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                email:{email}</li>
                            <li className='list-group-item'>phone:{phone}</li>
                        </ul>) : null}
                </div>
            </div>
        )
    }


}

// Contact.prototype = {
//     contact: PropTypes.object.isRequired
// }

export default Contact;




