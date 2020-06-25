import React from 'react';
import Header from '../body/header';
import './posts.css'
import { Redirect } from 'react-router';
import HederContainer from '../continer/HeaderContainer';




let text_post = React.createRef();
let id = React.createRef();
class Posts extends React.Component {
    stait = {
    typing :"1"
    }
    addmesege = () => {
        let text = text_post.current.value;
        let user = id.current.value;
        this.props.addmess(text, user)
    }

    Change_text = (e) => {
        this.setState({
            typing :12
        })
        
    }
    Change_user = () => {
        let text = id.current.value;
        this.props.onChange_user(text)
    }
    mass_map = this.props.PostsPage.Mess.map((el) => <div className="wrapermess"><div
        className="mess">  <img className="avatar" src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" alt="" /> {el.id} : {el.content} </div></div>
    );

    render() {



        return (
            <div>
                <HederContainer/> 
                <div className="wraper__posts">
                    <div className="content__posts">
                        <h1>message </h1>
                        <div><div scroll="yes" className="wraper_mess">{this.mass_map} </div> </div>
                    </div>

                    <div className="addPost">
                        <input id="mees" onChange={this.Change_text} ref={text_post} value={this.stait.typing} placeholder="write a message!" className="text_post" type="text" />
                        <input onChange={this.Change_user} value={this.stait.typing} ref={id} placeholder="enter nickname!" className="userNick" type="text" />
                        <button onClick={this.addmesege} >Add</button>
                        <button className="clear" >clear</button>
                    </div>
                </div>

            </div>
        );
    }
}






export default Posts;