import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { Trash, Heart, MessageCircle, PlusSquare, Send } from 'react-feather';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Likebtn from './Likebtn';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../service/baseUrl';
import { deletePostApi } from '../service/allApi';
import Public from './Public';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { likeCountApi, getUnameApi } from '../service/allApi';

function PublicCard({ post }) {

    const [modalShow, setModalShow] = React.useState(false);

    const navigate = useNavigate()

    // const [postLike, setPostLike] = useState({
    //     likeCount: ""
    // })

    // const getLikeCount = async (e, id) => {
    //     e.preventDefault()

    //     const { likeCount } = postLike

    //     // token
    //     if (localStorage.getItem("currentId")) {
    //         const id = localStorage.getItem("currentId")
    //         console.log(id);

    //         const token = localStorage.getItem("token")

    //         // header
    //         const reqheader = {
    //             "Content-Type": "application/json",
    //             "access_token": `Bearer ${token}`
    //         }
    //         // console.log(reqheader);

    //         // body
    //         const reqBody = new FormData()
    //         reqBody.append("likeCount", likeCount)

    //         const result = await likeCountApi(reqBody, reqheader, id)
    //         // console.log(result);

    //         if (result.status == 200) {
    //             setPostLike(result.data)

    //         }
    //         else {
    //             console.log("userProjects api failed");
    //         }

    //     }
    // }
    // console.log(post.userId);

    const [token, setToken] = useState()

    useEffect(() => {
        // getUname()
    }, []);
    // console.log(data);

    const [allPosts, setAllPosts] = useState([])

    const [allUname, setAllUname] = useState([]);

    const getAllPostsUname = async () => {
        const respond = await getUnameApi()
        setAllUname(respond.data)
        // console.log(respond.data);
    }

    useEffect(() => {
        getAllPostsUname()
    }, [])
    // console.log(allUname);

    return (
        <div>
            <div id='individual-post' className='mt-3 mb-5 ps-2 pe-2'>
                {
                    post ?
                        <>
                            <Card style={{ width: '80%' }} id='cards' className='shadow'>
                                <Card.Title style={{ overflow: 'hidden' }}>
                                    <h6>{post.userName}</h6>
                                </Card.Title>
                                <Card.Img variant="top"
                                    src={post ? `${BASE_URL}/uploads/${post.postImage}` : "https://i.postimg.cc/tC5tzzd2/dummy-person-removebg-preview.png"} />
                                <Card.Text className='mt-2'>
                                    <div>
                                        <b style={{color:'#5FBDFF'}}>{post?.description}</b>
                                        <Likebtn />
                                    </div>
                                </Card.Text>
                                <Card.Body>
                                    {/* <Row className='text-center'>
                                        <Col lg={4} md={4} sm={4} xs={4}>
                                            <span onClick={(e) => getLikeCount(e, post?._id)}>
                                            <Likebtn />
                                            </span>
                                        </Col>
                                        <Col lg={4} md={4} sm={4} xs={4}>
                                            <MessageCircle className='mt-2' onClick={() => setModalShow(true)} /> <br />
                                            <MyVerticallyCenteredModal
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            />
                                        </Col>
                                        <Col lg={4} md={4} sm={4} xs={4}>
                                            <span onClick={(e) => getLikeCount(e, post?._id)}>
                                                <i class="fa-solid fa-trash"></i>
                                            </span>
                                        </Col>
                                    </Row> */}
                                </Card.Body>
                            </Card>

                        </>
                        :
                        <p>Loading</p>
                }
            </div>
            <ToastContainer />
        </div>

    )
}

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Comments
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <b>Hari : <span style={{ fontWeight: 'normal' }}>nice pic</span></b>

                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Row className='w-100'>
                    <div className='w-100'>
                        <label className='' />
                        <input type='text' className='w-75 input' placeholder=' Comments' />
                        <Send className='w-25' />
                    </div>
                </Row>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default PublicCard