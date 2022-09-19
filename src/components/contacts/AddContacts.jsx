import React, { Component } from 'react'

export default class AddContacts extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
    }
    render() {
        const { name, email, phone } = this.state;
        return (
            <div className='card mb-3'>
                <div className="card-header">
                    Contact
                </div>
                <div className="card-body">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type='text'
                                className="form-control form-control-lg"
                                placeholder="Enter Name"
                                value={name}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Email">Email</label>
                            <input type='email'
                                className="form-control form-control-lg"
                                placeholder="Enter Email"
                                value={email}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Phone">Phone</label>
                            <input type='number'
                                className="form-control form-control-lg"
                                placeholder="Enter Phone"
                                value={phone}
                            />
                        </div>
                    </form>
                    <input type="submit"
                        value="Add Contact"
                        className='btn btn-light btn-block'
                    />
                </div>
            </div>
        )
    }
}
