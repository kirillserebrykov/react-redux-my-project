import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
const Link = (props) =>{
 return   <NavLink className={props.className} to={"/" + props.id} ><span>{props.text}</span></NavLink>
}
const Header = (props) => {
    return(
       <header className="header">
        <img  src="https://www.volynnews.com/public/images/social_logo.png" alt=""/>
          
        <Link  className= "nav_link  News" id="News" text = "News" />
        <Link  className= "nav_link  Music" id="Music" text = "Music" />
        <Link  className= "nav_link  Settings" id="Settings" text = "Settings" />
        <Link  className= "nav_link  Home" id="Home" text = "Home" />
        <Link  className= "nav_link  Posts" id="Posts" text = "Posts" />
        

         <a className="block_out" href="/login"><img className="out" src="https://www.freeiconspng.com/uploads/user-login-icon-14.png" alt=""/></a>
       </header>
       
       
    )
}


export default Header;