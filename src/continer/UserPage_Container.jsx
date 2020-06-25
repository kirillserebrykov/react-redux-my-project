import React from 'react';
import Prelouder from '../userPege/prelouder'
import { connect } from 'react-redux'
import { setProfileAPI, UserPage_OUR_Api, setPages, getUsersOur, setTotalUsersCount } from "../stait"
import Users from '../userPege/User'
import withCheckLoginUnlogin from '../Check'

import { withRouter } from "react-router";
import { compose } from 'redux';

class UserPageApi extends React.Component {
    componentDidMount = () => {
        let user_id_url = this.props.match.params.user_id
        this.props.setProfileAPI(user_id_url)
        if (this.props.USER_DATA_OUR.length === 0)  this.props.UserPage_OUR_Api(this.props.CurrentPage, this.props.PageSize)
 }

    onPageChenged = (pagesNum) => {
        this.props.getUsersOur(pagesNum, this.props.PageSize)
    }

    render = () => {
        
        return <>
            {this.props.isFetching ? <Prelouder /> : null}
            <Users USER_DATA={this.props.USER_DATA} USER_DATA_OUR={this.props.USER_DATA_OUR} TotalUserCount={this.props.TotalUserCount}
                 PageSize={this.props.PageSize} CurrentPag={this.props.CurrentPag} onPageChenged={this.onPageChenged} CurrentPage={this.props.CurrentPage} />
        </>
    }
}
let AuthRederectComponent = withCheckLoginUnlogin(UserPageApi)
let mapStatetoProps = (state) => {
debugger
    return {
        USER_DATA: state.USER_DATA_CHANG_REREDUCER.users,
        USER_DATA_OUR: state.USER_DATA_CHANG_OUR_REREDUCER.users,
        PageSize: state.USER_DATA_CHANG_OUR_REREDUCER.PageSize,
        TotalUserCount: state.TOTAL_USERS.TotalUserCount,
        CurrentPage: state.PAGES_SIZE.CurrentPage,
        isFetching: state.IS_FETCHING.isFetching,
      

    }

}




export default compose(
    connect(mapStatetoProps, { setProfileAPI, UserPage_OUR_Api, setPages, getUsersOur, setTotalUsersCount }),
    withRouter,
    withCheckLoginUnlogin,
)(UserPageApi)
