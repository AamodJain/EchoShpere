import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'

const signup = () => {

    const {loading, signup} = useSignup();  

    const [inputs, setinputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: ''
    })
    const handelSubmit = async(e) => {
        e.preventDefault()
        await signup(inputs);
    }
    return (
        <div>
            <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
                <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                    <h1 className='text-3xl font-bold text-center'>SignUp <span className='text-blue-500'>EchoSphere</span></h1>

                    <form onSubmit={handelSubmit}>
                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text'>Full Name</span>
                            </label>
                            <input type='text' placeholder='Enter Full Name' className='w-full input input-bordered h-10' value={inputs.fullName} onChange={(e)=>{setinputs({...inputs , fullName : e.target.value})}}/>
                        </div>
                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text'>Username</span>
                            </label>
                            <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10' value={inputs.username} onChange={(e)=>{setinputs({...inputs , username : e.target.value})}}/>
                        </div>
                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text'>Password</span>
                            </label>
                            <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' value={inputs.password} onChange={(e)=>{setinputs({...inputs , password : e.target.value})}}/>
                        </div>

                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text'>Confirm Password</span>
                            </label>
                            <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10' value={inputs.confirmPassword} onChange={(e)=>{setinputs({...inputs , confirmPassword : e.target.value})}}/>
                        </div>

                        {/* <div>
                            <button className='btn w-full mt-4'>SignUp</button>
                        </div> */}

                        <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-3 inline-block'>Already have and account ?</Link>
                        <div>
                            <button className='btn w-full mt-2' disabled = {loading}>
                                {loading ? <div className='loading loading-spinner'></div> : 'SignUp'}
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default signup
