import React from 'react';
import './App.css';
import Login from './login_to_ac/login';
import Reg from './login_to_ac/register';
import { BrowserRouter , Route, NavLink} from 'react-router-dom';
import MainBody from './body/main';
import UserPageContainer from './continer/UserPage_Container'
import PostsContainer from './continer/PostsContainer';



const App = (props) => {
  debugger
  return (
    <BrowserRouter>

    <div className="wraper">
      <Route path = "/register" component={Reg}/>
      <Route path = "/login" component={Login}/>
     
    </div>
   
    <div className="body" >
   
    <Route exact path = "/Home" component={MainBody}/>
    <Route exact path = "/" component={MainBody}/>
    <Route exact path = "/Posts" render={ () => <PostsContainer/> }/>
    <Route exact path = "/UserPage" render={ () => <UserPageContainer /> } />
    
    
    </div>
    </BrowserRouter>
    
    
    
  );
 
}



export default App;
