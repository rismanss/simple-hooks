import React, { useState } from 'react';

const Add = props => {
  const initUser = {id: null, name: '', age: '', status: false};
  const [init, setInit] = useState(initUser);

  const handleInput = e => {
    const value = e.target.name === 'status' ? e.target.checked : e.target.value
    const name = e.target.name;
		setInit({ ...init, [name]: value });
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!init.name || !init.username) {
      props.addUser(init);
    }
    setInit(initUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Name</label>
          <input 
            className="form-control" type="text" name="name" value={init.name} onChange={handleInput} />
        </div>
        <div className="form-group col-md-6">
          <label>Age</label>
          <input className="form-control" type="number" name="age" value={init.age} onChange={handleInput} />
        </div>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" name="status" checked={init.status} onChange={handleInput} />
        <label className="form-check-label"> Status </label>
      </div>
      <div>
        <button className="btn btn-sm btn-primary btn-block">Save</button>
      </div>
    </form>
  );
}

export default Add;
