import React from "react";
import { Link } from "react-router-dom";

const Otp = () => {
  return (
    <>
      <div className="hold-transition register-page">
        <div className="register-box text-center">
          <div className="register-logo">
            <a href="../../index2.html">
              <b>Admin</b>LTE
            </a>
          </div>

          <div className="card">
            <div className="card-body register-card-body">
              <h4 className="text-start">OTP Verification</h4>
              <p className="text-darkGrey text-start">
                An OTP has benn sent to your mobile number
              </p>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter OTP"
                  maxLength={6}
                />
                <p className="pt-3">
                  There might be some delay in recieving the OTP due to heavy
                  traffic
                </p>
                <Link to="/login">
                  <button type="button" className="btn btn-primary">
                    Verify & Proceed
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
