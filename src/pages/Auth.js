import React, { useState } from "react";
import { Row, Col, Container, Button, InputGroup } from "react-bootstrap";
import Header from "../components/Header";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link, json, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginApi, registerApi } from "../service/allApi";

function Auth({ register }) {
  // login $ register form
  const isRegisterForm = register ? true : false;

  // navigate
  const navigate = useNavigate();

  // frontend form values
  const [signalusers, setSignalusers] = useState({
    useName: "",
    email: "",
    password: "",
  });

  // state to check validation
  const [unameValid, setUnameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [pswValid, setPswValid] = useState(false);

  const setInputs = (e) => {
    const { name, value } = e.target;

    if (name == "userName") {
      if (value.match(/^[a-zA-Z ]+$/)) {
        setUnameValid(false);
      } else {
        setUnameValid(true);
      }
    }
    if (name == "email") {
      if (
        value.match(
          /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        )
      ) {
        setEmailValid(false);
      } else {
        setEmailValid(true);
      }
    }
    if (name == "password") {
      if (value.match(/^[0-9a-zA-Z@ ]{3,8}$/)) {
        setPswValid(false);
      } else {
        setPswValid(true);
      }
    }
    setSignalusers({ ...signalusers, [name]: value });
  };
  // console.log(signalusers);

  // register
  const handleRegister = async (e) => {
    e.preventDefault();
    const { userName, email, password } = signalusers;
    if (!userName || !email || !password) {
      alert("please fill all data");
    } else {
      const result = await registerApi(signalusers);
      if (result.status == 200) {
        toast.success(
          `${result.data.userName} your account has been created successfully`,
          {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        // reset user state
        setSignalusers({ userName: "", email: "", password: "" });
        navigate("/login");
      } else {
        toast.error(result.response.data, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };
  // console.log();

  // login
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = signalusers;
    if (!email || !password) {
      alert("please fill all data");
    } else {
      const result = await loginApi(signalusers);
      if (result.status == 200) {
        // token in session storage
        // console.log(result.data.token);
        // store user data in local storage
        localStorage.setItem("currentUser", JSON.stringify(result.data.user));
        localStorage.setItem("currentId", result.data.user._id);
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("userName", result.data.user.userName);

        toast.success(`login success`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // reset user state
        setSignalusers({ email: "", password: "" });
        navigate("/profile");
      } else {
        toast.error(result.response.data, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <div>
      <Row className="">
        <Col
          lg={4}
          md={4}
          sm={4}
          xs={4}
          className="ps-4"
          style={{ backgroundColor: "#5FBDFF", height: "100vh" }}
        >
          <Row className="mt-5" style={{ paddingTop: "10%" }} id="logText">
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              <i class="fa-solid fa-house me-3"></i>Home
            </a>
            <h1 id="glowText" className="mt-5">
              Welcome{" "}
            </h1>
            {isRegisterForm ? (
              <>
                <h1>Let's get you set up</h1>
                <p>
                  It should only take a couple of minutes to create your account
                </p>
                <b>Lets START</b>
              </>
            ) : (
              <>
                <h1>Back !!</h1>
                <h1>Let's get you set up</h1>
                <p>
                  It should only take a couple of minutes to create your account
                </p>
                <b>Lets START</b>
              </>
            )}
          </Row>
        </Col>
        <Col
          lg={8}
          md={8}
          sm={8}
          xs={8}
          className="ps-4"
          id="logPage"
          style={{ backgroundColor: "white", height: "100vh" }}
        >
          <Row className="mt-5" style={{ paddingTop: "10%" }}>
            {isRegisterForm ? <h5>Sign up</h5> : <h5>Sign in</h5>}
          </Row>
          <hr />
          <div>
            {isRegisterForm && (
              <>
                <InputGroup className="mb-3 mt-4">
                  <Form.Control
                    placeholder="Enter Your Name"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    name="userName"
                    onChange={(e) => setInputs(e)}
                    value={signalusers.userName}
                  />
                </InputGroup>
                {unameValid && (
                  <p className="text-danger">*include characters only</p>
                )}
              </>
            )}

            <InputGroup className="mb-3 mt-4">
              <Form.Control
                placeholder="Enter Your E-mail"
                aria-label="Recipient's email"
                aria-describedby="basic-addon2"
                name="email"
                onChange={(e) => setInputs(e)}
                value={signalusers.email}
              />
            </InputGroup>
            {emailValid && <p className="text-danger">Email is not valid</p>}

            <InputGroup className="mb-3 mt-4">
              <Form.Control
                placeholder="Enter Your Password"
                aria-label="Recipient's password"
                aria-describedby="basic-addon2"
                name="password"
                type="password"
                onChange={(e) => setInputs(e)}
                value={signalusers.password}
              />
            </InputGroup>
            {pswValid && <p className="text-danger">Invalid password</p>}
          </div>
          <Row className="mt-3 mb-3">
            <Col lg={3} md={3} sm={3} xs={3}></Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              {isRegisterForm ? (
                <button
                  className="button w-100"
                  id=""
                  onClick={(e) => handleRegister(e)}
                >
                  <span>Sign up</span>
                </button>
              ) : (
                <button
                  className="button w-100"
                  onClick={(e) => handleLogin(e)}
                >
                  <span>Sign in</span>
                </button>
              )}
            </Col>
            <Col lg={3} md={3} sm={3} xs={3}></Col>
          </Row>
          <hr />
          <Row className="mt-3 mb-3 text-center">
            {isRegisterForm ? (
              <>
                <b>Already have an account ?</b>
                <a href="/login" className="">
                  Sign in
                </a>
              </>
            ) : (
              <>
                <b>New to SIGNAL ?</b>
                <a href="/register" className="">
                  Sign up
                </a>
              </>
            )}
          </Row>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}

export default Auth;
