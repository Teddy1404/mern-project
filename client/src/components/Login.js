import React from 'react'
import './Login.css'
const Login = () => {
  return (
   <>
   <div className="login-box">
  <h2>Login</h2>
  <form>
    <div className="user-box">
      <input type="email" name="email" id="email" required=""/>
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="password" name="password" id="password" required=""/>
      <label>Password</label>
    </div>

    <div>
      <input type="submit" name="signin" id="signin" value="Log in" className="button"  />
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    {/* <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a> */}
  </form>
</div>
   </>
  )
}

export default Login
