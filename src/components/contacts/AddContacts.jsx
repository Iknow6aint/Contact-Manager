import React, { Component } from 'react'
import { Consumer } from '../../context';
import { v4 as uuidv4 } from 'uuid';

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
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type='text'
                                            name='name'
                                            className="form-control form-control-lg"
                                            placeholder="Enter Name"
                                            alue={name}
                                            onChange={this.onChange}

                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Email">Email</label>
                                        <input
                                            type='email'
                                            name='email'
                                            className="form-control form-control-lg"
                                            placeholder="Enter Email"
                                            alue={email}
                                            onChange={this.onChange}

                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Phone">Phone</label>
                                        <input type='phone'
                                            name='phone'
                                            className="form-control form-control-lg"
                                            placeholder="Enter Phone"
                                            value={phone}
                                            onChange={this.onChange}
                                        />
                                    </div>
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
