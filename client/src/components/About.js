import React from 'react'
import './About.css'
const About = () => {
  return (
   <>
<div className="container">
 <form method=''>
  <div className="row">
    <div className="col-md-4 p-2 text-center mb-4 mt-4">
<h5>Aryan</h5>
<h6>web developer</h6>

    </div>
    <div className="col-md-6 p-2  text-start">
<div className="row mb-4 mt-4">
  <div className="col-md-6">
    <label>User Id</label>
  </div>
  <div className="col-md-6">
  <p>78778768667868</p>
  </div>
</div>

<div className="row mt-4">
  <div className="col-md-6">
    <label>Name</label>
  </div>
  <div className="col-md-6">
  <p>Aryan</p>
  </div>
</div>

<div className="row mt-4">
  <div className="col-md-6">
    <label>email</label>
  </div>
  <div className="col-md-6">
  <p>78778768667868</p>
  </div>
</div>

<div className="row mt-4">
  <div className="col-md-6">
    <label>Phone</label>
  </div>
  <div className="col-md-6">
  <p>78778768667868</p>
  </div>
</div>

<div className="row mt-4">
  <div className="col-md-6">
    <label>Profession</label>
  </div>
  <div className="col-md-6">
  <p>78778768667868</p>
  </div>
</div>
    </div>
    <div className="col-md-2 mb-4 mt-4 p-2">
      <input type='submit' className='profile-edit' name='btnaddmore' value="edit profile"></input>
    </div>
  </div>
 </form>
</div>


   </>
  )
}

export default About
