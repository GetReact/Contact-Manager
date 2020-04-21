import React from 'react'

export default function About(props) {
    return (
        <div>
            <h2 className="display-4">{props.match.params.id}</h2>
            <h1 className="display-4">About Contact Manager</h1>
            <p className='lead'>Simple app to manage contact</p>
            <p className='text-danger'>Version 1.0.0</p>
        </div>
    )
}