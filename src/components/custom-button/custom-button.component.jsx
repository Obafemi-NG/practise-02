import React from 'react';
import './custom-button.styles.css'

const CustomButton = ({children}) => {
    return(
        <button>{children}</button>
    )
};

export default CustomButton;