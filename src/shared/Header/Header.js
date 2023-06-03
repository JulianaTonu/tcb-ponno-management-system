import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from './../../images/gov.png'
import mujib from './../../images/mujib100.png'
import play from './../../images/play.jpeg'

import './Header.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div>
     <header className="topbar">
    <div className=" d-flex allbg justify-content-between p-1  ">
<h6 className="my-1 fw-bold text-light display_style">হাতের মুঠোয় টিসিবি পণ্য</h6>
<h6 className="my-1 fw-bold text-light display_style">জরুরি প্রয়োজনে : 8801763444222 </h6>

<div className="d-flex ">
    <a href="http://upokari.com/login-in" className="me-3  fw-bold text-light" style={{textDecoration: 'none'}}>রেজিষ্ট্রেশন অ্যাপ</a>
    
    <NavLink to='/login' className="fw-bold text-light ">Sign In</NavLink>
</div>
    </div>
</header>

    {/* <!-- navbar --> */}
    <Navbar  expand="lg" className='navbar'>
      <Container fluid >
        <Navbar.Brand href="#" className='d-flex  px-2 '>
        <img src={img} className='' style={{width:'50px' , height:'50px'}} alt=""/>
        <div class=" text-start ms-2 bg">
                <a class="nav-link active  fw-bold text-dark " style={{fontSize: '13px', marginLeft:'8px'}} aria-current="page" href="#">হাতের মুঠোয় টিসিবি পণ্য</a>
                <a class="nav-link active  " style={{fontSize: '18px', marginLeft:'8px'}} aria-current="page" href="#">অনলাইন সেবা বাতায়ন</a>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', marginTop:'20px', backgroundColor:'' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link> */}
            
           
          </Nav>
         
          <Nav.Link href="#action1">
         
               
               <img style={{width: '120px'}} src={mujib} alt=""/>
              
             
             
          </Nav.Link>
            <Nav.Link href="#action2">
            <img style={{width: '200px' , height:'50px'}} class="rounded mt-4" src={play} alt=""/>
            </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header