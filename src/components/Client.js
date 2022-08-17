import React from 'react';
import Avatar from 'react-avatar';


const Clients = ({ username }) => {
    return (
        <div className='client'>
            <Avatar name={username} size={50} round="15px" />
            <span className='userName font-bold'>{username}</span>
        </div>
    )
}

export default Clients