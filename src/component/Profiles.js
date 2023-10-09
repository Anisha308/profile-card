import React from 'react';

function Profile({name,email}) {
   
    return (
        <div>

            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}



export default Profile;