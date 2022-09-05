import { Row,Form,Card,Col } from "react-bootstrap";

function Name(){
    return(
    <Card>
     <Card.Title className='m-2'>Name:</Card.Title>
     <Card.Body>
        <Row>
          <Col className='col'>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' placeholder='First Name'></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
                <Form.Label>Middle Name</Form.Label>
                <Form.Control type='text' placeholder='Middle Name'></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className='col-lg-6'>
          <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type='text' placeholder='Last Name'></Form.Control>
          </Form.Group>
          </Col>
        </Row>
        </Card.Body>
    </Card>
    );
}
export default Name;