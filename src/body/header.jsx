import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
const Link = (props) => {
  return <NavLink className={props.className} to={"/" + props.id} ><span>{props.text}</span></NavLink>
}
let togleClass = React.createRef();
let togleClassWraper = React.createRef();

const Header = (props) => {
  
  let mapHeaderLoginData = props.haderData.data_login.map(data => {
   return<div ref={togleClassWraper} key={data.data.id}  className="loginHeader">
       <span >login: {data.data.login}</span>
       <span>email: {data.data.email}</span>
       </div> 
  })
  let mapCheck = props.haderData.data_login.map(data => {
     if(data.resultCode === 1){
       return  <a className="block_out" href="/login"><img className="out" src="https://www.freeiconspng.com/uploads/user-login-icon-14.png" alt="" /></a>
        
     }
     else if(data.resultCode !== 0){
      togleClass.current.classList.toggle('hedden')
     }
   })
  let animetedClick = ()=>{
    togleClass.current.classList.toggle('togeleClassSpoiler');
    togleClassWraper.current.classList.toggle('activeClassLogin')
  }
  return (
    <header className="header">
      <img src="https://www.volynnews.com/public/images/social_logo.png" alt="" />

      <Link className="nav_link  News" id="News" text="News" />
      <Link className="nav_link  Music" id="Music" text="Music" />
      <Link className="nav_link  Settings" id="Settings" text="Settings" />
      <Link className="nav_link  Home" id="Home" text="Home" />
      <Link className="nav_link  Posts" id="Posts" text="Posts" />
      <Link className="nav_link  Posts" id="UserPage" text="User Page" />

       {mapCheck}
       <div ref={togleClass} onClick={animetedClick} className="spoiler"></div> 
          {mapHeaderLoginData}
           
    </header>


  )
}


export default Header;