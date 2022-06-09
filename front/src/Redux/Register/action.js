
export const register = (data)=>{
    return {
        type: 'REGISTER',
        payload:data
    }
}


export const  getSignup=(signIn,navigate,toast)=> async (dispatch)=>{
    let response = await fetch(`https://ken42-project.herokuapp.com/register`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signIn)
    })
    let data = await response.json()
 dispatch(register(true));
    //console.log("registered",data)
    if(data.token){
     const notify = () => toast("Congrats Registration Successful");
     notify()
      setTimeout(()=>{
       navigate("/signin")
      },3000)
   
     }
     else{
        
         const notify = () => toast("User Already exists try another mail");
         notify()
     }
  }