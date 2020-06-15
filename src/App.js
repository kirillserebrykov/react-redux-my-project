import React from 'react';
import './App.css';
import Login from './login_to_ac/login';
import Reg from './login_to_ac/register';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import MainBody from './body/main';
import UserPageContainer from './continer/UserPage_Container'
import PostsContainer from './continer/PostsContainer';
import HederContainer from './continer/HeaderContainer';


const App = (props) => {
 
  return (
    <BrowserRouter>

      <div className="wraper">
        <Route path="/register" component={Reg} />
        <Route path="/login" component={Login} />

      </div>
      <HederContainer/>
      <div className="body" >

        <Route exact path="/Home" component={MainBody} />
        <Route exact path="/" component={MainBody} />
        <Route exact path="/Posts" render={() => <PostsContainer />} />
        <Route  path="/UserPage/:user_id?" render={() => <UserPageContainer />} />


      </div>
    </BrowserRouter>



  );

}



export default App;
