import React from 'react'

const Contact = () => {
  return (
    <div className='container col-sm-12 col-md-8 col-lg-6' id='contact'>
        <h1 className=" my-5 why-head text-center">Contact Us</h1>
      <form className='pb-5'>
  <div className="mb-3">
    <label className="form-label">Enter Your Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3 row">
    <div className=' col-sm-12 col-lg-6'>
    <label  className="form-label">Select Your Course</label>
    <select className="form-select" aria-label="Default select example">
        <option value="english">English Training</option>
        <option value="industry">Industry Training</option>
        <option value="corporate">Corporate Training</option>
    </select>
    </div>
    <div className=' col-sm-12 col-lg-6'>
        <label  className="form-label">Enter Your Number</label>
        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Contact
