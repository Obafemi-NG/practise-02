import React from 'react';
import UserInput from '../user-input/user-input.components';
import CustomButton from '../custom-button/custom-button.component';
import Card from '../card/card.component'

const AddNewUser = () => {
    return(
        <div>
            <Card>
                <UserInput label = 'Username' />
                <UserInput label = 'Age (Years)' />
                <CustomButton>Add User</CustomButton>
            </Card>
        </div>

        
    )
};

export default AddNewUser;