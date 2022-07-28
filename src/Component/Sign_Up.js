import axios from "axios";
import React, { useState } from "react";
import { Link } from "react";
import { Navigate } from "react-router-dom";
import Data_Table from "./Data_Table";
import Product_page from "./Product_page";

const Sign_Up = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [retypePassword, setretypePassword] = useState("");
  const [data, setdata] = useState([]);
  const [first, setfirst] = useState(false);
  const [redirect, setRedirect] = useState(false)

  var info;

  const send = () => {
    let info = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:5000/userRegister", {
        name: name,
        email: email,
        password: password,
      })
      .then(function (response) {
        // console.log(response.data);
        info = response.data;
        console.log(info);
        if(info)
        {
          setRedirect(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    setname("");
    setemail("");
    setpassword("");
    setretypePassword("");

    // console.log(info);
    setdata([...data, info]);
    setfirst(true);
    // console.log(data);
  };
  if (redirect) {
    return <Navigate to="/product-page" />;
    // return <Product_page/>;
  }
  return (
    <>
    <h1>drs</h1>
      <div className="hold-transition register-page">
        <div className="register-box text-center">
          <div className="register-logo">
            <a href="../../index2.html">
              <b>Admin</b>LTE
            </a>
          </div>

          <div className="card">
            <div className="card-body register-card-body">
              <p className="login-box-msg">Register a new membership</p>

              <form action="../../index.html" method="post">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Retype password"
                    value={retypePassword}
                    onChange={(e) => {
                      setretypePassword(e.target.value);
                    }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="terms"
                        value="agree"
                      />
                      <label htmlFor="agreeTerms">
                        I agree to the <a href="#">terms</a>
                      </label>
                    </div>
                  </div>

                  <div className="col-4">
                    
                      <button
                        type="button"
                        className="btn btn-primary btn-block"
                        onClick={send}
                      >
                        Register
                      </button>
                    
                  </div>
                </div>
              </form>

              <div className="social-auth-links text-center">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2"></i>
                  Sign up using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2"></i>
                  Sign up using Google+
                </a>
              </div>

              <a href="login.html" className="text-center">
                I already have a membership
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign_Up;
