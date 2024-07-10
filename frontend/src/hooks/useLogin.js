import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContex } from '../context/authContext'

const useLogin = () => {
    
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContex();
    const login = async (inputs) => {
        const success = handleInputErrors(inputs);
        if(!success) return;

        setLoading(true)
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
            })
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            // setting user in localstorage
            localStorage.setItem('chat-user', JSON.stringify(data))
            setAuthUser(data)
            toast.success('Logged In successfully')

        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    return {loading, login};
}

export default useLogin


const handleInputErrors = (inputs) => {
    if(!inputs.username || !inputs.password){
        toast.error('Please fill all the fields');
        return false;
    }
    return true;
}