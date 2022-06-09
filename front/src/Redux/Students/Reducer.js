const initialState ={
    rows:[],
    totalStudents:0
}
export const studentReducer=(store=initialState,action)=>{
    switch(action.type){
   
        case "GETDATA":{
            return {...store, rows:action.payload}
        }
        case "TOTAL":{
            return {...store,totalStudents:action.payload}
        }
        default:{
            return store
        }
    }
}