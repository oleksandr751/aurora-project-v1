import AuthForm from "./auth_components/AuthForm";
import bg from "../../images/bg.png";
import bg2 from "../../images/bg2.jpg";
import mainBg2 from "../../images/mainBg2.jpg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const myStyle = {
  mainDiv: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `url(${mainBg2}) no-repeat center center fixed`,
  },
  leftChildDiv: {
    width: "40%",
    height: "85%",
    background: `url(${bg})`,
    borderTopLeftRadius: "10%",
    borderBottomLeftRadius: "10%",
  },
  rightChildDiv: {
    width: "40%",
    height: "85%",
    background: `url(${bg2})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: "10%",
    borderBottomRightRadius: "10%",
  },
};

const AuthPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
    return () => {};
  }, [navigate]);

  return (
    <div style={myStyle.mainDiv}>
      <div style={myStyle.leftChildDiv}></div>
      <div style={myStyle.rightChildDiv}>
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;
