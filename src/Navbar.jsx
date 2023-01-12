import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [show,setshow]=useState(false);
  return (
    <>
    <section className='navbar-bg'>

<nav className="navbar navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand" href="/">NazirPay</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation"
    onClick={()=>{
        setshow(!show)
    }}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className= {`collapse navbar-collapse  ${show ? "show" : ""}`} >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
        
        <li className="nav-item">
       
          <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        
        </li>
        
         <li className="nav-item">
          <NavLink className="nav-link" to="/payment">Payment</NavLink>
        </li> 


              </ul>
      <form className="d-flex" >
        
        <button className="btn  btn-style btn-style-border" type="submit"> Sign Up</button>
        <NavLink to='/login'>
        <button className="btn  btn-style " type="submit">Login in</button>
</NavLink>
      </form>
    </div>
  </div>
</nav>

</section>
    </>
  )
}

export default Navbar