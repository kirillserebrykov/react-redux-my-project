import React from 'react';
import News from '../body/News/News';
import { withRouter } from 'react-router';
import {connect} from 'react-redux'

import Prelouder from '../userPege/prelouder'

import {NewsDataApi,toggelIsFetching} from "../stait"
class NewsContainerApi extends React.Component{
    componentDidMount=()=>{
        this.props.NewsDataApi()
    }
    render=()=>{
        return  <>
        {this.props.isFetching ? <Prelouder/> : null}
    <News NewsDataContainer={this.props.News_preview}/>
    </>
        
    }
}
let mapStatetoProps = (state)=>{
    
    return{
        News_preview:state.News_Data.news,
        isFetching:state.IS_FETCHING.isFetching
    }
}
let URL_DATA = withRouter(NewsContainerApi);
let NewsContainer = connect(mapStatetoProps,{NewsDataApi,toggelIsFetching})(URL_DATA);

export default NewsContainer
