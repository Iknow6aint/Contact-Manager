import React, { Component } from 'react'
import { Consumer } from '../../context';
import { v4 as uuidv4 } from 'uuid';
import TextInput from '../layout/TextInput';


export default class AddContacts extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

        const newContact = {
            id: uuidv4(),
            name,
            email,
            phone
        }

        dispatch({ type: 'ADD_CONTACT', payload: newContact });
        this.setState({
            name: '',
            email: '',
            phone: '',
        })
        console.log(newContact);
    }

    onChange = e => this.setState({
        [e.target.name]:
            e.target.value
    });



    render() {
        const { name, email, phone } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return (
                        <div className='card mb-3'>
                            <div className="card-header">
                                Contact
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(
                                    this, dispatch
                                )}>

                                    <TextInput

                                        label='Name'
                                        name='name'
                                        placeholder='Enter name'
                                        value={name}
                                        onChange={this.onChange}
                                    />
                                    <TextInput

                                        label='Email'
                                        name='email'
                                        placeholder='Enter email'
                                        value={email}
                                        onChange={this.onChange}
                                    />
                                    <TextInput

                                        label='Phone'
                                        name='phone'
                                        placeholder='Enter phone'
                                        value={phone}
                                        onChange={this.onChange}
                                    />
                                    <input type="submit"
                                        value="Add Contact"
                                        className='btn btn-light btn-block'
                                    />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
