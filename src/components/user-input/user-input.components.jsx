import React from 'react';
import './user-input.styles.css';

const UserInput = ( {label, handleChange, ...otherProps}) => {
    return(
        <div className = 'user-input'>
            {
                label ? <label className = 'user-input-label'> {label} </label> : null
                
            }
            <input onChange ={handleChange} {...otherProps} />
        </div>   
    )
};

export default UserInput;