import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Nav from './nav'
import avatar from '../../images/avatar.png'




const Profile = () => {
  const [ profile , setprofile]=useState ([])
  const fetchPhoto = () => {

    axios.get("http://localhost:3005/profile").then((response) => {
    
    const images = response.data.validDetails;
    const lastUploadedImage = images[images.length - 1];
    setprofile(lastUploadedImage  || <img src={avatar} alt=''/>)
    console.log(response.data.validDetails);
        });
  }
  


  useEffect(() => {
    
    fetchPhoto()



    
      
    
  }, [profile] )
  const{name,_id}=useSelector(state=>state.user)
  
  const [file, setFile] = useState (null)
  const triggerImgSave = async ()=>{
    console.log(file)
    const formdata = new FormData()
      formdata.append('avatar' ,file)
      formdata.append('_id' ,_id)
      formdata.append('name' ,name)
    
      const requestOptions ={
        method:"POST",
        body :formdata,
};  

const res = await fetch("http://localhost:3005/profile", requestOptions);
const data = await res.json()

if (res.status === 200) {

alert("uploaded")

} else {
    alert(data.errorMsg)
}


}


  return (
    <>
    <Nav/>
    <div>Profile
    
      
    
       
      <input type= "file" name='avatar'  onChange={(e)=>setFile(e.target.files[0])
      } />
      <button onClick={()=>triggerImgSave()} type="submit" > summit</button>
      
    </div>
    <div>
    
    </div>

<div className='slide'>
  


{profile.avatar  && <img src={require(`../../uploads/profile/${profile.avatar}`)} alt="Loading.."  className='pic'/>
        || <img src={avatar} alt=''/>    }

    </div>

   </>

)
}

export default Profile 