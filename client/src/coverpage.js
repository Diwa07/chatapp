import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Nav from './nav'





const Coverpage = () => {
  const [coverpic, setcoverpic] = useState([])

  const fetchPhoto = async () => {

    try {
      const response = await axios.get("http://localhost:3005/cover", {

      });
      const images = response.data.pic;
      const lastUploadedImage = images[images.length - 1];
      setcoverpic(lastUploadedImage);
      console.log(response.data.pic);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
 

  
  useEffect(() => {
    fetchPhoto()
  }, [])

  return (
    <> 

   
<div className='pic_card'>
{coverpic.message}
          {coverpic.picture ? <img src={require(`../src/uploads/cover/${coverpic.picture}`)} alt="Loading.."  className='pic'/> 
        : <h1> no data</h1>  
        }
          
           </div>
          
       
   
    </>
  )
}

export default Coverpage
