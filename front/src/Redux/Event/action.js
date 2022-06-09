import axios from "axios"
export const eventAction=(data)=>{
    return {
        type:"EVENT",
        payload: data
    }
}

export const eventUpcomming=(data)=>{
    return {
        type:"EVENTUP",
        payload: data
    }
}
export const eventCompleted=(data)=>{
    return {
        type:"EVENTCOM",
        payload: data
    }
}


export const getEvent=()=>(dispatch)=>{

    axios.get("https://ken42-project.herokuapp.com/event/ongoing").then((res)=>{

    dispatch(eventAction(res.data))

    })

}

export const getEventUp=()=>(dispatch)=>{

    axios.get("https://ken42-project.herokuapp.com/event/upcomming").then((res)=>{

    dispatch(eventUpcomming(res.data))

    })

}

export const getEventCom=()=>(dispatch)=>{

    axios.get("https://ken42-project.herokuapp.com/event/completed").then((res)=>{

    dispatch(eventCompleted(res.data))

    })

}