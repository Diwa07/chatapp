import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Coverpage from './coverpage'
import Nav from './nav'






const Coper = () => {
    
  
    const [validDetails, setvalidDetails] = useState([])
    
    const fetchPhoto = () => {


        axios.get("http://localhost:3005/cover").then((response) => {
            

            setvalidDetails(response.data.pic)
            console.log(response.data.pic)
        });
    }
    useEffect(() => {
        fetchPhoto()
    }, [])









    return (
        <>
  

            <div className='map'>

                {validDetails.map((item, id) => {

                    return (<>
                    <div className='status '>
             <div className="board ">
             <div className='mero'> <Coverpage className ="mero" /> </div>
                      
                            
                      
                            
                    Status :    {item.message}
                       
                        {item.picture && <img width="300" height="300" src={require(`../src/uploads/cover/${item.picture}`)} alt="Loading.." className='pict'/>}
                        </div>  {item.fullName}
                        </div>
              
                       
                    </>);


                })}

            </div>
            
        </>

    )
}

export default Coper 