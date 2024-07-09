import { useState } from 'react'
import toast from 'react-hot-toast';

const useSignup = () => {
    const [loading, setloading] = useState(false);

    const signup = async(inputs) => {
        const success = handleInputErrors(inputs);
        if(!success) return;

        setloading(true);
        try {
            const res = await fetch('/api/auth/signup',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            toast.error(error.message);
        }finally{
            setloading(false);
        }
    }
    return {loading, signup};
}

export default useSignup

const handleInputErrors = (inputs) => {
    if(!inputs.fullName || !inputs.username || !inputs.password || !inputs.confirmPassword){
        toast.error('Please fill all the fields');
        return false;
    }
    if(inputs.password !== inputs.confirmPassword){
        toast.error('Passwords do not match');
        return false;
    }
    return true;
}