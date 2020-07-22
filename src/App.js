import React from 'react';
import './App.css';
import Login from './login_to_ac/login';
import Reg from './login_to_ac/register';
import { BrowserRouter, Route} from 'react-router-dom';
import MainBody from './body/main';
import PostsContainer from './continer/PostsContainer';
import { initialized } from "./reducer/reduserApp"


import { connect } from 'react-redux'
import Prelouder from './userPege/prelouder';
import store from './store'
import { Provider  } from 'react-redux'
const NewsContainer = React.lazy(() => import('./continer/NewsContainer'));
const UserPageContainer = React.lazy(() => import('./continer/UserPage_Container'));
let Suspense = (Component) =>{
  return<React.Suspense fallback={<Prelouder/>}><Component/></React.Suspense>
}

 class App extends React.Component{
  componentDidMount = () => {
    this.props.initialized()
}

   render(){
    debugger
     if(!this.props.initialize) return <Prelouder/>
   
    return (
     <>
        <div className="wraper">
          <Route path="/register" component={Reg} />
          <Route path="/login" component={Login} />
        </div>
        <div className="body" >
          <Route exact path="/Home" component={MainBody} />
          <Route exact path="/" component={MainBody} />
          <Route exact path="/Posts" render={() => <PostsContainer />} />
          <Route  path="/UserPage/:user_id?" render={() => Suspense(UserPageContainer)} />
          <Route  path="/News" render={() => Suspense(NewsContainer) } />
        </div>
        </>
    );
   }
  
}
let mapStatetoProps = (state) => {
  debugger
  return {
    initialize: state.AppSettings.initialized,
    
  }
}

let AppContainer = connect(mapStatetoProps, { initialized })(App);

 let MyApp = (props) =>{
  return <BrowserRouter>
  <Provider store={store} >
    <AppContainer />
  </Provider>
  </BrowserRouter>
}
export default MyApp