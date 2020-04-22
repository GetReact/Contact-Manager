import React, { Component } from 'react'
import { Consumer } from '../context'
//import uuid from 'uuid/v1'
import axios from 'axios'
import TextInputGroup from '../layout/TextInputGroup'
export default class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }
    // onNameChange = (e) => { e.preventDefault(); this.setState({ name: e.target.value }) }
    // onEmailChange = (e) => { e.preventDefault(); this.setState({ email: e.target.value }) }
    // onPhoneChange = (e) => { e.preventDefault(); this.setState({ phone: e.target.value }) }

    onChange = (e) => {
        //console.log(e.target.name)
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state
        // Check For Errors
        if (name === '') {
            this.setState({ errors: { name: 'Name is required' } });
            return;
        }

        if (email === '') {
            this.setState({ errors: { email: 'Email is required' } });
            return;
        }

        if (phone === '') {
            this.setState({ errors: { phone: 'Phone is required' } });
            return;
        }

        const newContact = {
            name, email, phone
        }
        axios.post('https://jsonplaceholder.typicode.com/users', newContact).then(
            res => dispatch({ type: 'ADD_CONTACT', payload: res.data })
        )
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })
        this.props.history.push('/')
    }
    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='card mb-3'>
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        placeholder="enter phone ..."
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />
                                    <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>

        )


    }
}
