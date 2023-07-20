import React from 'react';
import { Table, Button } from 'react-bootstrap';

const UserTable = () => {

    const onDelete = (id:number) => {
        console.log('DELETEANDO EL USUARIO: ',id);
    }

    const onEdit = (id:number) => {
        console.log('EDITANDO EL USUARIO: ',id);
    }


    const users = [
        {
            id:1,
            name:'Franklink',
            email:'fjgallardo97@gmail.com'
        },
        {
            id:2,
            name:'Marklink',
            email:'mlmazzeo96@gmail.com'
        },
        {
            id:3,
            name:'Pepe',
            email:'ptpeperoni12@gmail.com'
        },
    ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Button variant="danger" onClick={() => onDelete(user.id)}>
                Delete
              </Button>
              <Button variant="primary" onClick={() => onEdit(user.id)}>
                Edit
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;