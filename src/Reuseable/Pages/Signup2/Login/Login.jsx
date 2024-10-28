import React, { useState } from "react";
import "./Login.scss";
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaGoogle,
  FaLinkedin,
  FaLock,
  FaTwitter,
} from "react-icons/fa";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect } from "react";
import { AlertModal } from "../Sign-Up/signUpForm/Modal";
import SignupSection from "../Sign-Up/Signup";
import SignUpForm from "../Sign-Up/signUpForm/SignUpForm";

const LoginSignup = () => {
  const [isActive, setIsActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordsvg, setPasswordSvg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState("");
  const [modalTxt, setModalTxt] = useState("");
  // For Signup
  const [userRole, setUserRole] = useState("");
  const [activeSignup, setActiveSignup] = useState(false);

  // function handles onfocus and onblur mode on form inputs
  const FocusBlur = () => {
    const focusinputs = document.querySelectorAll(".signinput-textarea");
    focusinputs.forEach((ipt) => {
      ipt.addEventListener("focus", () => {
        ipt.parentNode.classList.add("focus");
        ipt.parentNode.classList.add("not-empty");
        setPasswordSvg(true);
      });

      ipt.addEventListener("blur", () => {
        if (ipt.value == "") {
          ipt.parentNode.classList.remove("not-empty");
          ipt.parentNode.classList.remove("focus");
          setPasswordSvg(false);
        }
      });
    });
  };

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
    // const { isFetching } = useSelector((state) => state.user);
  };

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    FocusBlur();
  }, []);

  return (
    <>
      <section className="signups-section light-theme">
        <AlertModal
          modalTxt={modalTxt}
          setModalTxt={setModalTxt}
          message={message}
        />

        <div
          className={
            isActive ? "signups-container sign-up-mode" : "signups-container"
          }
        >
          <div className="signups-forms">
            <div
              className={
                isActive ? "signin-signup effect-mode signform-mtop" : "signin-signup signform-mtop"
              }
            >
              <form className="sign-form sign-in-form " onSubmit={handleLogin}>
                <h2 className="sign-title">Student Login</h2>
                {message && (
                  <p className="login-error">{!message?.message && message}</p>
                )}

                <section className="signinput-section">
                  <div className="signinput-container">
                    <div className="signinput-wrapper">
                      <input
                        onChange={handleChange}
                        type="email"
                        id="email"
                        className="signinput-textarea"
                        name="email"
                        placeholder=""
                        required
                        spellCheck={false}
                        autoComplete="off"
                      />

                      <label htmlFor="email">Email</label>
                 
                    </div>
                  </div>

                  <div className="signinput-container">
                    <div className="signinput-wrapper ">
                      <input
                        onChange={handleChange}
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="signinput-textarea"
                        placeholder=""
                        required
                        spellCheck={false}
                        autoComplete="off"
                      />
                      <label htmlFor="password">Password</label>
                    </div>

                    <div className="view-passwords ">
                      {showPassword ? (
                        <FaEye
                          onClick={() => setShowPassword((prev) => !prev)}
                          className={passwordsvg ? "passwordsvg" : ""}
                        />
                      ) : (
                        <FaEyeSlash
                          onClick={() => setShowPassword((prev) => !prev)}
                          className={passwordsvg ? "passwordsvg" : ""}
                        />
                      )}
                    </div>
                  </div>

                  <div className="signinput-container">
                    <div className="signinput wrapper">
                      <div
                        className="remember-check"
                        style={{
                          
                        }}
                      >
                        <label
                          style={{
                            display: "flex",
                            gap: "0.5rem",
                          }}
                        >
                          <input type="checkbox" name="remember" />
                          <p className="back-link"> Remember me</p>
                        </label>

                        <a className="back-link">Forget your password?</a>
                      </div>
                    </div>
                  </div>
                </section>

                <button className="sign-btn">
                  {" "}
                  {isLoading ? "Please wait..." : "Login"}
                </button>

                <a
                  href="/"
                  className="back-link"
                  style={{ alignSelf: "flex-end" }}
                >
                  Back to home
                </a>
              </form>

              <SignupSection
                activeSignup={activeSignup}
                userRole={userRole}
                setActiveSignup={setActiveSignup}
                setUserRole={setUserRole}
              />
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="sign-content">
                <h3>New candidate ? </h3>
                <p>
                  The nms online compedium has a learning and practice system
                  which is designed to further prepare candidates throughout
                  their screening process.
                </p>
                <button
                  className="sign-btn transparent"
                  id="sign-up-btn"
                  onClick={handleClick}
                >
                  Sign up
                </button>
              </div>
            </div>

            <div className="panel right-panel">
              <div className="sign-content">
                <h3>Welcome back! Comrade </h3>
                <p>
                  Good to see you again, consistent learning is essential to
                  your exams success.
                </p>
                <button
                  className="sign-btn transparent"
                  id="sign-in-btn"
                  onClick={handleClick}
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 
                      signup section starts
      ...because of the styles the signupform and loginform is now linked together 
      in one page titled "LoginSignup" and the route titled "/login" or "/signup" 

      */}
        <SignUpForm
          activeSignup={activeSignup}
          userRole={userRole}
          setActiveSignup={setActiveSignup}
        />
      </section>
    </>
  );
};

export default LoginSignup;
