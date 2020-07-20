import React, {useState} from 'react';
import './App.css';
import List from './List';
import Add from './Add';

const App = () => {
  const allUsers = [
    {id: 1, name: 'risman', age: 27, status: false},
    {id: 2, name: 'ramli', age: 27, status: true}
  ];

  const [users, setUsers] = useState(allUsers);
  // const [editing, setEditing] = useState(false);

  const addUser = user => {
    let nextId = users.slice(-1).map(data => data.id);
	  user.id = parseInt(nextId) + 1;
    setUsers([ ...users, user ]);
	}

  return (
    <div className="container">
      <h1>hello...</h1>
      <List users={users}/>
      <Add addUser={addUser}/>
    </div>
  );
}

export default App;
