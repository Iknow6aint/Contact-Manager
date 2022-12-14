import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';





class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onShowClick = e => {
        this.setState({
            showContactInfo:
                !this.state.showContactInfo
        })
    }
    onDeleteClick = async (id, dispatch) => {
        try {
            await axios
                .delete(`https://jsonplaceholder.typicode.com/users/${id}`);

        } catch (error) {
            dispatch({ type: 'DELETE_CONTACT', payload: id })
        }

    }
    render() {
        const { name, email, phone, id } = this.props.contact;
        const { showContactInfo } = this.state;

        return (

            <Consumer>
                {value => {
                    const { dispatch } = value
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
                                        onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                    />
                                    <Link to={`contacts/edit/${id}`}>
                                        <i className="fas fa-pencil-alt"
                                            style={{
                                                cursor: 'pointer',
                                                float: 'right',
                                                color: 'black',
                                                maginRight: '1rem'
                                            }}
                                        ></i>
                                    </Link>

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
                }}
            </Consumer>

        )
    }


}

// Contact.prototype = {
//     contact: PropTypes.object.isRequired
// }

export default Contact;




