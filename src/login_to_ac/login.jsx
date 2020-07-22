import React from 'react';
import { NavLink } from 'react-router-dom';
import './log.css';
import { Field, reduxForm } from 'redux-form'
import styles from './log.module.css';
import { Redirect } from 'react-router';
import { required_validator_email, required_validator_password } from './login_validator';
import { Required_Rrors_Email, Required_Rrors_Password } from './login_erors';
import { connect } from 'react-redux'
import { Login } from '../stait';
let home = "/home";

let required_validator_em = required_validator_email
let required_validator_ps = required_validator_password(8)
let LoginForm = (props) => {


  return <>
  <form onSubmit={props.handleSubmit} >
    <Field validate={[required_validator_em]} component={Required_Rrors_Email} placeholder="Email" name="email" className="userName login_play" />
    <Field validate={[required_validator_ps]} component={Required_Rrors_Password} placeholder="Password" name={"password"} className="password login_play" type="password" />
    <Field component="input" name={"RememperMe"} className="RememperMe" type="checkbox" /> <span className="RememperMeText">RememperMe</span>

     <button form  className="sumbit  " >sumbit</button>
    {props.error && <div className={styles.SummerError}>{props.error}</div>}
  </form>
 
  </>
}

let ReduxLoginForm = reduxForm({
  // a unique name for the form
  form: 'Login'
})(LoginForm)

const LoginJSX = (props) => {

  let onSubmit = (formdata) => {

    props.Login(formdata.email, formdata.password, formdata.RememperMe)

  }
  debugger

 let mapMessID = props.ID.map(item =>{

    if (item.resultCode === 0) return <Redirect to={`/News`} />
 })

  return (
    <div className="login_wraper" >
      
      <div className="login" >
        <p className="login_text">Login</p>
        <ReduxLoginForm onSubmit={onSubmit} />
        <NavLink className="Reg" to="/register"><span>Register</span></NavLink>
      </div>
     
      {mapMessID}
       
    </div>

  );
}

let mapStatetoProps = (state) => {
  debugger
  return {
    isAuth: state.HADER.isAuth,
    ID: state.HADER.data_login,
    idUser: state.HADER.idUser,
    isFetching: state.IS_FETCHING.isFetching
  }
}


export default connect(mapStatetoProps, { Login })(LoginJSX);