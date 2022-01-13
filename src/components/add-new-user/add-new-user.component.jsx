import React from 'react';
import { useState } from 'react';

import UserInput from '../user-input/user-input.components';
import CustomButton from '../custom-button/custom-button.component';
import Card from '../card/card.component'

import './add-new-user.styles.css'

const AddNewUser = (props) => {
    const [newUser, setNewUser] = useState({
        username : '',
        age : '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewUser((prevState) => {
            return({
                ...prevState,
                [name] : value,
            })

        } )
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newUser.username.trim().length === 0 || newUser.age.trim().length === 0) {
            return;
        }
        console.log(newUser);
        props.addUser(newUser.username,newUser.age)
        setNewUser({
            username : '',
            age : '',
        })
    }

    return(
        <div>
            <Card>
                <form onSubmit = {handleSubmit}>
                    <UserInput type = 'text'
                    name = 'username' onChange = {handleChange}
                    value = {newUser.username} label = 'Username' />
                    <UserInput type = 'number' 
                    name = 'age'
                    onChange ={handleChange}
                    value = {newUser.age} label = 'Age (Years)' />
                    <CustomButton className = 'form-btn'>Add User</CustomButton>
                </form>

            </Card>
        </div>

        
    )
};

export default AddNewUser;