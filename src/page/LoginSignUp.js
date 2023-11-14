import Navbar from "../components/Navbar/Navbar";
import FormBox from "../components/HomePage/Form.js";
import "./LoginSignUp.css";

export default function LoginSignUp() {
  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="form-container">
          <FormBox />
        </div>
      </div>
    </>
  );
}
