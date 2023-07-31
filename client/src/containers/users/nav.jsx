import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_USER_DETAILS_LOGOUT } from '../../redux/reducerSlice/userSlice'
const Nav = () => {
    const { name, email, _id, address } = useSelector(state => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const triggerLogout = () => {
        dispatch(REMOVE_USER_DETAILS_LOGOUT())
        navigate('/')
    
      }
  return (
    <div className="user_screen">
    <div className='user_nav'>
    <Link to = '/'>
       home
        </Link>
       <Link to = '/profile'>
        change profile 
        </Link>

   
    <h2>   Hi {name} welcome to home</h2>

    <button className="button_logout" onClick={() => triggerLogout()}>Logout</button>
  </div>
  </div>
  )
}

export default Nav