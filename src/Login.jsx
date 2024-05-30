import React from 'react'
import './Login.css'
import { useNavigate} from 'react-router-dom'

const Login = () => {
const navigate=useNavigate();
const handle_login=(e)=>{
    e.preventDefault();
    navigate("/table")
}
  return (
    <div className='main'>
        <form onSubmit={handle_login}>
        <fieldset >
            <img
                src="https://static-00.iconduck.com/assets.00/profile-user-icon-2048x2048-m41rxkoe.png"
                height="100px"
                width="80px"
            /><br/>
            <input
                type="text"
                placeholder="Username"
                size="20"
                style={{ textAlign: 'center' }} required
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                size="20"
                maxlength="12"
                style={{ textAlign: 'center' }} required
            />
            <br />
            <a href="#" class="forget_p">Forgot Password?</a>
            <br />
            <input type="submit" class="login_button" value="Login"/>
            <br />
        </fieldset>
        </form>
    </div>
  )
}

export default Login