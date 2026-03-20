# Git Repo Clone
1. git clone {repo Link}

# Create a folder 
1. npm create vite@latest
2. npm install tailwindcss @tailwindcss/vite
3. see Tailwind website

# folder

1. inside src
  a. Create Pages folder => Home.jsx
  b. 

# Contex 
1. make folder {Contex}=> inside this all contex are present
1. wrap <app /> uss context file se jha contex create kar rha
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

