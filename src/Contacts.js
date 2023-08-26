import React from 'react'
import { Phone } from './Assets/Images/Phone'
import { Hour } from './Assets/Images/Hour'
import { Location } from './Assets/Images/Location'

export const Contacts = () => {
  return (
    <section className="sec9">
    <div className="cu">Contact Us</div>
    <div className="form">
      <form className="form">
    <input type="text" placeholder="Enter your Name" className="name"/>
    <input type="email" placeholder="Enter a valid email address" className="email"/>
    <input type="submit" value="SUBMIT" id="Submit" />
    </form>
    </div>
    <div className="contacts">
    <div className="call"> 
    <div className="ikon">
    <Phone width={'25px'} height={'25px'} fill={'#ffffff'}/>
    <div className="title"> CALL US</div>
    </div>
  <p className="cel"> (+355) 34 394 394 <br></br>(+355) 24 295 463</p>
 
  </div>
  <div className="call"> 
  <div className="ikon">
   <Location width={'25px'} height={'25px'} fill={'#ffffff'}/>
    <div className="title"> LOCATION</div>
    </div>
  <p> 121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
  </div>

  <div className="call"> 
  <div className="ikon">
  <Hour width={'25px'} height={'25px'} fill={'#ffffff'}/>
    <div className="title"> HOURS</div>
    </div>
  <p> Mon – Fri …… 11 am – 8 pm, Sat, Sun  …… 6 am – 8 pm</p>
  </div>


</div>

</section>
  )
}
