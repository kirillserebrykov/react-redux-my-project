import React from 'react';
import { NavLink } from 'react-router-dom';
import './log.css';
let home = "/home";

 





const  Login = (props) => {
  return (
    <div className = "login_wraper" >
       
      <div className = "login" > 
      <p className = "login_text">Login</p>
      <input placeholder="Nickname" className = "userName login_play" type="text"/>
      <input placeholder="Password" className = "password login_play" type="password"/>
      <NavLink  className="button_sumbit" to = {home}><button    className="sumbit" >sumbit</button></NavLink>
      <NavLink  className="Reg" to="/register"><span>Register</span></NavLink>
      
    </div>
        
     
    </div>
    
  );
}

export default Login;