import React from 'react'
import '../App.css';

function JohnPeter() {
    const firstName = 'Peter';
    const lastName = 'Edagwhare';
    const middleName = 'John';
    const seatNumber = 26;
    const projectGroup = 'Group 9'
    const projectTitle = "Food Ordering App"

    return (
        <div className='jpCard'>
            <h1><span className='jp-label'>Full Name: </span>{`${firstName} ${middleName} ${lastName}`}</h1>
            <h2><span className='jp-label'>Seat Number: </span>{seatNumber}</h2>
            <h3><span className='jp-label'>Project Group: </span>{projectGroup}</h3>
            <h3><span className='jp-label'>Capstone Project:  </span>{projectTitle}</h3>
        </div>
    )
}

export default JohnPeter
