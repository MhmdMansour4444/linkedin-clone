
const Login = ({
  setIsLogin,
  handleInputChange,
  validateLogin,
  incorrect,
  setIncorrect,
  error,
  setError,
  credentials,
  setCredentials,
}) => {

  return (
    <div className=" login-form">
      <h2>LinkedIn</h2>
      <input
        type="text"
        placeholder="Example@gmail.com"
        onChange={(e) => handleInputChange(e, "email")}
      />
      <input
        className=" rounded"
        type="password"
        placeholder="Password"
        onChange={(e) => handleInputChange(e, "password")}
      />
      <p
        className={`incorrect ${incorrect ? "red" : ""} ${
          incorrect ? "" : "invisible"
        }`}
      >
        {error}
      </p>
      <button
        className=""
        onClick={validateLogin}
      >
        Login
      </button>
      <p>
        New to LinkedIn?{" "}
        <span
          className=""
          onClick={() => {
            setIncorrect(false);
            setIsLogin(false);
          }}
        >
          Join now
        </span>
      </p>
    </div>
  );
};

export default Login;
