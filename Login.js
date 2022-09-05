import {Button,Row,Col,Card, Form, CloseButton} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Login.css';
function Login(){
return(
    
    
        <div className=' div justify-content-center d-flex'>
        <Row className='justify-content-center  m-0 align-items-center d-flex container'>
        <Col className='col-md-4 col-sm-3 p-0' >
        <Card className=''>
            <Card.Body>
              <Link to='/'><CloseButton className='float-end'/></Link>
              <Card.Title className='mb-3 text-center' style={{fontSize:'2rem'}}>Login</Card.Title>
              <Card.Text>
              <Form>
                <Form.Group className='mb-3'>
                   <Form.Label>Username</Form.Label>
                    <Form.Control type='text' placeholder='Enter Your Email id OR Username'></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter Your Password'></Form.Control>
                </Form.Group>
                <Form.Check type='checkbox' label='Remember Me' className='mb-3'></Form.Check>
               
             <Button className='d-grid w-100 mb-3 btn-success ' type='submit'>LOGIN</Button> 
             <Link to='#' className='text-center'>Forgot Password?</Link>                                                                 
             </Form>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p style={{textAlign:'center'}}>
               Don't Have An Account? <Link to='/signup'>sign up</Link> 
            </p></Card.Footer>
        </Card>  
        </Col>
        </Row> 
         
    </div>
    
        
);
}
export default Login;