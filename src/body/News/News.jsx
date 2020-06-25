import React from 'react';
import './NewsStyle.css';
import HederContainer from '../../continer/HeaderContainer';
let News = (props) =>{
   
   let map = props.NewsDataContainer.map(el =>{
   return(
       <a key={el.id} className="BlockNews" href={el.url}>
       <img src={el.urlToImage} alt=""/>
        <span className="title textNews">{el.title}</span>
        <p className="content textNews">{el.content}</p>
        <span className="content textNews">{el.author}</span>

        </a>
   )
   })
    debugger
    return (
        <>
        <HederContainer/> 
        <div className="wraperNews">
        <div className="NewsContainer">
        <div className="newsContainer">
        {map}
        </div>
        </div>
        </div>
        </>
     )
}
export default News