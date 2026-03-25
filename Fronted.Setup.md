
# Contex 
1. make folder {Contex}=> inside this all contex are present
2. wrap <app /> uss context file se jha contex create kar rha
  <StrictMode>
    <Usercontex>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Usercontex>
  </StrictMode>

2. In Contex file we ({children})
    a. <div>{children}</div>

3. Create contex
   a. export const UserDatacontex=createContext()

4. Provide the data in all children
    a. const user='krishna';
      <div>
        <UserDatacontex.Provider value={user}>
            {children}
        </UserDatacontex.Provider>
    </div>
5. Now Use the contex in any  children
  a. const data=useContext(UserDatacontex)

# Backend to Frontend Flow
1. npm i axios => kyuki data backend me bejna he
2. backend se response ayega {user or token}
3. abb uss User ko hume Frontend ke children me pass karna he 
4. import karege {UserDataContex}
   a. const {User, setUser} = React.useContext(UserDatacontex)
   b. setUser(data.user)
5. Usercontex ka use karke usme User ko set kar dege 
6. Then navigate kar dege /Home pe
  a. const navigate =useNavigate()
  b. navigate('/home')


# Status code
1. 200=> HTTP Status Code 200 = OK ✅
  a. Request successfully complete ho gayi
  b. Server ne jo tumne manga tha, vo sahi se return kar diya

2. 201=> HTTP Status Code 201 = Created 🆕
    ➡️ Request successful rahi
    ➡️ Server ne naya resource create kar diya

# Protectct the routes in fronted
1. Create file UserProtectedWrapper.jsx
2. token dek browser pe he ya nhi agar nhi he to login route pe bej de  agar he to 
3. return <> {children}</>
4. to isse ye rhega agar token he fronted pe tab hi me home route pe ja sakuga agar nhi to return se phele mr if condition ki wgha se redirect ho jauga login page pe
5.  imp thing jiss page ko protected karna he use 
        <Route path='/home'  element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>     
        }/>


# Import React things
1. import React ,{useContext} from 'react'
   a. const {User, setUser} = `useContext`(UserDatacontex)

2. import React, { useState } from 'react'
   a.  const {User, setUser} = `React.useContext`(UserDatacontex)

# UseNavigate 
ans. Action pe jaana ho → useNavigate
1. import {useNavigate} from 'react-router-dom'
2. const navigate=useNavigate();
3. navigate('/login');
Use:
button click
form submit
API success ke baad

4. <Navigate /> =>"Condition pe redirect karna ho → <Navigate /> ye ek Component hota hai
                import {Navigate} from 'react-router-dom'
       return `<Navigate to="/login" />`
Use:
render ke time condition check
protected route
auth check
Matlab direct UI return me

# Wrap concept
1. Wrap karna” = kisi component ke andar doosra component daalna
<UserProtectedWrapper>
  <Home />
</UserProtectedWrapper>
     a.UserProtectedWrapper = wrapper (bahar wala)
     b.<Home /> = children (andar wala)

2. React automatically jo bhi component ke andar likhte ho, wo children prop me aa jata hai
           const UserProtectedWrapper = ({ children }) => {
             console.log(children);
           };
      Output :<Home />


# LogOut Route in Frontend
1. axios.get se backend me hum req bejege `/users/logout`
2. is se sath hum header bhi munally bejte he headers:{Authorization:`Bearer ${localStorage.getItem('token') }`}  yha local storege se token utha ke hum bejte he backend me 
3. Then local storage se hum remove kar dete he token
4. Navigate kra dete he login page pe  

🔹 Cookies vs Headers (Auth Token)

🟢 Cookies
Backend set karta hai (res.cookie)
Browser automatically har request me bhejta hai
Backend se read hota hai → req.cookies
Delete bhi backend karta hai → res.clearCookie()
Secure option: httpOnly (frontend access nahi kar sakta)

👉 Use case: secure authentication (JWT in cookies)

🔴 Headers (Authorization)
Frontend manually bhejta hai
Format:`Authorization: Bearer <token>`

Backend read karta hai → req.headers.authorization
Token usually localStorage me store hota hai
Logout = frontend se token remove

👉 Use case: APIs, mobile apps, simple auth

# Frontend Questions

Q. Component body me API call
ans. galat agar vo component render hoga to vo api dubara se hit karega isi liye hum useeffect ka use karte he taki api dubara hit na ho  useEffect(()={   ...   }) 

Q. Context Api 
ans. import `{CaptainDatacontex}` from '../Contex/Captaincontex'


# signup flow {axios, context api, navigate}
1. user form fill karta he (name,age,email, password)
2. frontend API call (axios)
3. backend verify and Create karta he db me user  and res bejta he
4. res (data, token)
5. token -> localstorage me store
6. user -> dashboard pe navigate `wrap with protected route`


# Login Flow {axios, context api, navigate}
1. user form fill karta he (email, password)
2. frontend API call (axios)
3. backend verify karta he and res bejta he
4. res (data, token)
5. token -> localstorage me store
6. user -> dashboard pe navigate  `wrap with protected route`

# LogOut Flow {axios, navigate}
1. logout button click
2. API call (token ke sath)
3. backend token invalidate karta he aur res bejta he 
4. res === 200 , LocalStorage clear
5. login page pe navigate

# Protected Wrapper  {axios, context api, navigate}
1. User kisi Protected route pe jata he (/home)
2. wrapper run hota he
3. wrapper token check karta he (localStorage se)
4. agar token nhi (!token) login page pe redirect
5. agar token hai -> backend ko bejta he verify ke liye (/profile me beja) header ke through
6. backend verify karta he res 200 hit hua data set kar dete context api me
7. valid token  -> page render (children show)
8. invalid token -> token remove + login pe redirect
