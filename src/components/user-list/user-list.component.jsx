import React from 'react';
import Card from '../card/card.component';

import './user-list.styles.css'

const UserList = (props) => {
    return(
        <Card>
            <ul  className = 'user-list'>
                {props.users.map((user) =>
                <li key = {user.id}>{user.username}  -  {user.age}years old</li>
                )}   
            </ul>

        </Card>
    )
};
export default UserList;