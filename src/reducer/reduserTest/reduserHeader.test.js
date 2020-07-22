import React from 'react'
import ReactDOM from 'react-dom';
import {News_Data_CHANG_REDUCER} from '../reduserNews';
import {loginData} from '../../stait';

it('News item test', () => {
   let action = loginData([],false)
   let initialState = {
    news: [],
    isFetching:true,
}

 let newState = News_Data_CHANG_REDUCER(initialState,action)
    expect(newState).toBe(initialState)
});

