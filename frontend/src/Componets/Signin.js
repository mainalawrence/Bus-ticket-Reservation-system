import React,{useState} from 'react'
import './sign.css';
import axios from '../axios';
import {Link} from 'react-router-dom'
export default function Signin() {
//handle sign in
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState('')
    const [Validate, setValidate] = useState(true)

    const HandleLoginSubmit = (e) => {
        e.preventDefault();
console.log(Username)
        axios.post("admin/login", {
            "username": Username,
            "password":Password
        })
            .then(res => {
                if (res.data.message ==="success") {
                    setUsername('');
                    setPassword('');
                }
                else {
                    setValidate(false)
                }
            })
            .catch(err => {
            console.log(err.message)
            })
    }
    const HandleChange = (e) => {
        const { name, value } = e.target
        if (name === 'Username') setUsername(value);
        if (name === 'Password') setPassword(value)
        
 }
    const ValidateLogin = () => {
        if (Validate === true) {
            return (
                <>
                </>
            )
        }
        else {
            return (
                <>
                    <div className="container text-danger">
                        <p>Invalide password or username</p>
                </div>
                </>
            )
        }
    }
    return (
        <div className="container c-container d-flex pb-5">
            <div className="login-side login-side-sm">
                <div className="container d-flex align-items-center justify-content-center mb-3">
                     <h4><u>Login</u></h4>
                </div>
               
                <form className="form">
                    <div className="form-group container">
                        <label className="control-label">Username</label>
                        <input name="Username" type='text' onChange={HandleChange} value={Username} className="form-control col-8" placeholder="Enter Username Please"/>
                    </div>
                    <div className="form-group container">
                        <label className="control-label">Password</label>
                        <input name='Password' type='password' onChange={HandleChange} value={Password} className="form-control col-8" placeholder="Enter Password Please"/>
                    </div>
                    {ValidateLogin()}
                    <div className="form-group col-5">
                        <input type="submit" onClick={HandleLoginSubmit} value="Submit" className="btn btn-success"/>
                    </div>
               </form>
            </div>
            <div className="signup-side signup-side-sm">
            </div>
        </div>
    )
}
