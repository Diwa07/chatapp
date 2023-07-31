import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

import axios from "axios";
import io from 'socket.io-client';
import Msg from './msg';
import Nav from './nav';

import Profilepic from './profilepic';

// const socket = io();different domain vayekole talako line use gareko
const socket = io("http://localhost:3005");
function Try() {

  const [userDetails, setUserDetails] = useState([])
  const [show, setshow] = useState(false)
  const [message, setMessage] = useState('')
  const [selectedUserDetails, setSelectedUserDetails] = useState({})
  const { name, email, _id, address } = useSelector(state => state.user)

  const fetchUser = () => {


    axios.get("http://localhost:3005/register").then((response) => {
      const result = response.data.userDetails.sort((a,b) =>a.name.localeCompare(b.name));
      // const random = result.sort((a,b)=> 0.5-Math.random());
      
      setUserDetails(result)
    });
  }
  const triggerMessageSend = async () => {

    await axios.post("http://localhost:3005/message", { senderId: _id, receiverId: selectedUserDetails, message: message })

    console.log(_id,selectedUserDetails,message)
  
  }
 

  useEffect(() => {
   
    fetchUser();
    socket.on('connect', () => {
    });
  }, [])
  

  return (
    <div className='user_screen' >
      <Nav/>
    
      <div className='user_body'>
        <div className='user_left'>
          <h2>list of friend</h2>
          <div className='user_left_box'>
            {userDetails.length > 0 ? userDetails.map((item, id) => {
              return <li className='name_list' onClick={() => { setSelectedUserDetails(item); setshow(!false) }}><span className='profile'>
               <Profilepic/>
              </span>
                {item.name}
              </li>
            }) : null
            }
          </div>

        </div>
        <div className='user_mid'>


          {
            show ?
              <div className='message_box'>
                <div className='message_head'>

                  <div className='head_body'>

                    <div className='message_profile'>
                    <Profilepic/>
         
                    </div>
                    {selectedUserDetails.name}
                    <div className='close_div'> <button className='close' onClick={() => setshow(!show)}>close</button> </div>


                  </div>
                  <div className='message_body'>
                      
                       <Msg/>
                     
                       
                   

  </div>
                  <div className='message_footer'>

                    <input onKeyUp={(e) => setMessage(e.target.value)} placeholder='write something' onKeyPress={(event) => {
                      event.key === "Enter" && triggerMessageSend();
                    }} className='input' />
                    <button onClick={() => triggerMessageSend()} className='button_logout'>  Send &#9658;</button>

                  </div>
        

                </div>

              </div>
              : null
          }
          <div className='omg'>
  
          

           
          </div>

          <div className='omg'>
            
         
  
             </div>

         

        </div>
        
        <div className='user_right'>
          <div className='user_right_box'>


            <div className='profile_circle'>
        
<Profilepic/>
            </div>
            Name:
            <h2>  {name}</h2>
            Email:
            <h4>  {email}</h4>
            <h4>  {address}</h4>
         

          </div>

        </div>

      </div>

    </div>
  )
}




export default Try