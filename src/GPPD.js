import React from 'react';
import * as axios from 'axios'

let getData = () =>{
    const promise = axios.get("https://social-network.samuraijs.com/api/1.0/users");    
    return promise.then(response =>{
        debugger
        return response.data.items[0].name
    
    })}
export default getData