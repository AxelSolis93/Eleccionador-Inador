import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Pruea = () => {
    
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    useEffect( () => {
        axios.get("http://localhost:8800/login")
        .then((res) => {
            console.log(res)
            if(res.data.valid) {
                console.log(res.data.user);
                setUser(res.data.user);
            } else {
                navigate('/LoginVoting');
            }
        })
        .catch((err) => console.error(err))
    }, [])

  return (
    <div>
        <p>Prueba ${user}</p>
    </div>
  )
}

export default Pruea