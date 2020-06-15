import React from 'react';
import {connect} from 'react-redux'
import {loginData} from "../stait"
import Header  from '../body/header'
import * as axios from 'axios'

class HeaderApi extends React.Component {
    componentDidMount = () => {
       
            axios.get("https://social-network.samuraijs.com/api/1.0/auth/me",{
                withCredentials:true
            }).then(respose => {
                this.props.loginData([respose.data])
                console.log(respose.data)
            })
           

}
    render= () => {
        return <Header {...this.props}/>
    }

    
}

let mapStatetoProps = (state) =>{
    
    return {
        haderData:state.HADER

    }      

   }
   
   
   let UserPegeContainer = connect(mapStatetoProps,{loginData})(HeaderApi);
   export default UserPegeContainer