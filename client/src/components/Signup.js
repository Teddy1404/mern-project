import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
    <>

   { <div className="login-box">
  <h2>Sign Up</h2>
  <form>
    <div className="user-box">
      <input type="text" name="" required=""/>
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="email" name="" required=""/>
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="number" name="" required=""/>
      <label>Phone</label>
    </div>
    <div className="user-box">
      <input type="text" name="" required=""/>
      <label>Work</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required=""/>
      <label>Password</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required=""/>
      <label>Confirm Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div> }
    </>
  )
}

export default Signup
