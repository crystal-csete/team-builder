import React from 'react'

export default function Team(props) {

    const { details } = props;

    if (!details) {
        return <h3>Working on it...</h3>
    }

    return (
        <div className="teams container">
                <h2>{details.username}</h2>
                <p>Email: {details.email}</p>
        </div>
    )
}
