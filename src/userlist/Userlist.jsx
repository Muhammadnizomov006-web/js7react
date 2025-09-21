import "./Userlist.css";


export default function 

Userlist({user,ochir}) {
  return (
    <div className="userlist">
      <div className="userList-container container">
        {user.map((user)=>{
            return(
                    <div className="card-inner" key={user.id}>                  
                      <img src={user.img} alt={user.ism} height={150} width={150}></img>
                      <h3>{user.familya} {user.ism} {user.yosh} -yosh</h3>
                      <p>manzil: {user.manzil}</p>
                      <p> Kasbi: {user.kasbi}</p>
                      <p>Jinsi:{user.jinsi}</p>
                      <button onClick={()=>ochir(user.id)}>Ochirish</button>
                     
                    </div>
            )
        })}
      </div>
    </div>
  )
}
