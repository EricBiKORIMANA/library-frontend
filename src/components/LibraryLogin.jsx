import { useState } from "react";
import LibraryButton from "./LibraryButton";
import LibraryHeader from "./LibraryHeader";
import { useNavigate } from "react-router";


export default function LibraryLogin() {
    const [username, setUsername]= useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [hasAccount, setHasAccount] = useState(true);


    function loginCheck(){
        alert(`You have successfully logged in Using user name which is ${username} with password `);
    }

    function createCheck(){
        alert(`You have created successfully`)
    }

    function navigateBetweenLoginAndSignUp(){
        setHasAccount(!hasAccount)
    }

    const navigate = useNavigate();
    function inputCheck(){
        if(username === "admin" && password === "123456"){
            navigate("/main")
        } else{
            alert("Incorrect username and password")
        }
    }
    return (
        <>
            <title>Login</title>
            { hasAccount ?

            (
            <div className={`flex flex-col justify-center items-start gap-6 px-4 pb-6 mt-6 border border-black rounded-md`}>
                <span className="text-3xl">Sign In</span>
                <div className="grid grid-cols-1">
                    <span>Username: </span>
                    <input type="text" name="username" placeholder="Enter username" onChange={e=>setUsername(e.target.value)}  className="p-0.5 rounded-md px-2 border border-black" />
                </div>
                <div className="grid grid-cols-1">
                    <span>Passwod: </span>
                    <input type="password" name="password" onChange={e=>setPassword(e.target.value)} className="p-0.5 rounded-md px-2 border border-black" />
                </div>
                <div className="flex flex-col items-start whitespace-nowrap gap-3">
                    <LibraryButton buttonLabel={'Login'} buttonAction={inputCheck} />
                    <LibraryButton buttonAction={navigateBetweenLoginAndSignUp}  buttonLabel={`Don't you have an account `} />
                </div>
            </div>
            )
            :
            (
            <div className={`flex flex-col justify-center items-start gap-6 px-4 pb-6 mt-6 border border-black rounded-md`}>
                <span className="text-3xl">Create Account</span>
                <div className="grid grid-cols-1">
                    <span>Username: </span>
                    <input type="text" name="username" placeholder="Enter username" onChange={e=>setUsername(e.target.value)}  className="p-0.5 rounded-md px-2 border border-black" />
                </div>
                <div className="grid grid-cols-1">
                    <span>Passwod: </span>
                    <input type="password" name="password" placeholder="******" onChange={e=>setPassword(e.target.value)} className="p-0.5 rounded-md px-2 border border-black" />
                </div>
                <div className="grid grid-cols-1">
                    <span>email: </span>
                    <input type="email" name="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)}  className="p-0.5 rounded-md px-2 border border-black" />
                </div>
                <div className="flex flex-col items-start whitespace-nowrap gap-3">
                    <LibraryButton buttonLabel={'Create Account'} buttonAction={createCheck} />
                    <LibraryButton buttonAction={navigateBetweenLoginAndSignUp}  buttonLabel={`Already have an account`} />
                </div>
            </div>
            )
            }
        </>
    )
}
