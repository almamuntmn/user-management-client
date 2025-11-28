import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    form.reset();

    // create user in the server
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            const newUsers = [...users, data];
            console.log(newUsers);
            setUsers(newUsers);
        });
}


    return (
        <div>
            <h1>Users Page {users.length}</h1>

            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" />
                    <br />
                    <input type="email" name="email" placeholder="Email" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            {
                users.map(user => <p>{user.name} :  {user.email}</p>)
            }
        </div>
    );
};

export default Users;
