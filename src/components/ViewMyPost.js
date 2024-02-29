import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { deletePostApi, userPostApi } from '../service/allApi';
import { BASE_URL } from '../service/baseUrl';
import { MessageCircle, Send } from 'react-feather';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Likebtn from './Likebtn';

function ViewMyPost() {

    const [modalShow, setModalShow] = React.useState(false);


    const [show, setShow] = useState(false);

    const [userPosts, setUserPosts] = useState([])

    const navigate = useNavigate()

    const [userName, setUserName] = useState([])

    const [uName, setUName] = useState([])

    const getUserPost = async () => {

        // token
        if (localStorage.getItem("currentId")) {
            const id = localStorage.getItem("currentId")
            // console.log(id);

            const token = localStorage.getItem("token")

            // header
            const reqheader = {
                "Content-Type": "application/json",
                "access_token": `Bearer ${token}`
            }
            // console.log(reqheader);

            const result = await userPostApi(reqheader, id)
            // console.log(result);

            if (result.status == 200) {
                setUserPosts(result.data)
                // console.log(userPosts);
                setUserName(localStorage.getItem("currentUser"))
            }
            else {
                console.log("userPost api failed");
            }

        }
    }
    // console.log(userName);

    const [items, setItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('currentUser'));
        if (items) {
            setItems(items);
        }
    }, []);

    // console.log(items.userName);

    const handleDelete = async (e, id) => {
        e.preventDefault()

        const token = localStorage.getItem("token")

        // header
        const reqheader = {
            "Content-Type": "application/json",
            "access_token": `Bearer ${token}`
        }
        const response = await deletePostApi(reqheader, id)
        toast.success(response.data, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        getUserPost()
    }

    useEffect(() => {
        getUserPost()
    }, [])


    return (
        <div>

            {
                userPosts?.length > 0 ? userPosts?.map(i => (
                    <>
                        <Row id='' className='pt-3'>
                            {/* <Col lg={4} md={4} sm={4} xs={4} className=''> */}
                            <Card style={{ width: '50%', marginLeft: '25%' }} className='shadow' id='' onClick={() => setModalShow(true)}>
                            <Card.Text className='mt-2'>
                                    <h6>{items.userName}</h6>
                                </Card.Text>
                                <Card.Img className='mt-3' variant="top" src={`${BASE_URL}/uploads/${i.postImage}`} />
                                <Card.Text className='mt-2'>
                                    <b style={{color:'#5FBDFF'}}>{i?.description}</b>
                                </Card.Text>
                                <Row className='text-center mb-3'>
                                    <Col lg={4} md={4} sm={4} xs={4}>
                                        <Likebtn />
                                    </Col>
                                    <Col lg={4} md={4} sm={4} xs={4}>
                                        {/* <MessageCircle onClick={() => setModalShow(true)} /> <br /> */}
                                    </Col>
                                    <Col lg={4} md={4} sm={4} xs={4}>
                                        <span onClick={(e) => handleDelete(e, i._id)}>
                                            <i class="fa-solid fa-trash"></i>
                                        </span>
                                    </Col>
                                </Row>
                            </Card>
                            {/* </Col> */}
                        </Row>
                    </>
                ))
                    : <p>No post yet</p>
            }
            <ToastContainer />

        </div>
    )
}


export default ViewMyPost