export const AlertBox = ({ title, note, icon, setModalTxt, setMessage }) => {
  const handleModalTxt = () => {
    setModalTxt((prev) => !prev);
    setMessage("");
  };

  return (
    <div className="alert-box">
      <h2 className="alert-title">
        {title}
        {icon && <i className="fa-solid fa-circle-check success-icon"></i>}
      </h2>
      <p className="alert-text">
        {/* {<span className="bold-text colored-text">Note: </span>} */}
        {note}
      </p>
      <div className="alert-btn">
        <button
          onClick={handleModalTxt}
          className="del-alert-btn bold-text yes-btn"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export const AlertBox2 = ({ title, note, icon, setModalTxt }) => {
  const handleModalTxt = () => {
    setModalTxt((prev) => !prev);
  };

  return (
    <div className="alert-box">
      <h2 className="alert-title">
        {title}
        {icon && <i className="fa-solid fa-circle-check success-icon"></i>}
      </h2>
      <p className="alert-text">
        {/* {<span className="bold-text colored-text">Note: </span>} */}
        {note}
      </p>
      <div className="alert-btn">
        <button
          onClick={handleModalTxt}
          className="del-alert-btn bold-text yes-btn"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export const GeneralAlertBox = ({
  title,
  note,
  icon,
  setModalTxt,
  setMessage,
}) => {
  const handleModalTxt = () => {
    setModalTxt((prev) => !prev);
    setMessage("");
  };

  return (
    <div className="alert-box">
      <h2 className="alert-title">
        {title}
        {icon && <i className="fa-solid fa-circle-check success-icon"></i>}
      </h2>
      <p className="alert-text">
        {/* {<span className="bold-text colored-text">Note: </span>} */}
        {note}
      </p>
      <div className="alert-btn">
        <button
          onClick={handleModalTxt}
          className="del-alert-btn bold-text yes-btn"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export const AlertModal = ({
  modalTxt,
  setModalTxt,
  userRole,
  message,
  setMessage,
  note,
}) => {
  /* modal section */
  return (
    <section
      style={{ transform: modalTxt && `translateX(${0}%)` }}
      className="alert-section"
    >
      {/* sign up */}
      {modalTxt === "sign-up-Err" && (
        <AlertBox
          title="Complete the form!"
          note="You're required to fill out this form completely before you can continue with your registration!"
          icon={false}
          setModalTxt={setModalTxt}
        />
      )}

      {modalTxt === "close-payment" && (
        <AlertBox2
          title="Wait!!!"
          note="Why are you leaving... You are Moments away from Awesomeness!! We hope to see You again"
          icon={true}
          setModalTxt={setModalTxt}
        />
      )}

      {modalTxt === "confirm-payment" && (
        <AlertBox2
          title={
            message === "Oops! An error occured"
              ? "Error!"
              : message === "Connection error!"
              ? message
              : "Successful"
          }
          note={
            message === "Oops! An error occured"
              ? message +
                " receiving your payment, please try again or contact support"
              : message === "Connection error!"
              ? "We are unable to receive your payment, please try again or contact support"
              : "Your payment have been submitted for confirmation, you will receive an email once your payment is confirm!"
          }
          icon={
            message === "Oops! An error occured"
              ? false
              : message === "Connection error!"
              ? false
              : true
          }
          setModalTxt={setModalTxt}
        />
      )}

      {modalTxt === "User already exists!" && (
        <AlertBox
          title={modalTxt}
          note="User with that email address already exists, kindly try another email address"
          icon={false}
          setModalTxt={setModalTxt}
          setMessage={setMessage}
        />
      )}

      {modalTxt === "Registration successful!" && (
        <AlertBox
          title={modalTxt}
          note={
            userRole === "client"
              ? "Proceed to login into your account"
              : "Continue to make your payment"
          }
          icon={true}
          setModalTxt={setModalTxt}
        />
      )}

      {/* kyc */}
      {modalTxt === "save" && (
        <AlertBox2
          title=" Data Saved"
          note=" All current changes made have been saved successfully! You can continue Enjoying your account."
          icon={true}
          setModalTxt={setModalTxt}
        />
      )}

      {modalTxt === "kyc" && (
        <AlertBox
          title="Successful"
          note="Your kyc form has been submitted successfully! Congrats and
              Welcome On Board!"
          icon={true}
          setModalTxt={setModalTxt}
        />
      )}

      {/*add image text  */}

      {modalTxt === "add-photo" && (
        <AlertBox
          title="Add Photos"
          note="You're required to add six(6) work Photos, Polaroid photos(optional) and a CompCard(optional)"
          icon={false}
          setModalTxt={setModalTxt}
        />
      )}

      {/* trash image text */}

      {modalTxt === "trash-photo" && (
        <AlertBox
          title="Delete Photos"
          note="You're required to have more than six(6) work photos to perform this Action!"
          icon={false}
          setModalTxt={setModalTxt}
        />
      )}
      {modalTxt === "trash-polaroid" && (
        <AlertBox
          title="Delete Polaroids"
          note="You're required to have more than three(3) polaroid photos to perform this Action!"
          icon={false}
          setModalTxt={setModalTxt}
        />
      )}

      {/* Deleted modal text */}
      {modalTxt === "deleted" && (
        <AlertBox
          title="Photo Deleted"
          note="Continue viewin your profile!"
          icon={true}
          setModalTxt={setModalTxt}
        />
      )}

      {/* category modal text */}

      {modalTxt === "category" && (
        <AlertBox
          title="Choose which type of model you suited!"
          note="You can only make a maximum of two choices from the list of
              categories."
          icon={false}
          setModalTxt={setModalTxt}
        />
      )}

      {modalTxt === "max_category" && (
        <AlertBox
          title="Maximum category reached!"
          note="You can only make a maximum of two choices from the list of
              categories."
          icon={false}
          setModalTxt={setModalTxt}
        />
      )}

      {/* job interest modal text */}
      {modalTxt === "job" && (
        <AlertBox
          title="Choose the type of job you will be interest in!"
          note="You can make as many choices as you can from the list of job."
          icon={false}
          setModalTxt={setModalTxt}
        />
      )}

      {/* general alert box */}
      {modalTxt === "general" && (
        <GeneralAlertBox
          note={note}
          icon={false}
          setModalTxt={setModalTxt}
          setMessage={setMessage}
        />
      )}
    </section>
  );
};
