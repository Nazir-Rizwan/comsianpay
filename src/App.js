
import './App.css';
import Contact from './Page/Contact';
import About from './Page/About';
import Error from './Error';
import Home from './Home';
import { Route,Routes } from 'react-router-dom';
import Service from "./Page/Service";

import Login from './Page/Login' 
import Chatbot from './Chatbot';
import Stripepay from './Stripepay';
function App() {


  return (
    <>

<Chatbot/>
    
 <Routes>
<Route exact path='/'  element={<Home/>}/>
<Route  path='/service'  element = {<Service/>}/> 
<Route  path='/about'  element = {<About/>}/> 
<Route  path='/contact'  element = {<Contact/>}/>
<Route  path='/login'   element={<Login />}/>
<Route path='/payment' element={<Stripepay/>}></Route>
<Route   path='*' element = {<Error/>}/>
  
   </Routes>    
       </>
  );
}

export default App;


