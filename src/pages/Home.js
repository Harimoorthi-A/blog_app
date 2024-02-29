import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
import Verticalbar from '../components/Verticalbar';
import Public from '../components/Public';
import { allPostApi, getUnameApi } from '../service/allApi';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import PublicCard from '../components/PublicCard';

function Home() {

  const [allPosts, setAllPosts] = useState([])


  const getAllPosts = async () => {
    const result = await allPostApi()
    setAllPosts(result.data)
    // console.log(result.data);
  }
  
  useEffect(() => {
    getAllPosts()
  }, [setAllPosts])

  // const [allUname, setAllUname] = useState([]);

  // const getAllPostsUname = async () => {
  //     const respond = await getUnameApi()
  //     setAllUname(respond.data)
  //     console.log(respond.data);
  // }

  // useEffect(() => {
  //     getAllPostsUname()
  // }, [])
  // console.log(allUname);

  // console.log(allPosts);
  // console.log(searchData);

  return (
    <div>
      <Row style={{ height: '100vh' }}>
        <Col lg={1} md={1} sm={1} xs={1}>
          <Verticalbar />
        </Col>
        <Col lg={2} md={2} sm={2} xs={2}>
        </Col>
        <Col lg={7} md={7} sm={7} xs={7} style={{ height: '100vh' }}>
          {allPosts ? allPosts.map(i => (
            <PublicCard post={i}></PublicCard>
          )) : <h1>No projects uploaded yet</h1>
          }
        </Col>
        <Col lg={2} md={2} sm={2} xs={2}>
        </Col>
      </Row>

    </div>
  )
}

export default Home