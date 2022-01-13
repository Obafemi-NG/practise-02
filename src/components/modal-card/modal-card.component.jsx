import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './modal-card.styles.css';

const ModalCard = (props) => {
    return (
        <div className = 'modal-card'>
            <div className = 'modal-header'>
                {props.title}
            </div>
            <div className = 'modal-body'>
                {props.message}
                <button className = 'modal-btn'> Okay </button>
            </div>
                
        </div>
    )
};

export default ModalCard;