import React, { useContext, useEffect, useRef, useState } from 'react';
import { BiHide } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import axios from 'axios';
import { initializeApp } from "firebase/app"
// import firebase from 'firebase/app';
//  import firebase from 'firebase/app';
// // import PhoneAuth  from '../Component/PhoneAuth';
// // import { onAuthStateChanged } from 'firebase/auth';
//  import 'firebase/auth';
import   firebase from 'firebase/compat/app';
//  import app from '../firebase/firebase.config';
// import 'firebase/compat/auth';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import PhoneAuth from '../Component/PhoneAuth';
import { onAuthStateChanged } from 'firebase/auth';


const Login = () => { 
    const firebaseConfig = {
        apiKey: "AIzaSyAu5gWzlKVkOKSVU9u8f5YQdvABkg8hVQE",
        authDomain: "workzen-9a8db.firebaseapp.com",
        projectId: "workzen-9a8db",
        storageBucket: "workzen-9a8db.appspot.com",
        messagingSenderId: "1010309156968",
        appId: "1:1010309156968:web:5dfc9fe68e67bbf9a9abdd"
      };
 firebase.initializeApp(firebaseConfig)  
                          
  const captchaRef = useRef(null);
  const [puser,setPuser] =useState(null);
  const [disabled , setDisabled] =useState(true);
    useEffect(() =>{
        loadCaptchaEnginge(6);
       
    }, [])

   
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { googleSignIn } = useContext(AuthContext);


   

    const handleValidateCaptcha =() =>{
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
                setDisabled(false);
        }
         else{
            setDisabled(true);
         }
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
   const { userlogin } = useContext(AuthContext);
    const [err, setErr] = useState('');
    const [message, setMessage] = useState('');

    const location = useLocation();
  


    const from = location.state?.form?.pathname || '/';
    const navigate = useNavigate();
    const handlePhoneSignIn = () =>{
        useEffect (()=>{
            const unRegisterd = onAuthStateChanged(firebase.auth(),(currentUser)=>{
                console.log(currentUser)
                setPuser(currentUser);
            })
        },[])
    }
    
    const handleLogIn = async (data) => {

        userlogin(data.email, data.password)
            .then(result => {
                const newUser ={email:data.email, password:data.password}
                fetch('http://localhost:5000/login', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        
                        navigate(from, { replace: true });
                    })
                
            })
            .catch(error => {
                setErr(error.message);
            })
     
    }
   
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email,image : loggedInUser.photoURL,role : 'user'
                }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        
                        navigate(from, { replace: true });
                    })
            })

            
        }
    return (
        <div>
             <div className="p-3">
                    <p>{message}</p>
   
                    
                    <form onSubmit={handleSubmit(handleLogIn)} >
                        <div className="card flex-shrink-0 w-full h-1/2  max-w-sm shadow-2xl bg-base-100 p-7  mx-auto">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" 
                                     value={email}
                                      onChange={(e) => setEmail(e.target.value)}/>
                                        {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input  {...register("password", {
                                            required: true,
                                    
                                        })} type= {showPassword ? 'text' : 'password'}
                                        name="password"  placeholder="Password" className="input input-bordered mb-4"
                                        value={password}
                                        onChange={handlePasswordChange} />
                                         <LoadCanvasTemplate />

                                         <input type='text' ref={captchaRef}  placeholder='Type the captcha' className="input input-bordered mt-2" />
                                          <button onClick={handleValidateCaptcha} className='my-2 btn bg-green-800 text-white'>validate</button>
                                    <button >
                                        {/* {showPassword ? <BiHide/> : <BiHide/> } */}
                                    </button>


                                    <label className="label">
                                        <p>Already have Account? <Link to={'/signup'}><button > <span className="text-green-400">Signup</span> </button></Link></p>

                                    </label>
                                </div>
                                
                                <div className="form-control mt-6">
                                    <button disabled={disabled} type='submit' className="btn bg-green-800 text-white">Login</button>
                                </div>
                                <div className="divider">OR</div>
                                <button  onClick={handleGoogleSignIn}  type='submit' className="btn bg-orange-700 border-none text-white">google</button>
                                <div className="divider">OR</div>
                                <PhoneAuth auth={firebase.auth()}></PhoneAuth>
                            </div>
                        </div>
 
                    </form>
                </div>
        </div>
    );
};

export default Login;


