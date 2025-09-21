import './Navbar.css';

export default function
 Navbar({userLengs}) {
  return (
    <div className='navbar'>
      <div className='navbar-container container'>
        <h1 className='navbar-logo'>cuser</h1>
        <h3 className='navbar-counter'>{userLengs > 0 ? "you have :"+ userLengs: "No User:("}</h3>

      </div>
    </div>
  )
}

