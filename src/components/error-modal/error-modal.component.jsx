import React from 'react';
import Card from '../card/card.component';

import CustomButton from '../custom-button/custom-button.component';
import ModalCard from '../modal-card/modal-card.component';

import './error-modal.styles.css';

const ErrorModal = () => {
    return(
        <React.Fragment>
            <div className = 'backdrop' />
            <ModalCard title = 'An Error Occured !' message = 'You did not add any input for name or Age for any new user'  />
        </React.Fragment>
            )
};
export default ErrorModal;