import React from 'react';
import './style.css';
import { NavLink, Redirect } from 'react-router-dom';
const Link = (props) => {
  return <NavLink className={props.className} to={"/" + props.id} ><span>{props.text}</span></NavLink>
}

let togleClass = React.createRef();
let togleClassWraper = React.createRef();

const Header = (props) => {
  let animetedClick = ()=>{
    togleClass.current.classList.toggle('togeleClassSpoiler');
    togleClassWraper.current.classList.toggle('activeClassLogin')
}

  let UserId = () =>{
    if(props.idUser === null)return <Redirect to="/News" />
    else return props.idUser
  }

let mapHeaderLoginData = props.ID.map(data => {
       return <div ref={togleClassWraper} key={data.data.id}  className="loginHeader">
       <span >login: {data.data.login}</span>
       <span>email: {data.data.email}</span>
       </div> 
})

   let CheckLogin = () =>{
   if(props.isAuth === false ){
    return  <a className="block_out" href="/login"><img className="out" src="https://www.freeiconspng.com/uploads/user-login-icon-14.png" alt="" /></a>
}

    if(props.isAuth === true){
      return <>
      <button onClick={props.UnLogin}  className="Unlogin"> <span  className="">Un login</span> </button>
      <div ref={togleClass} onClick={animetedClick} className="spoiler"></div> 
      {mapHeaderLoginData}
      </>
   }}

  return (
    <header className="header">
      <NavLink to="/Home"> <img src="https://www.volynnews.com/public/images/social_logo.png" alt="" /></NavLink>
      <Link className="nav_link  News" id="News" text="News" />
      <Link className="nav_link  Music" id="Music" text="Music" />
      <Link className="nav_link  Settings" id="Settings" text="Settings" />
      <Link className="nav_link  Home" id="Home" text="Home" />
      <Link className="nav_link  Posts" id="Posts" text="Posts" />
      <Link className="nav_link  Posts" id={`UserPage/${UserId( )}`} text="User Page" />
       <CheckLogin/>
    </header>
  )
}


export default Header;