import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Bell, Calendar, Home, MessageCircle, PlusSquare, Settings, User } from 'react-feather';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link, useNavigate } from 'react-router-dom';

function Verticalbar() {

    const navigate = useNavigate()

    const logOut = (e) => {
        e.preventDefault()
        localStorage.removeItem("currentUser")
        localStorage.removeItem("currentId")
        localStorage.removeItem("token")

        navigate('/')
    }

    return (
        <div id='verticalbar' style={{ backgroundColor: '#5FBDFF', height: '100vh', width: '10vh' }}>
            <div className='ms-2' style={{ marginTop: '150px' }}>
                <Row className='mt-5'>
                    <OverlayTrigger
                        key='right'
                        placement='right'
                        overlay={
                            <Tooltip id={`tooltip-right`}>
                                SIGNAL
                            </Tooltip>
                        }
                    >
                        <Link to={'/'}>
                            <img style={{ color: 'black' }}
                                alt=''
                                src='https://i.postimg.cc/x8GKFGch/360-F-524673483-l6-Bie-Jx-FUe0ac-Xa-Vt6-CJbj-BTCBtxr-I4-U-1-removebg-preview.png'
                                width={50}
                                height={50}
                            ></img>
                        </Link>
                    </OverlayTrigger>
                </Row>
                <Row className='ps-1 mt-5'>
                    <OverlayTrigger
                        key='right'
                        placement='right'
                        overlay={
                            <Tooltip id={`tooltip-right`}>
                                Home
                            </Tooltip>
                        }
                    >
                        <Link to={'/home'}>
                            <Home style={{ color: 'black' }}></Home>
                        </Link>
                    </OverlayTrigger>
                </Row>
                <Row className='ps-1 mt-5'>
                    <OverlayTrigger
                        key='right'
                        placement='right'
                        overlay={
                            <Tooltip id={`tooltip-right`} style={{ overflow: 'hidden' }}>
                                Create a new POST
                            </Tooltip>
                        }
                    >
                        <Link to={'/add-post'} style={{ border: 'none' }}>
                            <PlusSquare id='add' />
                        </Link>
                    </OverlayTrigger>
                </Row>
                <Row className='ps-1 mt-5'>
                    <OverlayTrigger
                        key='right'
                        placement='right'
                        overlay={
                            <Tooltip id={`tooltip-right`}>
                                Profile
                            </Tooltip>
                        }
                    >
                        <Link to={'/profile'}>
                            <User style={{ color: 'black' }}></User>
                        </Link>
                    </OverlayTrigger>
                </Row>
                <Row className='ps-1 mt-5'>
                    <OverlayTrigger
                        key='right'
                        placement='right'
                        overlay={
                            <Tooltip id={`tooltip-right`}>
                                Logout
                            </Tooltip>
                        }
                    >
                        <Link onClick={(e) => logOut(e)}>
                            <i style={{ textDecoration: 'none', color: 'black' }} class="fa-solid fa-arrow-right-from-bracket ms-1"></i>
                        </Link>
                    </OverlayTrigger>
                </Row>
            </div>

        </div>
    )
}

export default Verticalbar