import React from 'react'

export default function MyProfile(props) {
    return (
        <div>
            <h1>{props.Okoh.Name}</h1>
            <h3>{props.Okoh.Project}</h3>
            <h2>{props.Okoh.Sit}</h2>
        </div>
    )
}
