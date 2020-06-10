import React from 'react';
import Heder from '../body/header';
import './UserPage.css'
import * as axios from 'axios'

class UserPage extends React.Component {
    componentDidMount = () => {
        if (this.props.USER_DATA.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(respose => {
                debugger
                this.props.setUsers([
                    respose.data.items[0]
                ])
            })
        }


    }



    render = () => {

        let mapUserData = this.props.USER_DATA
            .map(DT =>
                <div key={DT.id} className="user_data">
                    <div className="NickUser"><span className="data login_data">Login: {DT.name}</span> </div>
                    <div className="Email_User"> <span className="data email_data">Password: 4332131 {DT.password}</span>  </div>
                    <div className="Password_User"> <span className="data password_data">Email: {DT.name}@gamail.com  {DT.login}</span>  </div>
                </div>
            )
        return (
            <div className="">
                <Heder />
                <div className="wraper_UserPage">
                    <div className="Body_User">
                        <img className="avatar_data" src="https://www.freeiconspng.com/uploads/user-login-icon-14.png" alt="avatar" />
                        {mapUserData}
                        <button onClick={this.GetUSER_DAT} className="buttonGet">Get data</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserPage