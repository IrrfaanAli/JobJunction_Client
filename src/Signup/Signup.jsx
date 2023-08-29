import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { AuthContext } from '../providers/AuthProviders';
const Signup = () => {
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
   const { createUser, updateUserProfile } = useContext(AuthContext);
    const [passwordMatchError, setPasswordMatchError] = useState('');


    const handlesignup = data => {

        if (data.password !== data.confirmPassword) {
            setPasswordMatchError('Passwords do not match');
            
        }
        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, image: data.photoURL, role: 'user',password: data.password,isLocked: 'false',lockUntil: '27-08-2023',loginAttempts: '3' }
                        fetch('http://localhost:5000/signup', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    Navigate('/');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })



    }
    return (
        <div>
            <>

                <div>

                    <div>
                        <div className=" p-7   ">
                            <form onSubmit={handleSubmit(handlesignup)}>
                                <div className="card flex-shrink-0 w-full h-1/2 mx-auto  max-w-sm shadow-2xl bg-base-100">
                                    <div className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text"  {...register("name")} name="name" placeholder="Name" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                            {errors.email && <span className="text-red-600">Email is required</span>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="password" id="password"  {...register("password", {     
                                               required: true, minLength: 6,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                            })} placeholder="password" className="input input-bordered" />
                                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase 
                                              and one special character.</p>}

                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Confirm Password</span>
                                            </label>
                                            <input type="password" placeholder="Confirm Password" className="input input-bordered"></input>
                                            {/* <input type="password" id="confirmPassword" {...register("ConfirmPassword", { required: true })} name="Confirmpassword" placeholder="Confirm password" className="input input-bordered" />
                            {errors.email && <span className="text-red-600"> Confirm Password is required</span>} */}
                                            {/* {errors.confirmPassword && (
                                <p className="mt-2 text-red-500">
                                   {passwordMatchError}
                                </p>
                            )} */}

                                        </div>
                                        <div className="form-control">
                                            {/* <label className="label">
                                                <span className="label-text">Photo URL</span>
                                            </label>
                                            <input type="text" {...register("photoURL", { required: true })} placeholder="PhotoURL" name="photoURL" className="input input-bordered" /> */}
                                            <label className="label">
                                                <p>Do not have Account? <Link to={'/login'}><span className="text-green-400">Login</span></Link></p>

                                            </label>
                                        </div>
                                        <div className="form-control mt-6">
                                            <button type="submit" className="btn bg-green-800 text-white">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </>
        </div>
    );
};

export default Signup;