import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { AlertModal } from "./Modal";
import { ToastContainer } from "react-toastify";
import { FaSun, FaMoon, FaTimes, FaHome } from "react-icons/fa";
import SignUpInput from "./FormInputs";
import "react-toastify/dist/ReactToastify.css";
import "./SignUpForm.css";
import "./SignUpForm.scss";
import axios from "axios"

const SignUpForm = ({ activeSignup, setActiveSignup, userRole }) => {
  const [modalTxt, setModalTxt] = useState("");
  const [inputs, setInputs] = useState({

 
firstName : " ",
lastName:" " ,
mobileNo:" ",
password:" ",
email:" ",

});
  const [isChecked, setIschecked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const [progress, setProgress] = useState(0);

  let navigate = useNavigate();

  // This function handles form transitions on light and dark mode
  const TransitionHandler = () => {
    const allElement = document.querySelectorAll("*");
    allElement.forEach((el) => {
      el.classList.add("form-transition");
      setTimeout(() => {
        el.classList.remove("form-transition");
      }, 1000);
    });
  };

  // This function handles onfocus and onblur mode on form inputs
  const FocusBlur = () => {
    const inputs = document.querySelectorAll(".input-textarea");
    inputs.forEach((ipt) => {
      ipt.addEventListener("focus", () => {
        ipt.parentNode.classList.add("focus");
        ipt.parentNode.classList.add("not-empty");
      });

      ipt.addEventListener("blur", () => {
        if (ipt.value == "") {
          ipt.parentNode.classList.remove("not-empty");
          ipt.parentNode.classList.remove("focus");
        }
      });
    });
  };

  const HandleNavigate = () => {
    navigate("/");
  };

  const HandleTheme = (event) => {
    TransitionHandler();
  };

  useEffect(() => {
    FocusBlur();
  }, []);

  //input error state
  const [error, setError] = useState({
    fNameErr: "",
    lNameErr: "",
    emailErr: "",
    passErr: "",
    confirmErr: "",
    mobileErr: "",
    termsErr: "",
  });

  // handles onchange on forms inouts
  const handleChange = (e) => {

    e.preventDefault();
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  //submit form and creating account
  const handleCreateAccount = (e) => {
    e.preventDefault();
  
 const url = "http://localhost/fetch.php";
 const data = new FormData;
 data.append('firstName',inputs.firstName);
 data.append('lastName',inputs.lastName);
 data.append('password',inputs.password);
 data.append('email',inputs.email);
 data.append('mobile',inputs.mobileNo);
 alert(`An authentication code will be sent to ${inputs.email}  `) ;
//send data to PHP seever to handle registration
  axios.post(url,data)
  //handle response
   .then((Response) => {
    alert(Response.data);
    
    window.location.href = ` http://localhost/login-system-main/verification.php?email=${inputs.email}`;

       })
        //handle server error 
    .catch((error)=>{
        console.error("registration error:", error);
        alert('A sever error has occured');
       
        //stop code from executing if an error occur
        return;
        throw error;

       
    });
   // redirect user to authentication page
    

  };

  // handles progress state
  let newprogress = 16.67;

  // validating inputs and error state
  useEffect(() => {
    const nameRegex = /^[A-Z]+$/i;
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
    const numRegex = /^[0-9]+$/;

    if (inputs.firstName) {
      function validateFName() {
        inputs.firstName.length < 3 ||
        inputs.firstName.length > 15 ||
        !nameRegex.test(inputs.firstName)
          ? setError((prevErr) => ({
              ...prevErr,
              fNameErr:
                "Name should have a min of (3), max of (15) characters and must contain only letter A-Z!",
            })) || setProgress(0)
          : setError((prevErr) => ({ ...prevErr, fNameErr: null })) ||
            setProgress(newprogress);
      }
      inputs.firstName && validateFName();
    }
    if (inputs.lastName) {
      function validateLName() {
        inputs.lastName.length < 3 ||
        inputs.lastName.length > 12 ||
        !nameRegex.test(inputs.lastName)
          ? setError((prevErr) => ({
              ...prevErr,
              lNameErr:
                "Name should have a min of (3), max of (15) characters and must contain only letter A-Z!",
            })) || setProgress(newprogress)
          : setError((prevErr) => ({ ...prevErr, lNameErr: null })) ||
            setProgress(newprogress * 2);
      }
      inputs.lastName && validateLName();
    }
    if (inputs.email) {
      function validateEmail() {
        !emailRegex.test(inputs.email)
          ? setError((prevErr) => ({
              ...prevErr,
              emailErr: "Please ensure you enter a valid email",
            })) || setProgress(newprogress * 2)
          : setError((prevErr) => ({ ...prevErr, emailErr: null })) ||
            setProgress(newprogress * 3);
      }
      inputs.email && validateEmail();
    }
    if (inputs.password) {
      function validatePassword() {
        inputs.password.length < 6 ||
        inputs.password.length > 15 ||
        !passRegex.test(inputs.password)
          ? setError((prevErr) => ({
              ...prevErr,
              passErr:
                "Password should have a min of (6), max of (15) characters must contain at least 1 Uppercase and Lowercase letter",
            }))
          : setError((prevErr) => ({ ...prevErr, passErr: null }));
      }

      // validating confirm-password inputs
      function confirmPassword() {
        inputs.confirm !== inputs.password
          ? setError((prevErr) => ({
              ...prevErr,
              confirmErr:
                "Ensure password corresponds to previous  password entered ",
            })) || setProgress(newprogress * 3)
          : setError((prevErr) => ({ ...prevErr, confirmErr: null })) ||
            setProgress(newprogress * 4);
      }

      inputs.password && validatePassword();
      inputs.confirm && confirmPassword();
    }
    if (inputs.mobileNo) {
      function validateMobileNum() {
        !numRegex.test(inputs.mobileNo) || inputs.mobileNo.length < 6
          ? setError((prevErr) => ({
              ...prevErr,
              mobileErr:
                "Mobile-No should have at least six(6) digits and must contains only numbers 0-9",
            })) || setProgress(newprogress * 4)
          : setError((prevErr) => ({ ...prevErr, mobileErr: null })) ||
            setProgress(newprogress * 5);
      }
      inputs.mobileNo && validateMobileNum();
    }
    isChecked
      ? setError((prevErr) => ({
          ...prevErr,
          termsErr: null,
        }))
      : setError((prevErr) => ({
          ...prevErr,
          termsErr:
            "Please click the above button to Accept our terms of service",
        }));

    if (
      error.confirmErr === null &&
      error.emailErr === null &&
      error.fNameErr === null &&
      error.lNameErr === null &&
      error.mobileErr === null &&
      error.passErr === null &&
      isChecked === true
    ) {
      setIsError(false) || setProgress(newprogress * 6);
    } else {
      setIsError(true);
    }
  }, [
    inputs,
    isChecked,
    error.confirmErr,
    error.emailErr,
    error.fNameErr,
    error.lNameErr,
    error.mobileErr,
    error.passErr,
  ]);

  let progressNum = Math.trunc(progress); // returns the exact value of progress without decimal number

  return (
    <>
      <section
        style={{
          transform: activeSignup && `translateX(${0}%)`,
          display: message && "none",
          transition: "0.9s ease-in-out",
        }}
        className="sign-up form-transition"
      >
        <ToastContainer position="top-center" reverseOrder={false} />
        <section className={"Forms light-theme "}>
          <header id="head1">
            <section className="signupforms">
              <div className="signupform-container">
                <ul
                  style={{
                    marginTop: "0.5rem",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <li>
                    <span
                      className="formnav-link"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "var(--text-color)",
                        cursor: "pointer",
                      }}
                      onClick={() => setActiveSignup(false)}
                    >
                      <span style={{ alignSelf: "center", textAlign: "left" }}>
                        Close Form
                      </span>
                      <FaTimes className="closeform-icon" />
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </header>

          <header id="head2">
            <section className="signupforms">
              <div className="signupform-container">
                <ul
                  style={{
                    marginTop: "0.5rem",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <li>
                    <span
                      onClick={HandleNavigate}
                      className="formnav-link"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "var(--text-color)",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ alignSelf: "center", textAlign: "left" }}>
                        Home
                      </span>

                      <FaHome className="closeform-icon" />
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </header>

          <main>
            <section className="signupform-contact">
              <div className="signupform-container">
                <div className="form-left">
                  <div className="form-left-wrapper">
                    <div className="form-left-heading">
                      <h4>Nigerian military school</h4>
                      <h1>Online compedium</h1>
                      <p className="form-text">
                        fill in your information for
                        <a href="#">
                          {userRole === "basic"
                            ? " basic plan registration"
                            : userRole === "premium"
                            ? " premium plan registration"
                            : userRole === "advanced"
                            ? " advanced plan registratiom"
                            : null}
                        </a>
                      </p>

                      <p className="form-text" style={{ marginTop: "0.4rem" }}>
                        plan price
                        <a href="#">
                          {userRole === "basic"
                            ? " ₦3500"
                            : userRole === "premium"
                            ? " ₦5000"
                            : userRole === "advanced"
                            ? " ₦7000"
                            : null}
                        </a>
                      </p>
                    </div>

                    <form
                      method="post"
                      className="form-left-form"
                      onSubmit={handleCreateAccount}
                    >
                      <div className="form-input-column">
                        <SignUpInput
                          type="text"
                          id="firstName"
                          placeholder=""
                          label="First Name"
                          handleChange={handleChange}
                          error={error.fNameErr}
                          className=""
                          name="firstName"
                        />

                        <SignUpInput
                          type="text"
                          id="lastName"
                          placeholder=""
                          label="Last Name"
                          handleChange={handleChange}
                          error={error.lNameErr}
                          className=""
                          name="lastName"
                        />
                      </div>

                      <SignUpInput
                        type="email"
                        id="email"
                        placeholder=""
                        label="Email"
                        handleChange={handleChange}
                        error={error.emailErr}
                        className=""
                        name="email"
                      />
                      <div className="form-input-column">
                        <SignUpInput
                          type="password"
                          id="password"
                          placeholder=""
                          label="Password"
                          handleChange={handleChange}
                          error={error.passErr}
                          className=""
                          name="password"
                        />

                        <SignUpInput
                          type="password"
                          id="confirm"
                          placeholder=""
                          label="Confirm Password"
                          handleChange={handleChange}
                          error={error.confirmErr}
                          className=""
                        />
                      </div>

                      <div className="form-input-column">
                        <SignUpInput
                          type="tel"
                          id="mobileNo"
                          placeholder=""
                          label="Phone Number"
                          handleChange={handleChange}
                          error={error.mobileErr}
                          className=""
                          name="mobileNo"
                        />

                        <SignUpInput
                          type="tel"
                          id="referral"
                          placeholder=""
                          label="Referral (optional)"
                          handleChange={handleChange}
                          className=""
                        />
                      </div>

                      {userRole === "agency" ? (
                        <SignUpInput
                          type="text"
                          id="coupon"
                          placeholder=""
                          label="Coupon code (optional)"
                          handleChange={handleChange}
                          className=""
                        />
                      ) : null}

                      <div className="form-check-box">
                        <div className="check-box-wrapper">
                          <input
                            className="terms-check"
                            onChange={() => setIschecked(!isChecked)}
                            type="checkbox"
                            id="model"
                            name="terms"
                            checked={inputs.terms}
                          />
                          <label htmlFor="model">
                            I agree to the Policy & Terms of Service
                          </label>
                        </div>
                        <p className="form-error-text">{error.termsErr}</p>
                      </div>

                      <div className="form-buttons ">
                        <div
                          className="progress-wrapper"
                          style={{
                            border: `${
                              progressNum === 100
                                ? "1px solid #808080 "
                                : "1px solid var(--main-color)"
                            }`,
                          }}
                        >
                          <div
                            className="form-btn progress-btn"
                            style={{
                              width: `${progressNum}%`,
                              height: "100%",
                              position: "relative",
                              backgroundColor:
                                progressNum === 100
                                  ? "#808080"
                                  : "var(--main-color)",
                            }}
                          >
                            <span style={{ position: "absolute" }}>
                              {progressNum}%
                            </span>
                          </div>
                        </div>

                        <button
                          className="form-btn "
                          style={{
                            backgroundColor: !isError
                              ? "var(--main-color)"
                              : "#808080",
                            color: "#fff",
                          }}
                          onClick={() => {
                            isError && setModalTxt("sign-up-Err");
                          }}
                          type="submit"
                        >
                          Continue
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="form-right">
                  <img
                    src={
                      userRole === "basic"
                        ? "/images/form-image/nv.jpg"
                        : userRole === "premium"
                        ? "/images/form-image/nms-lohg.jpg"
                        : userRole === "advanced"
                        ? "/images//form-image/Bg-for-army2.jpg"
                        : null
                    }
                    alt={`${userRole} img`}
                  />
                </div>
              </div>
            </section>
          </main>
        </section>
      </section>
      <AlertModal
        modalTxt={modalTxt}
        setModalTxt={setModalTxt}
        userRole={userRole}
        message={message}
        setMessage={setMessage}
      />
    </>
  );
};
export default SignUpForm;
