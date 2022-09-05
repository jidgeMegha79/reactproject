import { Row, Col, Container, CloseButton, Form, Button, Card } from "react-bootstrap"
import Name from './Name'
import Address from "./Address"
import { Link } from 'react-router-dom'
import './Signup.css'


function Signup() {
  return (
    <Container fluid className='justify-content-center d-flex parent' >     
       <Form className='child p-3 '>
        <div className='heading '  >
        <Link to='/'><CloseButton className='float-end' /></Link>
        <h1 >Sign Up</h1>
        <p className='text-muted'>Please fill in this field to create account!</p>
        </div>
          <Name />
          <Address />
          <Card className='mt-2 p-3'>
            <Row className='mt-2 mb-3'>
              <Col >
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='text' placeholder='Email Address'></Form.Control>
              </Col>
              <Col>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type='number' placeholder='Mobile Number'></Form.Control>
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col className='col-lg-6'>
                <Form.Select aria-label="Default select example">
                  <option>Select Your Account Type</option>
                  <option value="1">Saving Account</option>
                  <option value="2">Current Account</option>
                  <option value="3">NRI Account</option>
                </Form.Select>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-5" >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>

            <Row className='mb-3'>
              <Col>
                <Form.Check>
                  <Form.Check.Input type='checkbox' ></Form.Check.Input>
                  <Form.Check.Label>I accept the <Link to='#'>Terms Of Use </Link> and
                  <Link to='#'> Privacy Policy</Link></Form.Check.Label>
                </Form.Check>
              </Col>
            </Row>

            <Row className=' mb-3 justify-content-center ' >
              <Col className='col-sm-6' >
                <Button type='submit' variant='success btn-lg w-100'>Signup</Button>
              </Col>
            </Row>
           </Card>
           <p className='mt-2' style={{ textAlign: 'center' }}>
            Already Have An Account? <Link to='/login'>Sign In</Link>
          </p>
          </Form>         
               
      </Container>
  );
}
export default Signup;