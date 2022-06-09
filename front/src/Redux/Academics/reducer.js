const initialState = {
rows:[],
assign:[]
}

export const acadReducer=(store=initialState,action)=>{

switch(action.type){
    case "ACAD":{
        return {...store,rows:action.payload}
    }
    case "ASSIGNMENT":{
        return {...store,assign:action.payload}
    }
    default:{
        return store
    }
}
}