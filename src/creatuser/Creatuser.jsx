import './Creatuser.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


export default 
function Creatuser({aduser}) {

 let  [foyda,setfoyda]=useState({
    id:uuidv4(),
      img:'',
      familya:"",
      ism:"",
      yosh:null,
      manzil:"",
     kasbi:"",
      jinsi:""})
      //
      const handelet=(e)=>{
        e.preventDefault()
        aduser(foyda)
      }

  return (
    <div className='modal-wraper'>
      <div className="overlay">
        <div className="modal">
            <h2>Yangi foydalanuvchi:</h2>
            <form onSubmit={handelet}>
                <label >
                    <span>Img Url</span>
                    <input onChange={(e)=>{
                        setfoyda((prev)=>{
                            return{...prev,img: e.target.value}
                        })
                    }} type="url" />
                </label>
                <label>
                    <span>Familya : </span>
                    <input onChange={(e)=>{
                        setfoyda((prev)=>{
                            return{...prev,familya: e.target.value}
                        })
                    }} type="text"required />
                </label>
                 <label>
                    <span>Ism: </span>
                    <input onChange={(e)=>{
                        setfoyda((prev)=>{
                            return{...prev,ism: e.target.value}
                        })
                    }} type="text"required />
                </label>
                 <label>
                    <span>Yoshi : </span>
                    <input onChange={(e)=>{
                        setfoyda((prev)=>{
                            return{...prev,yosh: e.target.value}
                        })
                    }} type="number"required />
                </label>
                 <label>
                    <span>Manzil : </span>
                    <input onChange={(e)=>{
                        setfoyda((prev)=>{
                            return{...prev,manzil: e.target.value}
                        })
                    }}
                     type="text"required />
                </label>
                 <label>
                    <span>Kasbi : </span>
                    <input type="text"  onChange={(e)=>{
                        setfoyda((prev)=>{
                            return{...prev,kasbi: e.target.value}
                        })
                    }} required />
                </label>
                <div className='gender'>
                    <span>Jinsi :</span>
                    <label>
                        <small>Erkak : </small>
                        <input onChange={(e)=>{
                        setfoyda((prev)=>{
                            return{...prev,jinsi: e.target.value}
                        })
                    }} type="radio"required name='gender' value="erkak" />
                    </label>
                    <label>
                        <small>Ayol : </small>
                        <input onChange={(e)=>{
                        setfoyda((prev)=>{
                            return{...prev,jinsi: e.target.value}
                        })
                    }} type="radio"required name='gender' value="ayol" />
                    </label>
                </div>
                <button  className='modal-btn'>Tasdiqlash</button>
            </form>
        </div>
      </div>
    </div>
  )
}
