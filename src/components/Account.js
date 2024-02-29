import React, { useEffect, useState } from 'react'
import './Account.css';
import Verticalbar from './Verticalbar';
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Likebtn from './Likebtn';
import { Heart, MessageCircle } from 'react-feather';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { updateProfile } from '../service/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../service/baseUrl';
import { useNavigate } from 'react-router-dom';
import ViewMyPost from './ViewMyPost';

function Account({ userName }) {

    const [modalShow, setModalShow] = React.useState(false);

    const [show, setShow] = useState(false);

    // update
    const [preview, setPreview] = useState("")
    const [token, setToken] = useState()
    const [existingImage, setExistingImage] = useState("")
    const [update, setUpdate] = useState("")


    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const [profile, setProfile] = useState({
        user: localStorage.getItem("currentUser"), image: "", description: ""
    })


    useEffect(() => {

        const userData = (JSON.parse(localStorage.getItem("currentUser")))

        if (userData) {
            setProfile({ ...profile, user: userData?.userName, image: "", description: userData.description })
            setExistingImage(userData.profile)
        }
    }, [update])

    useEffect(() => {
        if (profile.image) {
            setPreview(URL.createObjectURL(profile.image))
        }
        else {
            setPreview("")
        }
    }, [profile.image])
    // console.log(preview);


    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
        }
    }, [])
    // console.log(token);
    // console.log(profile.data);

    const setData = (e) => {
        const { value, name } = e.target
        setProfile({ ...profile, [name]: value })
    }

    // console.log(profile);
    // console.log(preview);

    const handleUpdate = async (e) => {
        e.preventDefault()
        // console.log(profile);
        const { user, image, description } = profile
        // if (!user || !image || !description) {
        //     alert("plz fill all datas")
        // }
        // else {
        // api call
        // id
        if (localStorage.getItem("currentId")) {
            const id = localStorage.getItem("currentId")
            // console.log(id);

            // headers
            const reqHeader = {
                "Content-Type": "multipart/form-data",
                "access_token": `Bearer ${token}`
            }
            // console.log(reqHeader);

            // body
            const reqBody = new FormData()
            reqBody.append("userName", user)
            reqBody.append("profile", image ? image : existingImage)
            reqBody.append("description", description)
            // console.log(reqBody);

            const response = await updateProfile(reqBody, reqHeader, id)
            // console.log(response);
            if (response.status == 200) {
                // getProfileApi()
                toast.success(`Profile updated`, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                // refresh profile data
                // getProfile()
                // update new username in local storage
                localStorage.setItem("currentUser", JSON.stringify(response.data))
                setUpdate(response.data)
                handleClose()
            }
            else {
                alert("profile update failed");
            }

        }

        // }
    }

    useEffect(()=>{
    },[setUpdate])


    return (
        <div>
            <Row style={{ height: '100vh' }}>
                <Col lg={1} md={1} sm={1} xs={1}>
                    <Verticalbar />
                </Col>
                <Col lg={9} md={9} sm={9} xs={9} className='ps-5'>
                    <Row id='profile-top' className='mt-5'>
                        <Row>
                            <Col lg={1} md={1} sm={1} xs={1}>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4} className='mt-4 mb-4 text-center'>
                                {
                                    existingImage != " " ?
                                        <>
                                            <img
                                                alt=''
                                                src={`${BASE_URL}/uploads/${existingImage}`}
                                                width={100}
                                                height={100}
                                                className='shadow-lg'
                                            />
                                        </>
                                        :
                                        <img
                                            alt=''
                                            src="https://i.postimg.cc/PJkRn7RX/dummy-image.jpg"
                                            width={100}
                                            height={100}
                                        />

                                }
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={6}>
                                <div className='mt-3'>
                                    <h1>{profile.user}</h1>
                                </div>
                                <div className='mt-3'>
                                    <p>{profile?.description}</p>
                                </div>
                            </Col>
                            <Col lg={1} md={1} sm={1} xs={1}>
                            </Col>
                        </Row>
                    </Row>
                    <br />
                    <Row id='profile-bottom'>
                        <ViewMyPost></ViewMyPost>
                    </Row>

                </Col>


                <Col lg={2} md={2} sm={2} xs={2} >
                    <div className='mt-5'>
                        <button className='Button' onClick={handleShow}>
                            Edit Profile
                            <i class="fa-solid fa-pen-to-square ms-2"></i>
                        </button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Edit Profile</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Container>
                                    <Row className='text-center'>
                                        <label htmlFor='img1' className='text-center'>
                                            {
                                                existingImage != " " ?
                                                    <img
                                                        alt=''
                                                        src={preview ? preview : `${BASE_URL}/uploads/${existingImage}`}
                                                        width='100%'
                                                        height='250px'
                                                    />
                                                    :
                                                    <img
                                                        alt=''
                                                        src={preview ? preview : "https://i.postimg.cc/SN86fk1s/dummy-man-570x570.png"}
                                                        width='100%'
                                                        height='250px'
                                                    />
                                            }
                                        </label>
                                        <input id='img1' onChange={(e) => setProfile({ ...profile, ["image"]: e.target.files[0] })}
                                            type='file' style={{ display: 'none' }} />
                                    </Row>
                                    <Row className='mt-5'>
                                        <Col lg={5} md={5} sm={5} xs={5}>
                                            Username :
                                        </Col>
                                        <Col lg={7} md={7} sm={7} xs={7}>
                                            <input type='text' className='form-control' value={profile.user} onChange={(e) => setData(e)} name='user' id='u1' />
                                        </Col>
                                    </Row>
                                    <Row className='mt-5'>
                                        <Col lg={5} md={5} sm={5} xs={5}>
                                            Describe  Yourself :
                                        </Col>
                                        <Col lg={7} md={7} sm={7} xs={7}>
                                            <input type='text' className='form-control' value={profile?.description} id='u2' onChange={(e) => setData(e)} name="description" ></input>
                                        </Col>
                                    </Row>

                                </Container>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="success" onClick={(e) => handleUpdate(e)}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </Col>
            </Row>
            <ToastContainer />

        </div>
    )
}



export default Account