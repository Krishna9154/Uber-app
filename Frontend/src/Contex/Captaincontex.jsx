import React, { createContext, useState } from 'react'

export const CaptainDatacontex=createContext();

const Captaincontex = ({ children }) => {

    const [Captain, setCaptain] = useState({
        fullname:{
            firstname:'',
            lastname:''
        },
        email:'',

        vechicle:{
            color:'',
            plate:'',
            capacity:'',
            vechicleType:''
        }
    });

  return (
   
        <CaptainDatacontex.Provider value={{Captain,setCaptain}}>
            {children}
        </CaptainDatacontex.Provider>
    
  )
}

export default Captaincontex