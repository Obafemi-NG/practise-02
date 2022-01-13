import React from 'react';
import { useState } from 'react';

import UserInput from '../user-input/user-input.components';
import CustomButton from '../custom-button/custom-button.component';
import Card from '../card/card.component'

import './add-new-user.styles.css'
import ErrorModal from '../error-modal/error-modal.component';

const AddNewUser = (props) => {
    const [newUser, setNewUser] = useState({
        username : '',
        age : '',
    });
    const [error, setError] = useState();

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
        if(newUser.username.trim().length === 0 && newUser.age.trim().length === 0) {
            setError({
                title: 'invalid inputs',
                message: 'You cannot submit an empty form, Please fill in valid username and age'
            })
            return ;
        }
        if(newUser.age < 1) {
            setError({
                title : 'Invalid Age',
                message : 'Please enter a valid age > 0'
            })
            return;
        }
        console.log(newUser);
        props.addUser(newUser.username,newUser.age)
        setNewUser({
            username : '',
            age : '',
        })
    };

    const errorHandler = () => {
        setError(null);
    }

    return(
        <div>
            {error && <ErrorModal title = {error.title} message = {error.message} onClick = {errorHandler} /> }
            
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