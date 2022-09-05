import {Link} from 'react-router-dom'
import {Nav} from 'react-bootstrap'
// import './Layout.css';



function Layout(){
    return(
      <div className="bg">
      <Nav className="justify-content-end bg-secondary p-3" variant='pills' >
        
        
        <Nav.Item className='me-3 '>
         <Link to="/signup" className="nav-link text-white ">Signup </Link>
        </Nav.Item>
        <Nav.Item className=''>
          <Link to='/login' className="nav-link text-white ">Login</Link>
        </Nav.Item>
        
      
      </Nav>
      
      </div>
    );
}
export default Layout;