import React, { useState } from 'react'
import axios from "axios";
import { TbLoader2 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Home = () => {
  const [createUser, setCreateUser] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const notify = () => toast.success("User is successfully created ");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreateUser({ ...createUser, [name]: value });
  }


  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8000/user/create", createUser, { headers: { "Content-Type": "application/json" }, withCredentials: true });

      if (response.data.success) {
        setLoading(false);
        console.log(response.data.mssg);
        notify();
        navigate("/show");
      }
      console.log(response);
    } catch (error) {
      setLoading(false);
      setErrMssg(error.response.data.mssg)
      console.log(error);
    }
  }



  return (
    <>
      <div className="home_page container w-full h-auto mx-auto flex flex-col justify-start items-center py-8">
        <h1 className='text-3xl font-semibold'>Create New User</h1>
        <form action="" className='w-[70%] h-auto flex flex-col justify-start items-start mx-auto py-6 px-10 gap-3' onSubmit={handleSubmitForm}>
          <div className='w-full flex flex-col justify-start items-start gap-1'>
            <label htmlFor="">User Name</label>
            <input type="text" name='name' value={createUser.name} onChange={handleInputChange} className='w-full border-2 border-zinc-600 rounded-md outline-none px-3 py-2' placeholder='Enter your name here' />
          </div>

          <div className='w-full flex flex-col justify-start items-start gap-1'>
            <label htmlFor="">Email</label>
            <input type="email" name="email" value={createUser.email} onChange={handleInputChange} className='w-full border-2 border-zinc-600 rounded-md outline-none px-3 py-2' placeholder='Enter your email here' />
          </div>

          <div className='w-full flex flex-col justify-start items-start gap-1'>
            <label htmlFor="">Age</label>
            <input type="number" name='age' value={createUser.age} onChange={handleInputChange} className='w-full border-2 border-zinc-600 rounded-md outline-none px-3 py-2' placeholder='Enter your age here' />
          </div>

          <button type='submit' className={`py-1.5 px-6 text-white text-lg tracking-wider my-4 mx-auto bg-red-400 hover:bg-red-500 active:bg-red-600 rounded-md flex justif-center items-center gap-3`}>Create <TbLoader2 className={` ${(loading) ? "animate-spin" : "hidden"}`} /></button>
        </form>
      </div>
    </>
  )
}

export default Home
