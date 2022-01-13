import React from 'react';
import { useState } from 'react';

import './App.css';
import AddNewUser from './components/add-new-user/add-new-user.component';
import ErrorModal from './components/error-modal/error-modal.component';
import UserList from './components/user-list/user-list.component';


function App() {
  const [users, setUsers] = useState([]);

  const addNewUserHandler = (uName, uAge) => {
    setUsers((prevState) => {
      return([
        ...prevState, 
        {username : uName, age : uAge, id : Math.random() }
      ])
    })
  }

  return (
  <div>
    <AddNewUser addUser = {addNewUserHandler} />
    <UserList users = {users} />
    <ErrorModal/>
  </div>
  )
}

export default App;
