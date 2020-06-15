import React from 'react';
import Header from '../body/header';
import './posts.css'




let text_post = React.createRef();
let id = React.createRef();
const Posts = (props) => {
  
    let addmesege = () => {
        let text = text_post.current.value;
        let user = id.current.value;
        props.addmess(text,user)
        
       
        
        
    }
 
    let Change_text = () => {
        let text = text_post.current.value;
        props.onChange_text(text)
        
        
       
    }
    let Change_user = () => {
        let text = id.current.value;
        props.onChange_user(text)
       
    }
    window.Posts = props.UserStandart

    let mass_map = props.PostsPage.Mess.map((el) => <div  className="wrapermess"><div 
    className="mess">  <img    className="avatar" src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" alt="" /> {el.id} : {el.content} </div></div>
    );
    
   

    return (
        <div>
            
            <div className="wraper__posts">
                <div className="content__posts">
                    <h1>message </h1>
                    <div><div scroll="yes" className="wraper_mess">{mass_map} </div> </div>
                </div>

                <div className="addPost">
                    <input id="mees" onChange={Change_text} ref={text_post} value={props.MessStandart} placeholder="write a message!" className="text_post" type="text" />
                    <input onChange={Change_user} value={props.UserStandart} ref={id} placeholder="enter nickname!" className="userNick" type="text" />
                    <button onClick={addmesege} >Add</button>
                    <button className="clear" >clear</button>
                </div>
            </div>

        </div>
    );

}






export default Posts;