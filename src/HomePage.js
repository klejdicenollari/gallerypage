import React from 'react'
import { Barmeny } from './Assets/Images/Barmeny';
import { Phone } from './Assets/Images/Phone';
import { Location } from './Assets/Images/Location';
import {Hour} from './Assets/Images/Hour';
import { im1 } from "./Assets/Images";
import { im2} from "./Assets/Images";
import { im3 } from "./Assets/Images";
import { im4} from "./Assets/Images";
import { im5} from "./Assets/Images";
import { im6} from "./Assets/Images";
import { im7} from "./Assets/Images";
import { im8} from "./Assets/Images";
import { im9} from "./Assets/Images";

import { pro1 } from "./Assets/Images";
import { pro2} from "./Assets/Images";
import { pro3} from "./Assets/Images";
import { pro4} from "./Assets/Images";
import { pro5} from "./Assets/Images";
import { pro6} from "./Assets/Images";
import { pro7} from "./Assets/Images";
import { pro8} from "./Assets/Images";

import { planimetri} from "./Assets/Images";
import { Link, useNavigate } from 'react-router-dom';


export const HomePage = ({myRefContact , myRefProject}) => {

  
  const scrollDiv = () => myRefContact.current.scrollIntoView({ behavior: "smooth"  }) 
  return (
    <div>        <section className="sec1">
    <div className="stil1">
        <div className="atp">
        <h3>Architecture & Town Planning</h3>
        <p className="p">Sample text. Click to select the text box. Click again or double click to start editing the text. Condim entumisirs mattis pellentesque id nibh tortor id aliquet.</p>

<button onClick={scrollDiv}>Contact Us</button>

</div>
        </div>
</section>
<section className="sec2" ref={myRefProject}>
    <div className="stil2">
        <h2>Our Projects</h2>
        <p>Our projects stem from a commitment to the transformative role of ideas and their power to establish new realities that engage this world.</p>
        <div className="fgb">
            <div className="kutiblu">
                <div className="galeria">
                <img className= "im" src={im1} alt="test"/>
                <img className= "im" src={im2} alt="test"/>
                <img className= "im" src={im3} alt="test"/>
                <img className= "im" src={im4} alt="test"/>
                <img className= "im" src={im5} alt="test"/>
                <img className= "im" src={im6} alt="test"/>
                <img className= "im" src={im7} alt="test"/>
                <img className= "im" src={im8} alt="test"/>
                <img className= "im" src={im9} alt="test"/>
                

                </div>
            </div>
            <button onClick={scrollDiv}>Contact Us</button>
        </div>
    </div>
</section>


<section className="sec3">
  <div className="titulli">900 residential projects</div>
  <div className="prsh">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
 
 <div className="projektet">

<div className="pr">
<img className= "pro" src={pro1} alt="test"/>
<div className="work">22 Bishopsgate, London</div>
</div>

<div className="pr">
<img className= "pro" src={pro2} alt="test"/>
<div className="work">One Bishopsgate Plaza</div>
</div>

<div className="pr">
<img className= "pro" src={pro3} alt="test"/>
<div className="work">Arbor, London, UK</div>
</div>

<div className="pr">
<img className= "pro" src={pro4} alt="test"/>
<div className="work">Bankside Yards</div>
</div>

<div className="pr">
<img className= "pro" src={pro5} alt="test"/>
<div className="work">4 Cannon Street</div>
</div>

<div className="pr">
<img className= "pro" src={pro6} alt="test"/>
<div className="work">Westferry Printworks</div>
</div>

<div className="pr">
<img className= "pro" src={pro7} alt="test"/>
<div className="work">Park Modern, London</div>
</div>

<div className="pr">
<img className= "pro" src={pro8} alt="test"/>
<div className="work">Park Nova, Singapore</div>
</div>

</div>
  </section>
  <section className="sec4">
    </section>

    <section className="sec5">
    <img className= "planimetri" src={planimetri} alt="test"/>
    </section>

<section className="sec6">
<div className="stil2">
        <div className="atp">
        <h3>We provide architects services in London</h3>
        <p className="p">Egestas purus viverra accumsan in nisl nisi. Enim nec dui nunc mattis enim ut. Consequat interdum varius sit amet mattis vulputate enim nulla. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet.</p>
<button>Read More</button>
</div>
        </div>
</section>

<section className="sec7">
    </section>
    
    <section className="sec8">
      <div className="awards">
    <div className="h2">Awards</div>
        <div className="p">These core values define who we are and the work we do.</div>
        </div>
   <div className="years">
<div className="vit"> 
<h4>2022</h4>
<p>RIBA Awards 2022 - Shortlisted <br></br><br></br>
Archdaily - Building of the Year / Shortlisted<br></br><br></br>
Brick Development Association Awards - Architects’ Choice / Winner<br></br><br></br>
Brick Development Association Awards - Craftsmanship / Shortlisted<br></br><br></br>
Dezeen Awards - Rural House / Longlisted</p><br></br>
<p></p>
</div>
<div className="vit"> 
<h4>2019</h4>
<p>Sunday Times Awards - Architect of the Year / Winner<br></br><br></br>
Sunday Times Awards - Small Development / Winner<br></br><br></br>
Sunday Times Awards - Large House / Commendation<br></br><br></br>
Architizer A+ Awards - Architecture + Brick / Winner<br></br><br></br>
Architects Journal Specification Awards - Winner<br></br><br></br>
Architects Journal Awards - Manser Medal / Shortlisted</p>
</div>
<div className="vit"> 
<h4>2018</h4>
<p>RIBA Awards 2020 - Shortlisted<br></br><br></br>
London Design Awards - Silver Medal / Winner<br></br><br></br>
BD Young Architect of the Year Award / Shortlisted<br></br><br></br>
New London Architecture Awards - Conserving / Shortlisted</p>
</div>
<div className="vit"> 
<h4>2017</h4>
<p>British Construction Industry Awards - Housing Project / Shortlisted<br></br><br></br>
New London Architecture Awards - Best Homes / Shortlisted<br></br><br></br>
What House? Awards / Best Exterior / Bronze Medal<br></br><br></br>
Brick Development Association Awards - Small development / Winner</p>
</div>
<div className="vit"> 
<h4>2016</h4>
<p>Sunday Times Awards - Large House / Commendation<br></br><br></br>
Architizer A+ Awards - Architecture + Brick / Winner<br></br><br></br>
Architects Journal Specification Awards - Winner<br></br><br></br>
Architects Journal Awards - Manser Medal / Shortlisted</p>
</div>
<div className="vit"> 
<h4>2015</h4>
<p>FX Awards - Breakthrough Talent of the Year / Winner<br></br><br></br>
London Design Awards - Silver Medal / Winner<br></br><br></br>
Sunday Times Awards - Best Home / Winner<br></br><br></br>
Sunday Times Awards - Manser Medal / Shortlisted</p>
</div>


   </div>
   <button>Read More</button>
    </section>


    <section className="sec9" ref={myRefContact} id='contact'>
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

</section></div>
  )
}
