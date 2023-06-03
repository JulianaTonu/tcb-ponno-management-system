import React from 'react'
import Header from '../shared/Header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>

<Header></Header>
       
       <Container>
          <Row>
             

              <Col >
              
              <Outlet></Outlet>
              
              </Col>

             
          </Row>
      </Container>
    </div>
  )
}

export default Main