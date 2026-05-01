'use client'
import { authClient } from '@/lib/auth-client';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {

    const {register,handleSubmit,
            watch,
        formState:{errors}}=useForm();

    const [isShowPassword,setIsShowPassword]=useState(false);

    const handleLoginFunc=async (data)=>{
        console.log(data);

        const { data:res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        console.log(res,error);

        if(error){
            alert(error.message);
        }

        if(res){
            alert("Sign in successful");
        }
        
        
    }

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-4'>Login your account</h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input type="email" className="input" placeholder="Type your email"
                     {...register("email",{required:"Email Field is required"})}
                     />

                      {errors.email && <p className='text-red-500'>{errors.email.message}</p> }
                    
                    </fieldset>

                    <fieldset className="fieldset relative">
                    <legend className="fieldset-legend">Password</legend>
                    <input type={isShowPassword ? "text" : "password"} className="input" placeholder="Type your passwords"
                     {...register("password",{required:"Password Field is required"})}
                    />
                    <span className='absolute right-2 top-3 cursor-pointer' onClick={()=>setIsShowPassword(!isShowPassword)}>

                    {isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                    </span>
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p> }
                    
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white">Login</button>

                </form>

                <p className='mt-4'>Dont have an account? <Link href={'/register'} className='text-blue-500'>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;