import React, { Component } from 'react'
import Contact from './Contact'
export default class Contacts extends Component {
    deleteContact(id) {
        const { contacts } = this.state
        const newContacts = contacts.filter(contact => contact.id !== id)
        this.setState({
            contacts: newContacts
        })
    }
    state = {
        contacts: [{
            id: 1,
            name: "Aouatef Mareghni",
            email: "aouatef@gmail.com",
            phone: "+55 6987 254"
        },
        {
            id: 2,
            name: "Leen Mar",
            email: "lenn@gmail.com",
            phone: "+55 2223 587"
        },
        {
            id: 3,
            name: "Hachem Mar",
            email: "hachem@gmail.com",
            phone: "+55 3654 789s"
        }]
    }

    render() {
        const { contacts } = this.state
        return (
            <>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        // name={contact.name}
                        // email={contact.email}
                        // phone={contact.phone} 
                        contact={contact}
                        deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                    />
                ))}
            </>
        )
    }
}
