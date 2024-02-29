import React, { useEffect, useState } from 'react'
import Verticalbar from './Verticalbar'
import { Row, Col, Button } from 'react-bootstrap'
import './Add_a_post.css';
import { addPostApi } from '../service/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Add_a_post() {

    // state for image preview
    const [preview, setPreview] = useState("")

    // token
    const [token, setToken] = useState("")

    const [postInputs, setPostInputs] = useState({
        postImage: "", description: "", likeCount:"",userName:localStorage.getItem("userName")
    })

    const setInputs = (e) => {
        const { value, name } = e.target
        setPostInputs({ ...postInputs, [name]: value })
    }
    // console.log(projectInputs);

    // navigate
    const navigate = useNavigate()

    useEffect(() => {
        if (postInputs.postImage) {
            setPreview(URL.createObjectURL(postInputs.postImage))
        }
        else {
            setPreview("")
        }
    }, [postInputs.postImage])

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
        }
        else {
            setToken("")
        }
    }, [])

    // console.log(token);

    const handleAdd = async (e) => {
        e.preventDefault()
        const { postImage, description, likeCount, userName } = postInputs

        if (!postImage || !description) {
            alert("please fill all datas")
        }
        else {
            // header
            const headerConfig = {
                "Content-Type": "multipart/form-data",
                "access_token": `Bearer ${token}`
            }

            // body
            const reqBody = new FormData()
            reqBody.append("description", description)
            reqBody.append("postImage", postImage)
            reqBody.append("likeCount", likeCount)
            reqBody.append("userName", userName)

            const result = await addPostApi(reqBody, headerConfig)
            if (result.status == 200) {

                // change context share
                // setAddUpdate(result.data)

                toast.success(`${result.data.title} added!`, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })

                // reset 
                setPostInputs({ ...postInputs, projectImage: "", description: "", likeCount:"" })
                navigate('/profile')
            }
            else {
                alert(`${result.response.data} This is the error`)
                // console.log(result);
            }
        }
    }


    return (
        <div>
            <Row style={{ height: '100vh' }}>
                <Col lg={1} md={1} sm={1} xs={1}>
                    <Verticalbar />
                </Col>
                <Col lg={9} md={9} sm={9} xs={9}>
                    <div id='posting-page' className='mt-5 mb-5'>
                        <Row className='mt-3'>
                            <label htmlFor='img1' className='text-center'>
                                <img
                                    alt=''
                                    src={preview?preview:'https://i.postimg.cc/90xJ9xNC/dummy-image-square.jpg'}
                                    width='500px'
                                    height='500px'
                                />
                            </label>
                            <input id='img1' onChange={(e) => setPostInputs({ ...postInputs, ["postImage"]: e.target.files[0] })} type='file' style={{ display: 'none' }} />
                        </Row>
                        <Row className='mt-5 ps-5 pe-5'>
                            <input type='text'  onChange={(e) => setInputs(e)} value={postInputs.description} name='description' className='form-control input' placeholder='Write about it...' height='fit-content' />
                        </Row>
                        <Row className='mt-3 text-center'>
                            <Col lg={5} md={5} sm={5} xs={5}>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4}>
                            </Col>
                            <Col lg={2} md={2} sm={2} xs={2}>
                                <button className='' id='Button' onClick={(e) => handleAdd(e)}>
                                    POST
                                </button>
                            </Col>
                            <Col lg={1} md={1} sm={1} xs={1}>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={2} md={2} sm={2} xs={2}>
                </Col>
            </Row>
            <ToastContainer />

        </div>
    )
}

export default Add_a_post