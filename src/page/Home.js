import Navbar from "../components/Navbar/Navbar";
import CodeBox from "../components/HomePage/CodeBox.js";
import FormBox from "../components/HomePage/Form.js";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="code-container">
          <CodeBox />
        </div>
        <div className="form-container">
          <FormBox />
        </div>
      </div>
    </>
  );
}
