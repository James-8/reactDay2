import React from 'react';
import './App.css';
import NavBar from './NavBar';
import MasterComp from './MasterComp';
import About from './About';
import Contact from './Contact';
function App()
{return(
   <div>
       <NavBar/>
       <MasterComp/>
       <About/>
       <Contact/>
    </div>
)
}
export default App;