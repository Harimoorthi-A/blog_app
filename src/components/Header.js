import React, { useEffect, useState } from 'react'
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {

    const [isLoggedIn, setLoggedIn] = useState(false)
    const navigate=useNavigate()

    useEffect(() => {
        if (localStorage.getItem("currentId")) {
            setLoggedIn(true)
        }
    }, [])

    const logOut=(e)=>{
        e.preventDefault()
        localStorage.removeItem("currentUser")
        localStorage.removeItem("currentId")
        localStorage.removeItem("token")

        navigate('/')
    }

    return (
        <div>
            <Navbar expand="lg" className="shadow-lg nav">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=''
                            src="https://i.postimg.cc/x8GKFGch/360-F-524673483-l6-Bie-Jx-FUe0ac-Xa-Vt6-CJbj-BTCBtxr-I4-U-1-removebg-preview.png"
                            width={100}
                            height={80}
                            className='d-inlineblock align-top'
                        />
                        <b className='ps-3 fs-2' id='appTitle'>SIGNAL</b>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: 'none' }} className=''>
                        <i class="fa-solid fa-sliders" style={{ color: 'white' }}></i>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Nav.Link>
                        </Nav>

                        {
                            isLoggedIn ?
                                <>
                                    <Nav.Link href='' onClick={(e)=>logOut(e)}
                                    style={{ textDecoration: 'none', color: 'black' }}>
                                        Logout
                                        <i class="fa-solid fa-arrow-right-from-bracket ms-1"></i>
                                    </Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link href='/register' style={{ textDecoration: 'none', color: 'black' }}>Sign up</Nav.Link>
                                    <Nav.Link href='/login' style={{ textDecoration: 'none', color: 'black' }}>Sign in</Nav.Link>
                                </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header