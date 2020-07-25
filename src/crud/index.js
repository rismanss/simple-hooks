import React, {useState} from 'react';
import './../App.css';
import List from './List';
import Add from './Add';
import Edit from './Edit';

const Index = () => {
  const allUsers = [
    {id: 1, name: 'risman', age: 27, status: false},
    {id: 2, name: 'ramli', age: 27, status: true}
  ];
  const initUser = {id: null, name: '', age: '', status: false};

  const [init, setInit] = useState(initUser);
  const [users, setUsers] = useState(allUsers);
  const [edit, setEdit] = useState(false);

  const handleInput = e => {
    const value = e.target.name === 'status' ? e.target.checked : e.target.value
    const name = e.target.name;
		setInit({ ...init, [name]: value });
  };

  const addUser = user => {
    let nextId = users.slice(-1).map(data => data.id);
    user.id = parseInt(nextId) + 1 || 1;
    setUsers([ ...users, user ]);
  }

  const formEdit = user => {
		setEdit(true);
		setInit({ id: user.id, name: user.name, age: user.age, status: user.status });
  }

  const updateUser = (id, updatedUser) => {
		setEdit(false);
		setUsers(users.map(user => (user.id === id ? updatedUser : user)));
	}

  return (
    <div className="container">
      <List users={users} setUsers={setUsers} formEdit={formEdit}/>
      {edit ?
        <Edit setEdit={setEdit} init={init} setInit={setInit} initUser={initUser} handleInput={handleInput} updateUser={updateUser}/>
      :
        <Add addUser={addUser} init={init} setInit={setInit} initUser={initUser} handleInput={handleInput}/>
      }
    </div>
  );
}

export default Index;
