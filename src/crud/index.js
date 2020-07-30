import React, {useState, useContext} from 'react';
import { Context } from '../context/provider';
import {add, remove, update} from '../context/actions';
import './../App.css';
import List from './List';
import Add from './Add';
import Edit from './Edit';

const Index = () => {
  const [state, dispatch] = useContext(Context);
  console.log(state,'...state crud');

  const initUser = {id: null, name: '', age: '', status: false};

  const [init, setInit] = useState(initUser);
  const [edit, setEdit] = useState(false);

  const deleteUser = (id) => {
    dispatch(remove(id));
  }

  const handleInput = e => {
    const value = e.target.name === 'status' ? e.target.checked : e.target.value
    const name = e.target.name;
		setInit({ ...init, [name]: value });
  };

  const addUser = user => {
    let nextId = state.crud.slice(-1).map(data => data.id);
    user.id = parseInt(nextId) + 1 || 1;
    dispatch(add(user))
  }

  const formEdit = user => {
		setEdit(true);
		setInit({ id: user.id, name: user.name, age: user.age, status: user.status });
  }

  const updateUser = (id, user) => {
    setEdit(false);
    dispatch(update(id, user));
	}

  return (
    <div className="container">
      <List users={state.crud} deleteUser={deleteUser} formEdit={formEdit}/>
      {edit ?
        <Edit setEdit={setEdit} init={init} setInit={setInit} initUser={initUser} handleInput={handleInput} updateUser={updateUser}/>
      :
        <Add addUser={addUser} init={init} setInit={setInit} initUser={initUser} handleInput={handleInput}/>
      }
    </div>
  );
}

export default Index;
