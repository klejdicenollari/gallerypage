import './App.scss';
import { Link, Route,Routes } from "react-router-dom";
import { HomePage } from './HomePage';
import { Contacts } from './Contacts';
import { Barmeny } from './Assets/Images/Barmeny';
import { Drawer } from 'antd';
import { useState } from 'react';




function App() {

  const [open, setOpen] = useState(false);
  
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  return (
    <div className="App">
      <header>
    <p>Punoi : Klejdi Cenollari</p>
    
   <div className="icon" onClick={showDrawer}><Barmeny width={'30px'}  height={'30px'} fill={'#111111'}/></div> 
</header>
<Drawer className='custom' title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

      

<Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/contact" element={<Contacts />}/>
</Routes>

<footer className="footer">
      <a href="#" className="link">Template</a> <p>created by</p> <a href="#" className="link"> Klejdi Cenollari </a>
      </footer>

    </div>
  );
}

export default App;
