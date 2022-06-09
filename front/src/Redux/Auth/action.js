import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const auth= (data)=>{

    return {
        type:"AUTH",
        payload:data
    }
}



export const getSign=(signinData,navigate)=>async(dispatch)=>{

    let response = await fetch("https://ken42-project.herokuapp.com/login",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(signinData)
    })
    let data = await response.json()

 dispatch(auth(true))
 
if(data.token){
    localStorage.setItem("user",JSON.stringify(data))
    localStorage.setItem("loginData",JSON.stringify(true))
const notify = () => toast("Congrats Registration Successful");
notify()
setTimeout(() => {
    navigate("/");
  }, 3000);

}
else{

const notify = () => toast("Invalid username password");
notify()
}
    
 }