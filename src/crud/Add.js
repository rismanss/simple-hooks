import React, { useState, useEffect } from 'react';

const Add = props => {
  const [ user, setUser ] = useState(props.init)
  
  useEffect(() => {
    setUser(props.init)
  },[ props ])
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!user.name || !user.age) return alert('name or age data is empty!')
    props.addUser(user);
    props.setInit(props.initUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Name</label>
          <input 
            className="form-control" type="text" name="name" value={user.name} onChange={props.handleInput} />
        </div>
        <div className="form-group col-md-6">
          <label>Age</label>
          <input className="form-control" type="number" name="age" value={user.age} onChange={props.handleInput} />
        </div>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" name="status" checked={user.status} onChange={props.handleInput} />
        <label className="form-check-label"> Status </label>
      </div>
      <div>
        <button className="btn btn-sm btn-info btn-block">Save</button>
      </div>
    </form>
  );
}

export default Add;
