import {
  FaAddressCard,
  FaCheckCircle,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaStar,
} from "react-icons/fa";

function SignUpInput({
  type,
  id,
  placeholder,
  handleChange,
  label,
  error,
  className,
}) {
  return (
   

    <div className="form-container" id={id}>
      <div className={`form-wrapper ${className}`}>
        <input
          className="input-textarea"
          onChange={handleChange}
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          required={id === "referral" || "coupon" ? false : true}
          spellCheck={false}
          autoComplete="off"
        />

        <label htmlFor={id}>{label}</label>

        {id === "firstName" || id === "lastName" ? (
          <FaAddressCard />
        ) : id === "email" ? (
          <FaEnvelope />
        ) : id === "password" ? (
          <FaLock />
        ) : id === "confirm" ? (
          <FaLock />
        ) : id === "mobileNo" ? (
          <FaPhone />
        ) : (
          ""
        )}
      </div>
      <div
        className={
          error === null
            ? "form-error-controller error-mtop"
            : "form-error-controller"
        }
      >
        <span className="form-error-btn">
          {error === null ? (
            <FaCheckCircle className="required-icon valid-icon " />
          ) : id === "referral" || "coupon" ? (
            ""
          ) : (
            <FaStar className="required-icon" />
          )}
        </span>

        <p className="form-error-text">{error}</p>
      </div>
    </div>
  );
}

export default SignUpInput;
