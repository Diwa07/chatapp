import React, { useEffect, useState } from 'react'
import axios from "axios";
import Profile from './profilepic';
import Profilepic from './profilepic';
const Msg = () => {
  const [msg, setmsg] = useState([])
  const messageData = async () => {
    try {
      const response = await axios.get(`http://localhost:3005/message/`, {

      });
      console.log(response.data.msg);
      setmsg(response.data.msg);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    messageData()
  }, [])

  return (<>

    {msg && msg.map((item, id) => {
      return (<>

        <div className='message_left'>
          

          <div className='profile'>
            <Profilepic/>

          </div>


          <div className='other'>   {item.message} 
          </div>
        </div>
        

      </>);
    })}






  </>

  )
}

export default Msg