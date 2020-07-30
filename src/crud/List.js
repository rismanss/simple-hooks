import React from 'react';

const List = props => {
  return (
    <table className="table table-sm">
      <thead className="table-dark">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.status ? 'Married' : 'Single'}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline-dark"
                  onClick={() => props.formEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-outline-dark"
                  onClick={() => props.deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default List;