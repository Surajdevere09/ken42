const initialState={
    status:false,
}

export const registerReducer = (store=initialState,action) =>{

    switch(action.type){

        case "REGISTER":{

            return {...store, status:action.payload}
        }
        default:{
            return store
        }
    }
}