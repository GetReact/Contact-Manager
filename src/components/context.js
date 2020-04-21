import React, { Component } from 'react'
const Context = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT': return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload) };
        case 'ADD_CONTACT': return {
            ...state,
            contacts: [action.payload, ...state.contacts]
        };
        default: return state;
    }

}
export class Provider extends Component {
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
        }],
        dispatch: action => { this.setState(state => reducer(state, action)) }
    }
    render() {
        return (
            < Context.Provider value={this.state} >
                {this.props.children}
            </Context.Provider >)
    }
}
export const Consumer = Context.Consumer;
