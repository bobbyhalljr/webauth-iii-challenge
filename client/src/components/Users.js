import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Users = () => {
    const [user, setUser] = useState({
        credentials: {
            username: '',
            password: ''
        }
    })

    function getUsers(){
        axiosWithAuth.get('/api/users')
        .then(res => {
            console.log(res.data)
            setUser(res.data)
        })
        .catch(error => {
            alert(error.response)
        })
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <h1>{user.credentials.username}</h1>
    )
}

export default Users;