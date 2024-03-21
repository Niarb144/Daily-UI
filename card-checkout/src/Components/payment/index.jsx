import React from 'react'
import './style.css'
import Background from '../assets/background.mp4'
import visa from '../assets/visa.png'
import mastercard from '../assets/mastercard.webp'

function payment() {
  return (
    <div className="payment">
        <div className='video_background'>
            <video src={Background} autoPlay loop muted></video>
        </div>

        <div className="payment_form">
        <h2>Billing Address</h2>
            <div className="shipping">
                <div className="input_data">
                    <div className="names">
                        <input type="text" name="Firstname" id="firstname" placeholder='First Name' />
                        <input type="text" name="Lastname" id="lastname" placeholder='Last Name' />
                    </div>
                    
                    <div className="contacts">
                        <input type="text" name="Address" id="address" placeholder='Address'/>
                        <input type="email" name="Email" id="email" placeholder='Email' />
                        <div className="phone">
                            <select name="code" id="code">
                                <option value="+001">+001</option>
                                <option value="+002">+002</option>
                                <option value="+003">+003</option>
                                <option value="+004">+004</option>
                            </select>
                            <input type="tel" name="Telephone" id="telepphone" placeholder='Mobile Number'/>
                        </div>
                        
                    </div>
                    
                </div>
               
               <div className="region">
               <label htmlFor="Region">Region</label>
                <select name="Region" id="region">
                    <option value="North Sea">North Sea</option>
                    <option value="Western shores">Westeern Shores</option>
                    <option value="Midlands">Midlands</option>
                    <option value="Rjeneviz Plains">Rjeneviz Plains</option>
                </select>
               </div>
                
            </div>

            <div className="card_info">
                <div className="card_number">
                    <label htmlFor="Card number">Card Number</label>
                    <input type="number" name="Card number" id="card_number" placeholder='Card Number'/>

                    <img src={visa} alt="visa" />
                    <img src={mastercard} alt='mastercard' />
                </div>
                
                <div className="expiry_date">
                    <label htmlFor="Expiry_date">Expiry</label>
                    <input type="text" name="Expiry_date" id="expiry_date" placeholder='MM/YY'/>
                </div>
                
                <div className="security_code">
                    <label htmlFor="Security_code">CVS</label>
                    <input type="number" name='Security_code' id='security_code' placeholder='000'/>
                </div>
                
            </div>

            <input type="button" value="Place Order" className='btn'/>
        </div>
        
    </div>
    
  )
}

export default payment