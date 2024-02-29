import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import { Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Landingpage() {

  const [isLoggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("currentId")) {
      setLoggedIn(true)
    }
  }, [])


  return (
    <div>

      <Row>
        <Header />
      </Row>

      <Row className='mt-3' style={{ overflowY: 'hidden' }}>
        <Row id='firstRow' className='container text-center' style={{ overflowY: 'hidden' }}>
          <Col lg={8} md={8} sm={8} xs={8} className='pe-5' id='sliding-right' >
            <Row style={{ overflowY: 'hidden', paddingTop: '20%' }} className='mt-5 ms-5 '>
              <h3 style={{ overflowY: 'hidden' }}>
                <span style={{ color: '#5FBDFF' }}>SIGNAL</span> is a Blogging app public profile that allows businesses, organizations,
                celebrities, and others to promote themselves on social media.
                Pages are similar to personal profiles, but instead of friends, they have fans.
              </h3>

            </Row>

          </Col>
          <Col lg={4} md={4} sm={4} xs={4} className='' >
            <img
              alt=''
              src="https://i.postimg.cc/QxyxxXJn/371901270-KISSCHAT-400.gif"
              width='100%'
              height='100%'
            />

          </Col>
        </Row>
      </Row>

      <Row className='mt-3' >
        <Row id='secondRow' className='container text-center'>
          <Col lg={4} md={4} sm={4} xs={4} className=''>
            <img
              alt=''
              src="https://i.postimg.cc/QtDzJ425/ecec3687a972a20d8ba953b7f1bf4e43.gif"
              width='100%'
              height='100%'
            />
          </Col>
          <Col lg={8} md={8} sm={8} xs={8} className='' id='sliding-text'>
            <Row style={{ overflow: 'hidden' }} className='text-end mt-5 ms-5'>
              <h1><span style={{ color: '#5FBDFF' }}>Connect</span> with</h1>
              <h1>your circle in a</h1>
              <h1>fun way</h1>
              <br />
              {
                isLoggedIn ?
                  <Link to={'/home'}>
                    <button className='Button' style={{ overflow: 'hidden' }}>
                      Start 
                    </button>
                  </Link>
                  :
                  <Link to={'/register'}>
                    <button className='Button' style={{ overflow: 'hidden' }}>
                      Create an account
                    </button>
                  </Link>
              }
            </Row>
          </Col>
        </Row>
      </Row>

      <Row id='thirdRow' className='text-center container w-50 mt-5 mb-3'>
        <Col lg={4} md={4} sm={4} xs={4}>
          <Card style={{ width: '100%', backgroundColor: '#5FBDFF' }} id='card'>
            <Card.Body>
              <Card.Title style={{ overflowY: 'hidden' }}>
                <i class="fa-solid fa-pen"></i>
                <b>Blog</b>
              </Card.Title>
              <Card.Text id='card-text'>
                This software is very easy for you to manage. You can use it as your wish
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={4} sm={4} xs={4}>
          <Card style={{ width: '100%', backgroundColor: '#5FBDFF' }} id='card'>
            <Card.Body>
              <Card.Title style={{ overflowY: 'hidden' }}>
                <i class="fa-solid fa-hourglass-half fa-spin"></i> <b>Save Your Time</b>
              </Card.Title>
              <Card.Text id='card-text'>
                This software is very easy for you to manage. You can use it as your wish
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={4} sm={4} xs={4}>
          <Card style={{ width: '100%', backgroundColor: '#5FBDFF' }} id='card'>
            <Card.Body>
              <Card.Title style={{ overflowY: 'hidden' }}>
                <i class="fa-solid fa-shield"></i> <b>Keep Safe & Private</b>
              </Card.Title>
              <Card.Text id='card-text'>
                This software is very easy for you to manage. You can use it as your wish
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Footer />
      </Row>
    </div>
  )
}

export default Landingpage