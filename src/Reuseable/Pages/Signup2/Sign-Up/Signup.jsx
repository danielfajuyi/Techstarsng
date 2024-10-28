import React from "react";
import "./Signup.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const SignupBtn = ({ btnText, setActiveSignup, setUserRole, style }) => {
  const handleUserRole = () => {
    switch (btnText) {
      case "Basic Candidate Dashboard":
        setUserRole("basic");
        setActiveSignup(true);
        break;
      case "Premium Candidate Dashboard":
        setUserRole("premium");
        setActiveSignup(true);
        break;
      case "Advanced Candidate Dashboard":
        setUserRole("advanced");
        setActiveSignup(true);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <button onClick={handleUserRole} className={`signup-button  ${style}`}   >
        {btnText}
      </button>
    </>
  );
};

const SignupSection = ({
  userRole,
  setUserRole,
  activeSignup,
  setActiveSignup,
}) => {
  return (
    <>
      <section className="sign-form sign-up-form ">
        <h2 className="sign-title" style={{marginTop: "1.5rem"}}>Student Signup</h2>

        <p
          className="info-text"
          style={{ fontSize: "15px", textAlign: "center" }}
        >
          Choose a plan to acesss your online compedium dashboards
        </p>
        <div className="sign-btn-section">
          <SignupBtn
            btnText={"Basic Candidate Dashboard"}
            setActiveSignup={setActiveSignup}
            setUserRole={setUserRole} 
            style={"sign-basic"}
          
          />
          <SignupBtn
            btnText={"Premium Candidate Dashboard"}
            setActiveSignup={setActiveSignup}
            setUserRole={setUserRole}
            style={"sign-premium"}
          />
          <SignupBtn
            btnText={"Advanced Candidate Dashboard"}
            setActiveSignup={setActiveSignup}
            setUserRole={setUserRole}
            style={"sign-advanced"}
          />
        </div>

        <div className="other-info">
          <p
            className="terms-text"
            style={{ fontSize: "15px", marginTop: "0.5rem" }}
          >
            By creating an account you agree to our Terms and Polices
          </p>
        </div>
      </section>
    </>
  );
};

export default SignupSection;
