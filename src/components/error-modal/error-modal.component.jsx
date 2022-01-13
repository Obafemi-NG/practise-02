import React from 'react';

import './error-modal.styles.css';

const ErrorModal = (props) => {
    return(
        <React.Fragment>
            <div className = 'backdrop' onClick = {props.onClick} />
            <div className = 'modal-card'>
                <div className = 'modal-header'>
                    {props.title}
                </div>
                <div className = 'modal-body'>
                    {props.message}
                    <div>
                    <button className = 'modal-btn' onClick = {props.onClick} > Okay </button>
                    </div>

                </div>
                
            </div>
        </React.Fragment>
    )
};
export default ErrorModal;