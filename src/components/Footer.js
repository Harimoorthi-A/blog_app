import React from 'react'
import './Footer.css';
import { Row, Col } from 'react-bootstrap';
import { Facebook, Instagram, Mail, PhoneOutgoing, Twitter } from 'react-feather';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Footer() {
  return (
    <div id='footer'>
      <hr className='mt-5' />
      <Row className='ps-3 pe-3 py-4'>
        <Col lg={4} md={4} sm={4} xs={4} className='text-center'>
          <img
            alt=''
            src="https://i.postimg.cc/x8GKFGch/360-F-524673483-l6-Bie-Jx-FUe0ac-Xa-Vt6-CJbj-BTCBtxr-I4-U-1-removebg-preview.png"
            width={100}
            height={80}
            className='d-inlineblock align-top'
          />
          <b className='fs-4'>SIGNAL</b>
        </Col>
        <Col lg={4} md={4} sm={4} xs={4} className='text-center'>
          <b>All rights reserved <i class="fa-regular fa-copyright"></i> 2023</b>
        </Col>
        <Col lg={4} md={4} sm={4} xs={4} style={{ overflowY: 'hidden' }}>
          <b>Contact us</b><br />
          <Row>
            <OverlayTrigger
              key='top'
              overlay={
                <Tooltip id='' style={{ overflow: 'hidden' }}>
                  Contact on Mail
                </Tooltip>
              }
            >
              <Mail id='icon' />
            </OverlayTrigger>
            <OverlayTrigger
              key='top'
              overlay={
                <Tooltip id='' style={{ overflow: 'hidden' }}>
                  Call
                </Tooltip>
              }
            >
              <PhoneOutgoing id='icon' className='' />
            </OverlayTrigger>
            <OverlayTrigger
              key='top'
              overlay={
                <Tooltip id='' style={{ overflow: 'hidden' }}>
                  Contact on Facebook
                </Tooltip>
              }
            >
              <Facebook id='icon' className='ms-3' />
            </OverlayTrigger>
            <OverlayTrigger
              key='top'
              overlay={
                <Tooltip id='' style={{ overflow: 'hidden' }}>
                  Contact on Instagram
                </Tooltip>
              }
            >
              <Instagram id='icon' className='' />
            </OverlayTrigger>
            <OverlayTrigger
              key='top'
              overlay={
                <Tooltip id='' style={{ overflow: 'hidden' }}>
                  Contact on Twitter
                </Tooltip>
              }
            >
              <Twitter id='icon' className='' />
            </OverlayTrigger>

          </Row>
        </Col>
      </Row>
      <hr className='mb-1' />

    </div>
  )
}

export default Footer