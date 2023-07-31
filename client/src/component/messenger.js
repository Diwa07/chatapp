import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import img from "../images/avatar.png"
import { useSelector, useDispatch } from 'react-redux'

import axios from "axios";
import io from 'socket.io-client';
// const socket = io();different domain vayekole talako line use gareko
const socket = io("http://localhost:3005");
function Messenger() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userDetails, setUserDetails] = useState([])
    const [show, setshow] = useState(true)
    const [message, setMessage] = useState('')
    const [selectedUserDetails, setSelectedUserDetails] = useState({})
    const { name, email, _id, address } = useSelector(state => state.user)


    const [coverpic, setcoverpic] = useState([])
    const fetchPhoto = () => {
        axios.get("http://localhost:3005/cover").then((response) => {
            setcoverpic(response.data.pic)
            console.log(response.data.pic)
        });
    }
    useEffect(() => {
        fetchPhoto()
    }, [])


    const fetchUser = () => {


        axios.get("http://localhost:3005/register").then((response) => {

            setUserDetails(response.data.userDetails)
        });
    }
    const triggerMessageSend = async () => {
        await axios.post("http://localhost:3005/message", { senderId: _id, receiverId: selectedUserDetails, message: message })

        console.log(_id, selectedUserDetails, message)


    }
    useEffect(() => {
        fetchUser();
        socket.on('connect', () => {
        });
    }, [])
 



    return (
  

        <div className='message_box'>
            <div className='message_head'>

                <div className='head_body'>

                    <div className='message_profile'>
                        <img src={require(`../uploads/cover/pic.jpg`)} alt="Loading.." />
                    </div>
                    {selectedUserDetails.name}
                    <div className='close_div'> <button className='close' onClick={() => setshow(!show)}>close</button> </div>


                </div>
                <div className='message_body'>

                    <div className='message_left'>
                        <div className='profile'> <img src={img} alt="Logo" /> </div>
                        <div className='other'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse porro expedita, nostrum voluptatum temporibus, consequuntur animi eum magnam suscipit officiis error natus, iusto exercitationem soluta est molestias nam illum? Voluptatum! hello Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Necessitatibus ab earum fuga, illo laudantium exercitationem dolorum perferendis totam sunt
                            recusandae ipsa inventore! Doloribus sequi soluta ea perferendis inventore aliquam dicta.
                        </div>

                    </div>
                    <div className='message_right'>

                        <div className='me'>   hi Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente beatae ipsa aspernatur consectetur quisquam illo. Molestias quas harum incidunt praesentium natus? Delectus, nisi libero corporis eius illum sequi ad deserunt. his  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo corrupti error
                            qui obcaecati sapiente at ut excepturi quos! Sunt veniam,
                            ipsum assumenda nam voluptas dignissimos totam eius dolores ea soluta! </div>
                        <div className='profile'>     <img src={require(`../uploads/cover/pic.jpg`)} alt="Loading.." />  </div>
                    </div>


                    <div className='message_left'>
                        <div className='profile'> <img src={img} alt="Logo" /> </div>
                        <div className='other'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse porro expedita, nostrum voluptatum temporibus, consequuntur animi eum magnam suscipit officiis error natus, iusto exercitationem soluta est molestias nam illum? Voluptatum! hello Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Necessitatibus ab earum fuga, illo laudantium exercitationem dolorum perferendis totam sunt
                            recusandae ipsa inventore! Doloribus sequi soluta ea perferendis inventore aliquam dicta.
                        </div>

                    </div>

                </div>
                <div className='message_footer'>

                    <input onKeyUp={(e) => setMessage(e.target.value)} placeholder='write something' onKeyPress={(event) => {
                        event.key === "Enter" && triggerMessageSend();
                    }} className='input' />
                    <button onClick={() => triggerMessageSend()} className='button_logout'>  Send &#9658;</button>

                </div>


            </div>


    </div>
        )
}

        export default Messengers
