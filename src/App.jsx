import './App.css'
import './footer/Footer.jsx';
import Navbar from './navbar/Navbar.jsx';
import Userlist from './userlist/Userlist.jsx';
import Creatuser from './creatuser/Creatuser.jsx';
import { useState } from 'react';


function App() {
  let [user,setuser]=useState([])

  let [showmodal,setshowmodal]=useState(false)

   let ochir=(id)=>{
    setuser((prev)=>{
      return prev.filter((user)=>{
        return user.id!==id
      })
    })
   }

   let aduser =(user)=>{
     setuser((prev)=>{
      return [...prev,user]
     })
     setshowmodal(false)
   }

  return (
    <div tabIndex={0}
    onKeyDown={(e)=>{
      if(e.key==="Escape") setshowmodal(false)
    }}>
    <Navbar userLengs={user.length}/>
     <main >
     
      <div className="no-users">
        {user.length===0 && <h1>No User</h1>}
      

      </div>
      <Userlist user={user} ochir={ochir}/>
      

      
      
     </main>
     {showmodal && < Creatuser aduser={aduser}/>}
     <button onClick={()=>setshowmodal(true)} className='create-user'>Kirish</button>
     <footer>

     </footer>
    </div>
  )
}

export default App