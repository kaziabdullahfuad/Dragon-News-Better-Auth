'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {

    const {register,handleSubmit,
            watch,
        formState:{errors}}=useForm();

    const handleRegisterFunc=(data)=>{
        console.log(data);
        const {email,name,photo,password}=data;
        
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

                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password</legend>
                    <input type="password" className="input" placeholder="Type your passwords"
                     {...register("password",{required:"Password Field is required"})}
                    />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p> }
                    
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white">Register</button>

                </form>

                
            </div>
        </div>
    );
};

export default RegisterPage;