import axios from "axios"
export const studentAction = (data)=>{
    return {
        type:"GETDATA",
        payload:data
    }
}
export const studenttotal=(data)=>{
    return {
        type:"TOTAL",
        payload:data
    }
}


export const getStudents = ()=>async(dispatch)=>{

   await  axios.get("https://ken42-project.herokuapp.com/info").then((res)=>{
        console.log(res.data);
        dispatch(studentAction(res.data))
        let total=0;
        for(let i=0; i<res.data.length; i++){
            total+=1
        }
        dispatch(studenttotal(total))
    })

}