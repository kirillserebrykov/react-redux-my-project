import React,{useEffect} from 'react';
import News from '../body/News/News';
import { withRouter } from 'react-router';
import {connect} from 'react-redux'
import Prelouder from '../userPege/prelouder'
import {NewsDataApi,toggelIsFetching} from "../stait"
const NewsContainerApi = (props) =>{

    useEffect(() => {
       props.NewsDataApi()
    },[props.NewsDataApi]);
    
        return  <>
        {props.isFetching ? <Prelouder/> : null}
    <News NewsDataContainer={props.News_preview}/>
    </>
        
    }

let mapStatetoProps = ({News_Data,IS_FETCHING})=>{
    
    return{
        News_preview:News_Data.news,
        isFetching:IS_FETCHING.isFetching
    }
}
let URL_DATA = withRouter(NewsContainerApi);
let NewsContainer = connect(mapStatetoProps,{NewsDataApi,toggelIsFetching})(URL_DATA);

export default NewsContainer

