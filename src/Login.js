import { useState } from "react";
import './index.css';

function Login(){
    const [email,setEmail]= useState();
    const [password,setPassword] = useState();

    const updateEmail=(event)=>{
        setEmail(event.target.value);
    }
    
    const updatePassword=(event)=>{
        setPassword(event.target.value);
    }

    const loginFormHandler=async (event)=>{
        event.preventDefault();
        const data=await fetch("http://localhost:8080/sign-up",{
            mode: "cors",
            method: "POST",
            headers: {
                "userEmail": "dasd",
                "password":"asa"
              }
        });
        const jsonData=await data.json();
        console.log(jsonData);
    }

    return (
        <div>

        <div className="login-modal">
            <p>Enter your login credential or Enter your new password to enter!</p>
            <form>
                    <label>Enter your Email: 
                    <input type="text" value={email} onChange={updateEmail}></input> 
                    </label>
                    <br/>
                    <label>Enter your password: 
                    <input type="text" value={password} onChange={updatePassword}></input>
                    </label>
                    <br/>
                    <input type="submit" onClick={event=>{loginFormHandler(event)}}></input>
            </form>
        </div>

        </div>
    );
}

export default Login;