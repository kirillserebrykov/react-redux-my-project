import React from 'react';
import { NavLink } from 'react-router-dom';

let Reg = (props) =>{
    return(
    <div className = "login_wraper" >
       
      <div className = "login" > 
      <p className = "login_text">Register</p>
      <input placeholder="Nickname" className = "userName login_play" type="text"/>
      <input placeholder="Password" className = "password login_play" type="password"/>
      <input placeholder="Email" className = "Email login_play" type="text"/>
      <NavLink className="button_sumbit" to = "/home"><button className="sumbit" >sumbit</button></NavLink>
      
      <NavLink className="login_link" to="/login"><span>login</span></NavLink>
     
    </div>
        
     
    </div>
    );
}

export default Reg;