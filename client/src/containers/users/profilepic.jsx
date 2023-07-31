import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import avatar from '../../images/avatar.png'




const Profilepic = () => {
  const [ profile , setprofile]=useState ([])

  const fetchPhoto = () => {


axios.get("http://localhost:3005/profile").then((response) => {

const images = response.data.validDetails;
const lastUploadedImage = images[images.length - 1];
setprofile(lastUploadedImage  || <img src={avatar} alt=''/>);
console.log(response.data.validDetails);
    });




  }
  useEffect(() => {

    fetchPhoto()
  }, [] )
 




  return (
    <>

    
    
      
    

  


{profile.avatar  &&  <img src={require(`../../uploads/profile/${profile.avatar}`)} alt="Loading.."  className='pic'/> || <img src={avatar} alt=''/>
       }



   </>

)
}

export default Profilepic 