const initialState ={

    rows: [],
    upcomming:[],
    completed:[]
}

export const eventReducer=(store=initialState,action)=>{

    switch(action.type){
        case "EVENT":{
     return {...store, rows:action.payload};
        }
        case "EVENTUP":{
            return {...store, upcomming:action.payload};
        }
        case "EVENTCOM":{
            return {...store,completed:action.payload}
        }
        default:{
            return  store
        }
    }
}