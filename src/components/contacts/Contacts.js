import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../context'
export default class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value
                    return (
                        <>
                            <h1 class="display-4"><span className="text-danger">Contact</span> List</h1>
                            {contacts.map(contact => (
                                <Contact
                                    key={contact.id}
                                    // name={contact.name}
                                    // email={contact.email}
                                    // phone={contact.phone} 
                                    contact={contact}

                                />
                            ))}
                        </>
                    )
                }}
            </Consumer>

        )
    }
}
