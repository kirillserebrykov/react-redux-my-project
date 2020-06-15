import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
const Link = (props) => {
  return <NavLink className={props.className} to={"/" + props.id} ><span>{props.text}</span></NavLink>
}
const Header = (props) => {

  let togeleClass = React.createRef();
  let togeleClassSpoiler = React.createRef();
  let togeleClassFunc = () =>{
    togeleClass.current.classList.toggle("activeClassLogin")
    togeleClassSpoiler.current.classList.toggle("togeleClassSpoiler")
  }
  let check = (LD) =>{
    if(LD.resultCode === 1){
      return "You are not authorized"
    }
  }
  let MapMassLogins= props.haderData.data_login.map(LD =>{
debugger
    
    
     return <div key={LD.data} ref={togeleClass}  className="loginHeader">
      
       <span >Login: {LD.data.login }{check(LD)}</span>
       <span>Email: {LD.data.email}{check(LD)}</span>
     </div>
  })
  debugger
  return (
    <header className="header">
      <img src="https://www.volynnews.com/public/images/social_logo.png" alt="" />

      <Link className="nav_link  News" id="News" text="News" />
      <Link className="nav_link  Music" id="Music" text="Music" />
      <Link className="nav_link  Settings" id="Settings" text="Settings" />
      <Link className="nav_link  Home" id="Home" text="Home" />
      <Link className="nav_link  Posts" id="Posts" text="Posts" />
      <Link className="nav_link  Posts" id="UserPage" text="UserPage" />

      
      <a className="block_out" href="/login"><img className="out" src="https://www.freeiconspng.com/uploads/user-login-icon-14.png" alt="" /></a>
      <div className="spoiler" ref={togeleClassSpoiler} onClick={togeleClassFunc} ></div>
      {MapMassLogins}
    </header>
    

  )
}


export default Header;