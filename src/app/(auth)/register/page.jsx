'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {

    const {register,handleSubmit,
            watch,
        formState:{errors}}=useForm();

    const [isShowPassword,setIsShowPassword]=useState(false);

    const handleRegisterFunc=async (data)=>{
        console.log(data);
        const {email,name,photo,password}=data;

        const {data: res,error}= await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        })
        
        console.log(res,error);
        if(error){
            alert(error.message)
        }

        if(res){
            alert("Signup Successful");
        }
        
    }

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-4'>Register your account</h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>
                   
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Name</legend>
                    <input type="text" className="input" placeholder="Type your name"
                     {...register("name",{required:"Name Field is required"})}
                     />

                      {errors.name && <p className='text-red-500'>{errors.name.message}</p> }
                    
                    </fieldset>

                     <fieldset className="fieldset">
                    <legend className="fieldset-legend">Photo</legend>
                    <input type="text" className="input" placeholder="Type your photo url"
                     {...register("photo",{required:"Photo url Field is required"})}
                     />

                      {errors.photo && <p className='text-red-500'>{errors.photo.message}</p> }
                    
                    </fieldset>

                     <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input type="email" className="input" placeholder="Type your email"
                     {...register("email",{required:"Email Field is required"})}
                     />

                      {errors.email && <p className='text-red-500'>{errors.email.message}</p> }
                    
                    </fieldset>

                    <fieldset className="fieldset relative">
                    <legend className="fieldset-legend">Password</legend>
                    <input type={isShowPassword ? "text" : "password"}  className="input" placeholder="Type your passwords"
                     {...register("password",{required:"Password Field is required"})}
                    />

                     <span className='absolute right-8 top-3 cursor-pointer' onClick={()=>setIsShowPassword(!isShowPassword)}>
                    
                        {isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                    </span>
                    
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p> }

                    
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white">Register</button>

                </form>

                
            </div>
        </div>
    );
};

export default RegisterPage;