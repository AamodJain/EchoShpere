import React from 'react'
import { Link } from 'react-router-dom'

const login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-bold text-center'>Login <span className='text-blue-500'>EchoSphere</span></h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' />
                    </div>

                    {/* <div>
                        <button className='btn w-full mt-4'>Login</button>
                    </div> */}

                    <Link to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-3 inline-block'>{"Don't"} have and account ?</Link>
                    <div>
                        <button className='btn w-full mt-2'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default login
