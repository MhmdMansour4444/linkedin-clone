import "../../style.css"

const Signup = ({
  setIsLogin,
  handleInputChange,
  validateSignup,
  incorrect,
  setIncorrect,
  error,
  setError,
  credentials,
  setCredentials,
}) => {
  return (
    <div className="full-width login-form">
      <h2>LinkedIn</h2>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => handleInputChange(e, "fName")}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => handleInputChange(e, "lName")}
      />
      <input
        type="text"
        placeholder="Example@gmail.com"
        onChange={(e) => handleInputChange(e, "email")}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => handleInputChange(e, "password")}
      />
      <input
        type="password"
        placeholder="Confirm-Password"
        onChange={(e) => handleInputChange(e, "confPassword")}
      />
      <p
        className={`incorrect ${incorrect ? "red" : ""} ${
          incorrect ? "" : "invisible"
        }`}
      >
        {error}
      </p>
      <button onClick={validateSignup}>
        Signup
      </button>
      <p>
        Already have an account?{" "}
        <span
          className=""
          onClick={() => {
            setIncorrect(false);
            setIsLogin(true);
          }}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Signup;
