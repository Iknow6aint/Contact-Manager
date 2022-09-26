import React, { Component } from 'react'
import { Consumer } from '../../context';
import { v4 as uuidv4 } from 'uuid';
import TextInput from '../layout/TextInput';
import axios from 'axios';


export default class AddContacts extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        //check for errors
        if (name === '') {
            this.setState({
                errors: {
                    name: 'name is required'
                }
            })
            return
        }
        if (email === '') {
            this.setState({
                errors: {
                    email: 'email is required'
                }
            })
            return
        }
        if (phone === '') {
            this.setState({
                errors: {
                    phone: 'phone  is required'
                }
            })
            return;
        }

        const newContact = {
            name,
            email,
            phone,
            errors: {}
        }

        axios.post(
            'https://jsonplaceholder.typicode.com/users', newContact
        )
            .then(res => dispatch({ type: 'ADD_CONTACT', payload: newContact }))
            ;
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {},
        })
        this.props.history.push('/');
    }

    onChange = e => this.setState({
        [e.target.name]:
            e.target.value
    });



    render() {
        const { name, email, phone, errors } = this.state;

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
                                        error={errors.name}
                                    />
                                    <TextInput

                                        label='Email'
                                        name='email'
                                        placeholder='Enter email'
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInput

                                        label='Phone'
                                        name='phone'
                                        placeholder='Enter phone'
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
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
