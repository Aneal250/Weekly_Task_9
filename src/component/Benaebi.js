import React from 'react'

export default function Benaebi(props) {
    return (
        <div>
            <h1>FULL NAME:{props.profile.Name}</h1>
            <h3>PROJECT GROUP:{props.profile.Group}</h3>
            <h2>SEAT No:{props.profile.Sit}</h2>
        </div>
    )
}
