import React, { useState } from 'react'
import './LoginVoting.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const LoginVoting = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const validateEmail = (email) => {

        if (typeof(email) !== 'string'){
            throw new Error('El parametro ingresado debe ser tipo string');
        }

        if (email.includes('@unsa.edu.pe')){
            return true;
        }
    }

    const emptyField = (email, password) => {
        if (!email || !password) {
            return true;
        }
    }

    const handleChange = (event) => {
        setUser((prev) => ({
            ...prev, [event.target.name]: event.target.value
        }))
    }

    axios.defaults.withCredentials = true;
    const handleClick = async (event) => {
        event.preventDefault();
        try {
            if (emptyField(user.email, user.password)){
                alert('Debe llenar ambas casillas para continuar');
                return;
            }
            if (!validateEmail(user.email)){
                alert('El correo ingresado no es perteneciente a la UNSA');
                return;
            }
        } catch (error) {
            console.error(error);
        }

        try {
            const response = await axios.post('http://localhost:8800/login', user);

            if (response.data.login === true) {
                navigate('/Pruea');
                alert('Usuario Valido');
            }
            else {
                alert('Usuario Invalido');
            }

        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div className='mainForm'>
        <h1>Login</h1>
        <form>
            <div>
                <label htmlFor="email"></label>
                <input
                className='campos'
                type="text"
                name="email"
                placeholder='Email...'
                onChange = {handleChange}
                />
            </div>
            <div>
                <label htmlFor="password"></label>
                <input
                className='campos'
                type="password"
                name="password"
                placeholder='Password'
                onChange = {handleChange}
                />
            </div>
            <br></br>
            <button className='loginButton' onClick={handleClick}>Ingresar</button>
        </form>  
        <p>
            <button 
                type='button'
                onClick={() => navigate(-1)}
                className='backButton'
            >Volver
            </button>
        </p>
    </div>
  )
}

export default LoginVoting;