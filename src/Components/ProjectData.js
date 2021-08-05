import React from 'react';

export default function ProjectData(props) {
    return(
<div> 
    <h1>First Name: {props.myProject.name}</h1>
    <h3>Project Group: {props.myProject.group}</h3>
    <h2>Seat Number: {props.myProject.seat}</h2>
</div>
    );
}
