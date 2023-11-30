import React from 'react'
import { useForm } from 'react-hook-form'

function Form() {

   const {register, 
         handleSubmit, 
         getValues,
         formState: { errors },
         reset,
         } = useForm();

   const onSubmit = (data) => {
    console.log(data);
    reset();
   }

 

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

      <form onSubmit={handleSubmit(onSubmit)}  className="space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >

       <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
          </div>
          <div className="mt-2">
            <input
               name="username"
               type="text"
               placeholder='  username'
               {...register('username',
               {
                 required: 'Username is required!'
               }
               )}
               className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                errors.username ? 'ring-red-500' : 'ring-gray-300'
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6`}
            />
          </div>
          <p className="text-red-500 text-left">{errors.username?.message}</p>
        </div>
     
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
          </div>
          <div className="mt-2">
            <input
               name="email"
               type="email"
               placeholder='  email'
               {...register('email',
               {
                required: 'Email is required!',
                validate: {
                  maxLength: (v) =>
                    v.length <= 50 || "The email should have at most 50 characters",
                  matchPattern: (v) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                    "Email address must be a valid address",
                },
               }
              )}
            
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                errors.username ? 'ring-red-500' : 'ring-gray-300'
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6`}
            />
            
          </div>
          <p className="text-red-500 text-left">{errors.email?.message}</p>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
           
          </div>
          <div className="mt-2">
            <input
              name="password"
              type="password"
              placeholder='  password'
              {...register('password',
              {
                required : 'Password is required!',
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                  message: 'Password must be at least 8 characters long, and include at least one uppercase letter, one lowercase letter, and one digit.',
                },
                
              }
              )}
              
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                errors.username ? 'ring-red-500' : 'ring-gray-300'
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6`}
            />
          </div>
          <p className="text-red-500 text-left">{errors.password?.message}</p>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Confirm Password
            </label>
           
          </div>
          <div className="mt-2">
            <input
              name="confirmpassword"
              type="password"
              placeholder='  confirm password'
              {...register('confirmpassword',
              {
                required : 'Password is required!',
                validate : (v) =>
                v === getValues('password') || 'Password Must match'
              }
              )}
             className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                errors.username ? 'ring-red-500' : 'ring-gray-300'
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6`}
            />
          </div>
          <p className="text-red-500 text-left">{errors.confirmpassword?.message}</p>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

     
    </div>
  </div>
  )
}

export default Form