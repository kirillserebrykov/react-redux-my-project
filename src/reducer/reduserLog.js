let initialState ={
    email:"",
    login:"",
    password:""

}

export  const USER_DATA_CHANG_REREDUCER  = (state , action) => {
    let stateCopy ={...state}
    stateCopy.email="dsdadsa@dsadsad.com"
    stateCopy.login="dsdadsa"
    stateCopy.password="123321321"

    return stateCopy
}