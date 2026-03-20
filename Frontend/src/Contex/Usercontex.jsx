import React, { createContext, useState } from 'react'

export const UserDatacontex=createContext()

const Usercontex = ({children}) => {

    const [User, setUser] = useState({
        fullname:{
            firstname:'',
            lastname:''
        },
        email:''
    });
  return (
    <div>
        <UserDatacontex.Provider value={[User,setUser]}>
            {children}
        </UserDatacontex.Provider>
    </div>
  )
}

export default Usercontex