import React from 'react'

export default function Project(props) {
    return (
        <div>
           <h1>{props.details.name}</h1> 
           <h3>{props.details.project}</h3> 
           <h2>{props.details.set}</h2> 

        </div>
    )
}
