import './App.scss';
import {  Route,Routes } from "react-router-dom";
import { HomePage } from './HomePage';
import { Contacts } from './Contacts';
import { Barmeny } from './Assets/Images/Barmeny';
import { Drawer } from 'antd';
import { useRef, useState } from 'react';




function App() {

  const [open, setOpen] = useState(false);

  const myRefContact = useRef(null)
  const myRefProject = useRef(null)
  
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const navToContact = ( ) => {
    myRefContact.current.scrollIntoView({ behavior: "smooth"  }) 
    setOpen(false)
  }

  const navToProjects = ( ) => {
    myRefProject.current.scrollIntoView({ behavior: "smooth"  }) 
    setOpen(false)
  }


  return (
    <div className="App">
      <header>
    <p>Punoi : Klejdi Cenollari</p>
    
   <div className="icon" onClick={showDrawer}><Barmeny width={'30px'}  height={'30px'} fill={'#111111'}/></div> 
</header>
<Drawer className='custom' title="Explore" placement="right" onClose={onClose} open={open}>
      
        <p className="pr" onClick={navToProjects}><b>Our Projects</b></p>
        
        <p className="pr" onClick={navToContact}><b>Contact US</b></p>
      
      </Drawer>

      

<Routes>
<Route path="/" element={<HomePage myRefContact={myRefContact} myRefProject={myRefProject}/>}/>
<Route path="/contact" element={<Contacts />}/>
</Routes>

<footer className="footer">
  
      <a href="#" className="link">Template</a> <p>created by</p> <a href="https://klejdicenollari.netlify.app/" target="_blank" rel="noopener noreferrer" className="link"> Klejdi Cenollari </a>
      </footer>

    </div>
  );
}

export default App;
