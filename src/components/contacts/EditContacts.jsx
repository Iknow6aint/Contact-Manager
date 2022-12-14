/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react'
import { Consumer } from '../../context';
import TextInput from '../layout/TextInput';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// function withParams(Component) {
//     return props => <Component {...props} params={useParams()} />;
// }


class EditContacts extends Component {


    state = {
        id: this.params,
        name: '',
        email: '',
        phone: '',
        errors: {}
    }



    async componentDidMount() {
        const { id } = this.state
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;

        this.setState({
            id: this.state.params,
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })

    }



    onSubmit = async (dispatch, e) => {
        console.log(this.state)
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
        const updateContact = {
            name,
            email,
            phone
        }


        const { id } = this.state;
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact);
        dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

        //clear state
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {},
        })
        this.props.history.push('/');
    }

    onChange = (e) => {

        this.setState({
            [e.target.name]:
                e.target.value

        });
    }



    render() {

        const { name, email, phone, errors } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return (
                        <div className='card mb-3'>
                            <div className="card-header">
                                Edit Contact
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
                                        value="Update Contact"
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


export default (props) => (
    <EditContacts
        {...props}
        params={useParams()}
    />
);