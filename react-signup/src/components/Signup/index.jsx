import React from 'react'
import './style.css'

function signup() {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="names">
            <input type="text" placeholder='Firstname' required/>
            <input type="text" placeholder='Lastname' required/>
            <input type='email' placeholder='Email' required/>
          </div>

          <div className="gender">
            <div className="male">
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="male"/>
            </div>

            <div className="female">
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="female"/>
            </div>
          </div>

          <div className="bike_category">
            <label htmlFor="category">Bike Category</label>
            <select name="category" id="category">
              <option value="Default">Default</option>
              <option value="Cross Country">Cross Country</option>
              <option value="Trail">Trail</option>
              <option value="Enduro">Enduro</option>
            </select>
          </div>

            <div className="terms">
              <input type="checkbox" name="terms" id="" />
              <label htmlFor="checkbox"><a href="\">Terms and Conditions</a></label>
            </div>
            
        </div>

        <input type="submit" value="Join" className='btn'/>
    </div>
  )
}

export default signup
