import React from 'react';
import { NavLink } from 'react-router-dom';
import './log.css';
import { Field, reduxForm  } from 'redux-form'
import { DalApi } from '../DAL/API'
import { Redirect } from 'react-router';
import {required_validator_email,required_validator_password} from './login_validator';
import {Required_Rrors_Email,Required_Rrors_Password} from './login_erors';


let home = "/home";
 
let required_validator_em = required_validator_email
let required_validator_ps = required_validator_password(8)
let LoginForm = (props) =>{

  

  return <form onSubmit={props.handleSubmit} >
    <Field validate={[required_validator_em]} component={Required_Rrors_Email}  placeholder="Email" name="email" className = "userName login_play" />
      <Field validate={[required_validator_ps]}  component={Required_Rrors_Password} placeholder="Password"name={"password"} className = "password login_play" type="password"/>
      <button    className="sumbit" >sumbit</button>
      
  </form>
}
let onSubmit =(formdata)=>{
  debugger
  
  DalApi.PostLoginData(formdata.email,formdata.password).then(response =>{
    
    if(response.data.resultCode === 0){
      return 
    }
    
  })
  
}

let ReduxLoginForm = reduxForm({
  // a unique name for the form
  form: 'Login'
})(LoginForm)

const  Login = (props) => {

  return (
    <div className = "login_wraper" >
       
      <div className = "login" > 
      <p className = "login_text">Login</p>
      <ReduxLoginForm onSubmit={onSubmit} />
      <NavLink  className="Reg" to="/register"><span>Register</span></NavLink>
    </div>
        
     
    </div>
    
  );
}




export default Login;