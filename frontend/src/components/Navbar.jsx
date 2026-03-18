import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { setAuthUser } from '../redux/userSlice'
import { BASE_URL } from '..'

const Navbar = () => {
    const { authUser } = useSelector(store => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/v1/user/logout`);
            dispatch(setAuthUser(null));
            navigate("/login");
            toast.success(res.data.message || "Logged out successfully");
        } catch (error) {
            console.log(error);
            toast.error("Failed to logout");
        }
    }

    return (
        <div className='w-full fixed top-0 left-0 z-50 flex items-center justify-between px-6 py-4 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-b border-gray-100'>
            <div>
                <h1 className='text-2xl font-bold text-white tracking-wider'>ChatApp</h1>
            </div>
            
            {/* Only show User Name & Logout if the user is logged in */}
            {authUser && (
                <div className='flex items-center gap-4'>
                    <span className='font-medium text-white hidden sm:block'>{authUser.fullName}</span>
                    <button 
                        onClick={logoutHandler} 
                        className='btn btn-sm btn-error text-white'
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    )
}

export default Navbar