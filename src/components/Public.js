import React, { useEffect, useState } from 'react'
import './Public.css';
import { Row, Col } from 'react-bootstrap';
import { Trash, Heart, MessageCircle, PlusSquare, Send } from 'react-feather';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Likebtn from './Likebtn';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../service/baseUrl';
import { deletePostApi } from '../service/allApi';
import PublicCard from './PublicCard';

function Public() {
    
    return (
        <div>
            <hr style={{ color: '#5FBDFF' }} />
            <Row id='second-Row' className='mt-3 pt-3'>
                <OverlayTrigger
                    key='top'
                    overlay={
                        <Tooltip id='' style={{ overflow: 'hidden' }}>
                            Create a new POST
                        </Tooltip>
                    }
                >
                    <Link to={'/add-post'} style={{ border: 'none', backgroundColor: 'white' }}>
                        <PlusSquare id='add' />
                    </Link>
                </OverlayTrigger>
            </Row>

        </div>
    )
}



export default Public