import React,{useState} from 'react'
import './Login.css';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../Firebaseconfig';
import { NavLink } from 'react-router-dom';

const auth = getAuth(app);



const Login = () => {

const [email,setemail]=useState("");
const [password, setpassword]=useState("");

const createUser=()=>{
    createUserWithEmailAndPassword(auth,email,password).then(value=> alert("Data Submit"));
}

  return (
    <>

<div className='main'>
<div className='content'>


    <h1>Login </h1>


<div className='value'>
<form method='post'>
<p>
    <input placeholder='Email' type="email" onChange={(e)=>setemail(e.target.value)} value={email}></input>
</p>
<p>
    <input placeholder='Password' type ="password" onChange={(e)=>setpassword(e.target.value)} value={password}></input>
</p>

<p>
<NavLink to="/">
    <button onClick={createUser}>Login </button>
    
    </NavLink>

</p>
</form>
</div>

</div>
</div>



    </>
  )
}

export default Login