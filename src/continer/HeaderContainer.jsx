import React from 'react';
import { connect } from 'react-redux'
import {UnLogin } from "../stait"
import Header from '../body/header'
import {MassDataLogin,isAuthSeleted,idUserSeleted} from './selectors/SelectorHeader'
const HeaderApi = (props) =>{
        return <Header {...props} />
}
let mapStatetoProps = (state) => {
    return {
        ID: MassDataLogin(state),
        isAuth:isAuthSeleted(state),
        idUser:idUserSeleted(state)
    }
}


let UserPegeContainer = connect(mapStatetoProps, {UnLogin})(HeaderApi);
export default UserPegeContainer