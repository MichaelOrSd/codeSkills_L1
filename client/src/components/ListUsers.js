import React, { Fragment, useEffect, useState } from 'react';

const ListUsers = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {

        try {
            const response = await fetch("http://localhost:5000/users");
            const jsonData = await response.json();

            setUsers(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return <Fragment>
    <table class="table mt-5">
        <thead>
        <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Date Created</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {users.map(user => (
            <tr>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.created_at}</td>
                <td><button className="btn btn-warning">Edit</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
            </tr>
        ))}
        </tbody>
    </table>
    </Fragment>;
};

export default ListUsers;