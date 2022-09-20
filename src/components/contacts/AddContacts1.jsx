import React, { Component } from 'react'

export default class AddContacts extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
    }
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    onChange = e => {
        this.setState({
            [e.target.name]:
                e.target.value
        })
    }
    // this.setState({
    //     [e.target.name]:
    //         e.target.value
    // });
    render() {
        const { name, email, phone } = this.state;
        return (
            <div className='card mb-3'>
                <div className="card-header">
                    Contact
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type='text'
                                name='name'
                                className="form-control form-control-lg"
                                placeholder="Enter Name"
                                value={name}
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
                                value={email}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Phone">Phone</label>
                            <input type='number'
                                name='phone'
                                className="form-control form-control-lg"
                                placeholder="Enter Phone"
                                value={phone}
                                onChange={this.onChange}
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
