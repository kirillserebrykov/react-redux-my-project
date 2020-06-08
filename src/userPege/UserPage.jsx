import React from 'react';
import Heder from '../body/header';
import './UserPage.css'

const UserPage = (props) => {
    debugger
    return (
        <div className="">
            <Heder />
            <div className="wraper_UserPage">
                <div className="Body_User">
                    
                    <img className="avatar_data" src="https://www.freeiconspng.com/uploads/user-login-icon-14.png" alt="avatar" />
                    <div className="user_data">
                        <div className="NickUser"><span className="data login_data">{props.login}</span> </div>
                        <div className="Email_User"> <span className="data email_data">{props.email}</span>  </div>
                        <div className="Password_User"> <span className="data password_data">{props.password}</span>  </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default UserPage