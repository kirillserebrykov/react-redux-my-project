import React from 'react';
import Prelouder from '../userPege/prelouder'
import {connect} from 'react-redux'
import {setProfile,setUsersOur,setPages,toggelIsFetching,setTotalUsersCount} from "../stait"
import Users  from '../userPege/User'
import * as axios from 'axios'
import { withRouter } from "react-router";

class UserPageApi extends React.Component {
    componentDidMount = () => {
            
            let user_id_url = this.props.match.params.user_id
            this.props.toggelIsFetching(true)
            
                axios.get("https://social-network.samuraijs.com/api/1.0/profile/"+user_id_url).then(respose => {
                    this.props.setProfile([respose.data])
                    this.props.toggelIsFetching(false)
                })
            
            
            
        
        if (this.props.USER_DATA_OUR.length === 0) {
            this.props.toggelIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage}&count=${this.props.PageSize}`).then(respose => {
                
                this.props.setUsersOur([
                    respose.data.items
                ])
                this.props.setTotalUsersCount([respose.data.totalCount])
                this.props.toggelIsFetching(false)
            })
        }

    }






    onPageChenged = (pagesNum)  =>{
       this.props.setPages(pagesNum)
       this.props.toggelIsFetching(true)
       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagesNum}&count=${this.props.PageSize}`).then(respose => {
        this.props.setUsersOur([
            respose.data.items
           
        ])
        this.props.toggelIsFetching(false)
    })
    }

    render = () => { 
        return <>
                {this.props.isFetching ? <Prelouder/> : null}
            <Users USER_DATA={this.props.USER_DATA} USER_DATA_OUR={this.props.USER_DATA_OUR}  TotalUserCount={this.props.TotalUserCount} 
                   PageSize = {this.props.PageSize} CurrentPag={this.props.CurrentPag} onPageChenged={this.onPageChenged} CurrentPage={this.props.CurrentPage} />
        </>
    }
}
let mapStatetoProps = (state) =>{

    return {
        USER_DATA:state.USER_DATA_CHANG_REREDUCER.users,
        USER_DATA_OUR:state.USER_DATA_CHANG_OUR_REREDUCER.users,
        PageSize : state.USER_DATA_CHANG_OUR_REREDUCER.PageSize,
        TotalUserCount:state.TOTAL_USERS.TotalUserCount,
        CurrentPage:state.PAGES_SIZE.CurrentPage,
        isFetching:state.IS_FETCHING.isFetching

    }      

   }
   let URL_DATA = withRouter(UserPageApi)
   
   let UserPegeContainer = connect(mapStatetoProps,{ setProfile,setUsersOur,setPages,toggelIsFetching,setTotalUsersCount})(URL_DATA);





export default UserPegeContainer