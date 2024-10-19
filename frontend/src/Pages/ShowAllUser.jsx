import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { TbLoader2 } from "react-icons/tb";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowAllUser = ({url}) => {
    const [allUserData, setAllUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    let i = 1;
    console.log(page)


    const getAllUser_from_API=async()=>{
        try {
            setLoading(true)
            const response = await axios.get(`${url}/user/read?page=${page}`, { withCredentials: true });
            console.log(response)

            if (response.data.success) {
                setAllUserData([...response.data.showAllUser]);
                setLoading(false);
            }

        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }


    const handleDeleteUser=async(userId)=>{
        try {
            const notify = () => toast.success("User is successfully delete ");
            setLoading(true)
            const response = await axios.delete(`${url}/user/delete/${userId}`, { withCredentials: true })

            if (response.data.success) {
                setLoading(false);
                notify();
                getAllUser_from_API();
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    useEffect(() => {
        getAllUser_from_API();
    }, [page])


    if (loading) {
        return (
            <TbLoader2 className={`${(loading) ? "animate-spin" : "hidden"}`} />
        )
    }

    return (
        <>
            <div className="showAllUser w-full h-auto flex flex-col justify-start items-center py-8">
                <h1 className='text-3xl font-semibold'>All Users</h1>

                <div className="allUserData w-[80%] h-auto my-6 flex flex-col justify-start items-start mx-auto gap-3">
                    {
                        allUserData?.map((currElem) => {
                            return (
                                <div key={currElem._id} className="userData w-full h-12 flex justify-between items-center gap-3 shadow-md px-6 py-4 border border-gray-200 rounded-md ">
                                    <div className='grid grid-cols-[1fr_2fr_3fr_3fr_3fr] justify-items-start items-center gap-6'>
                                        <div className="serialNo">{i++}</div>
                                        <h1>{currElem.name}</h1>
                                        <div className="Id">{currElem._id}</div>
                                        <h1>{currElem.email}</h1>
                                        <h1>{currElem.age}</h1>
                                    </div>

                                    <div className='flex justify-start gap-6'>
                                        <NavLink to={`/update/${currElem._id}`}><FaRegEdit className='text-2xl text-green-600 cursor-pointer' /></NavLink>
                                        <MdDelete onClick={() => { handleDeleteUser(currElem._id) }} className='text-2xl text-red-600 cursor-pointer' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="pagination">
                    <nav aria-label="...">
                        <ul className="pagination">
                            <li className="page-item">
                                <span className={`page-link ${(page<2)?"disabled":""}`} onClick={()=>{setPage((prev)=>prev-1);}}>Previous</span>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#"  onClick={()=>{setPage((prev)=>prev+1)}}>Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </>
    )
}

export default ShowAllUser
