import React from 'react'
import './UserPage.css'
import AvaDefult from "../avatarDefult.jpg"

let Users = (props) => {
 
    let next = React.createRef();
    let vk = (DT) =>{
        if(DT.contacts.vk === null) return "Missing"
        else return DT.contacts.vk

    }
    let aboutMe = (DT) =>{
        if(DT.aboutMe === null)return "Missing"
        else  return DT.aboutMe
    }
    debugger
    let mapUserMain = props.USER_DATA
        .map(DT =>
            <div key={DT.userId} className="user_data">
                 <img className="avatar_data" src={DT.photos.large != null ? DT.photos.large : AvaDefult} alt="avatar" />
                <div className="NickUser"><span className="data login_data">Full Name: {DT.fullName}</span> </div>
                <div className="Email_User"> <span className="data email_data">About Me: {aboutMe(DT)}</span>  </div>
                <div className="Password_User"> <span className="data password_data">Contact: {vk(DT)}  </span>  </div>
            </div>
        )

    let mapUserData = props.USER_DATA_OUR
        .map(DT =>
            <div key={DT.id} className="user_web ">
                <a href={"/UserPage/" + DT.id}>
                
                <img className="img_user_web " src={DT.photos.small != null ? DT.photos.small : AvaDefult} alt="" /></a>
                <div className="user_data">
                    <div className="NickUser"><span className="data login_data">Name: {DT.name} </span> </div>
                </div>
               
            </div>
            
        )

    let pagesSize = Math.ceil(props.TotalUserCount / props.PageSize)
    let pages = []


    for (let i = 1; i <= pagesSize; i++) {
        pages.push(i)
    }
    let active = (p) => {
        if (props.CurrentPage === p) {
            return "active"
        }

    }


    let pagesCount = pages.map(p => {
        return <span key={p} onClick={(e) => { props.onPageChenged(p) }} className={active(p)}>{p}</span>

    })
    let left = 0


    let nextfanc = () => {
        left = left - 400
        if (left <= -8100) {

            left = 0


        }
        let t = 'translate(' + left + 'px, ' + 0 + 'px)';

        next.current.style.transform = t
    }
    let backfanc = () => {
        left = left + 500
        if (left >= 0) {
            left = 0
        }
        let t = 'translate(' + left + 'px, ' + 0 + 'px)';

        next.current.style.transform = t
    }

    return (
        <div className="">

            <div className="wraper_UserPage">
                <div className="Body_User">
               
                    {mapUserMain}
                </div>
                <h2>Our users</h2>
                <div className="Our_users">
                    {mapUserData}
                </div>
                <div ref={next} className="navUser">
                    {pagesCount}
                </div>
                <div className="buttonWraper">
                    <button onClick={backfanc} className="next"><span>Back</span></button>
                    <button onClick={nextfanc} className="next"><span>Next</span></button>
                </div>
            </div>
        </div>
    )
}
export default Users 