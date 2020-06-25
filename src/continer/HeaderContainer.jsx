import React from 'react';
import {connect} from 'react-redux'
import {getMeLogin} from "../stait"
import Header  from '../body/header'


class HeaderApi extends React.Component {
    
    componentDidMount = () => {
       
        this.props.getMeLogin()
           

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
   
   
   let UserPegeContainer = connect(mapStatetoProps,{getMeLogin})(HeaderApi);
   export default UserPegeContainer