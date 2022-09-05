import { Form,Card,Col,Row } from "react-bootstrap";
import {getCountries, getStates} from 'country-state-picker'
import {useState, useEffect} from 'react'
 function Address(){
     const[country,setCountry]=useState(['India'])
     const[countrycode,setCountrycode]=useState('')
     const[state,setState]=useState(['in'])
            
      useEffect(()=>{
      const getcountry=()=>{
      const countryOption=getCountries();
      setCountry(countryOption);
      }
      getcountry()
      },[]);
      useEffect(()=>{
          const getstates=()=>{
              const stateOption=getStates(countrycode);
              setState(stateOption)
          }
          getstates()
      },[countrycode]);
    
         
     const countryChangeHandler=(event)=>{
         const a=event.target.value;
         setCountrycode(a)
         console.log(a)
     }
    console.log(countrycode)
     
    return(
    <Card className='mt-2'>
     <Card.Title className='p-2'>Address:</Card.Title>
     <Card.Body>     
        <Row>
            <Col>
            <Form.Group>
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control type='text'></Form.Control>
            </Form.Group>
            </Col>
        </Row>
        <Row>
        <Col>
            <Form.Group>
            <Form.Label>Address Line 2</Form.Label>
                <Form.Control type='text'></Form.Control>
            </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col>
            <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Select  onChange={countryChangeHandler} >
                <option>select country</option> 
                             
                {
                    country.map((countryget)=>(
                        <option value={countryget.code} key={countryget.code} >{countryget.name}</option>
                    ))             
                }
               
            </Form.Select>
            </Form.Group>
        </Col>
        <Col>
        <Form.Group>
            <Form.Label>State</Form.Label>
            <Form.Select >
                <option>select state</option>
                {
                    state && state.map((stateget)=>(
                        <option>{stateget}</option>
                    ))
                };
            </Form.Select>
            </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col>
        <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control type='text'></Form.Control>
        </Form.Group>
        </Col>
        <Col>
        <Form.Group>
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type='number'></Form.Control>
        </Form.Group>
        </Col>
        </Row>
        
      </Card.Body>
    </Card>
    
    );
}
export default Address;