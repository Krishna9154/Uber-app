import React, { useEffect } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const UserLogOut = () => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()





    useEffect(() => {
        async function logoutUser() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if (response.status === 200) {
                    localStorage.removeItem('token')
                    navigate('/login')
                }

            } catch (err) {
                console.error('Error occurred while logging out:', err)
            }
        }

        logoutUser()
    }, [])

    // useEffect(() => {

    //     axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     }).then((response) => {
    //         if (response.status === 200) {
    //             localStorage.removeItem('token')
    //             // console.log(response);
    //             // return <Navigate to="/login" />
    //             navigate('/login')
    //         }
    //     })
    // }, [token])

    return (
        <div>UserLogOut</div>
    )
}

export default UserLogOut