import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { TbLoader2 } from "react-icons/tb";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';


const UpdateExistingUser = () => {
    const [updatedUser, setUpdatedUser] = useState({ name : "", email : "", age : ""});
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const navigate = useNavigate();


    const {userId} = params;
    
    const handleInputChange=(e)=>{
        const {name, value} = e.target;
        setUpdatedUser({...updatedUser, [name] : value})
    }


    const handleFormSubmit=async(e)=>{
        setLoading(true)
        e.preventDefault();
        const notify = () => toast.success("User is successfully updated ");
        try {
            const response = await axios.put(`http://localhost:8000/user/update/${userId}`, updatedUser, {withCredentials: true, headers : {"Content-Type" : "application/json"}})

            if(response.data.success){
                setLoading(false);
                console.log(response);
                notify();
                navigate("/show");
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }


    return (
        <>
            <div className="updatePage container w-full h-auto mx-auto flex flex-col justify-start items-center py-8">
                <h1 className='text-3xl font-semibold'>Update Existing User</h1>
                <form action="" className='w-[70%] h-auto flex flex-col justify-start items-start mx-auto py-6 px-10 gap-3' onSubmit={handleFormSubmit}>

                    <div className='w-full flex flex-col justify-start items-start gap-1'>
                        <label htmlFor="">Username</label>
                        <input type="text" name="name" onChange={handleInputChange} className='w-full border-2 border-zinc-600 rounded-md outline-none px-3 py-2' placeholder='Enter your name here' />
                    </div>

                    <div className='w-full flex flex-col justify-start items-start gap-1'>
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" onChange={handleInputChange} className='w-full border-2 border-zinc-600 rounded-md outline-none px-3 py-2' placeholder='Enter your email here' />
                    </div>

                    <div className='w-full flex flex-col justify-start items-start gap-1'>
                        <label htmlFor="">Age</label>
                        <input type="number" name="age" onChange={handleInputChange} className='w-full border-2 border-zinc-600 rounded-md outline-none px-3 py-2' placeholder='Enter your age here' />
                    </div>

                    <button type='submit' className='py-1.5 px-6 text-white text-lg tracking-wider my-4 mx-auto bg-green-400 hover:bg-green-500 active:bg-green-600 rounded-md  flex justif-center items-center gap-3'>Update <TbLoader2 className={` ${(loading) ? "animate-spin" : "hidden"}`} /> </button>

                </form>
            </div>
        </>
    )
}

export default UpdateExistingUser
