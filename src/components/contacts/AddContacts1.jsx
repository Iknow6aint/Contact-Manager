import React, { Component } from 'react'
import { Consumer } from '../../context';

export default class AddContacts extends Component {


    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef()
    }

    onSubmit = e => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        }

        console.log(contact);
    }

    static defaultProps = {
        name: 'iknowsaint',
        email: 'saintmoses@gmail.com',
        phone: '444-444-444'
    }

    render() {
        const { name, email, phone } = this.props;
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
                                defaultValue={name}
                                ref={this.nameInput}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Email">Email</label>
                            <input
                                type='email'
                                name='email'
                                className="form-control form-control-lg"
                                placeholder="Enter Email"
                                defaultValue={email}
                                ref={this.emailInput}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Phone">Phone</label>
                            <input type='phone'
                                name='phone'
                                className="form-control form-control-lg"
                                placeholder="Enter Phone"
                                defaultValue={phone}
                                ref={this.phoneInput}
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
    }
}