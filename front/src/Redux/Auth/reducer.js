const intitalState = {
    status:JSON.parse(localStorage.getItem("loginData")) || false,
 }
 export const authReducer = (store=intitalState,action)=>{
 
     switch(action.type){
 
         case "AUTH":{
             return {...store,status:action.payload}
         }
    
         default:{
             return store
         }
     }
 }