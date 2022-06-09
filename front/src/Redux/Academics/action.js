import axios from "axios"
export const acadAction=(data)=>{
return {
    type:"ACAD",
    payload: data,
}
}
export const assignmentAction=(data)=>{
    return {
        type:"ASSIGNMENT",
        payload: data,
    }
    }

    export const getAssignment=()=>(dispatch)=>{

        axios.get("https://ken42-project.herokuapp.com/assignment").then((res)=>{
            dispatch(assignmentAction(res.data))
        })
    
    }

export const getAcad=()=>(dispatch)=>{

    axios.get("https://ken42-project.herokuapp.com/academics").then((res)=>{
        dispatch(acadAction(res.data))
    })

}