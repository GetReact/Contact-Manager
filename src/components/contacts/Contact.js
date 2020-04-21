import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../context'
export default class Contact extends Component {
    state = {
        showContactInfo: false
    };
    onShowClick = e => { this.setState({ showContactInfo: !this.state.showContactInfo }) }
    onDeleteClick = (id, dispatch) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id })
        this.setState({ name: '', email: '', phone: '' })
    }
    render() {
        const { showContactInfo } = this.state
        const { id, name, email, phone } = this.props.contact
        //const { contact } = this.props
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return (
                        <div className="card card-body mb-3">
                            <h4>{name}
                                <i className="fas fa-sort-down" onClick={this.onShowClick} style={{ cursor: 'pointer' }} />
                                <i className="fas fa-times" onClick={this.onDeleteClick.bind(this, id, dispatch)} style={{ cursor: 'pointer', float: 'right', color: 'red' }} />
                            </h4>
                            {showContactInfo ? (<ul className="list-group">
                                <li className="list-group-item">Email : {email}</li>
                                <li className="list-group-item">Phone : {phone}</li>
                            </ul>) : null}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
Contact.propTypes = {
    // name: PropTypes.string.isRequired,
    // email: PropTypes.string.isRequired,
    // phone: PropTypes.string.isRequired,
    contact: PropTypes.object.isRequired,
    //deleteClickHandler: PropTypes.func.isRequired,
}