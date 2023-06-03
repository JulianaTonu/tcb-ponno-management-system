import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link} from 'react-router-dom';


import './Login.css'




const Login = () => {


  return (
    <Container className='border bg-success' style={{ margin: 'auto' }}>
      <Row className=''>


        <Col sm={12} lg={7} ><div className='register w-75  '>
          <h1 className='mb-1 text-center'>Login </h1>


          <Form >

            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label className='formlabel fw-bold'>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>


            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label className='formlabel fw-bold'>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>


            <p className='text-danger fw-bold text-center'><small></small></p>
            {/* <p className='my-2 text-danger'>{error}</p> */}
            <p className='my-2 text-danger'></p>
            <button className='sub-btn ' type='submit'>Login</button>

           

            <p className='text-center text-primary'><small>New to this website? Please <Link to='/register' className='text-info fw-bold'>Register</Link></small></p>



          </Form>
        </div></Col>
      </Row>

    </Container>
  );
};

export default Login;