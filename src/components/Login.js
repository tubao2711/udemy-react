import { useEffect, useState, useContext } from "react";
import { loginApi } from "../services/userService";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const Login = () => {
  const navigate = useNavigate();
  const { loginContext } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [loadingApi, setLoadingApi] = useState(false);

  // useEffect(() => {
  //   let token = localStorage.getItem("token");
  //   if (token) {
  //     navigate("/");
  //   }
  // }, []);

  const handleLogin = async () => {
    if (!email && !password) {
      toast.error("Missing email and password");
      return;
    }
    setLoadingApi(true);
    let res = await loginApi(email, password);
    if (res && res.token) {
      loginContext(email, res.token);
      navigate("/");
    } else {
      if (res && res.status === 400) {
        toast.error(res.data.error);
      }
    }
    setLoadingApi(false);
  };
  return (
    <>
      <div className="login-conatiner col-12 col-sm-4 ">
        <div className="title">Login</div>
        <div className="text">Email or Username (eve.holt@reqres.in)</div>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="Email or username... "
        />
        <div className="input-pass">
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type={isShowPassword === true ? "text" : "password"}
            placeholder="Password..."
          />
          <i
            className={
              isShowPassword === true
                ? "fa-solid fa-eye"
                : "fa-solid fa-eye-slash"
            }
            onClick={() => setIsShowPassword(!isShowPassword)}
          ></i>
        </div>
        <button
          disabled={email && password ? false : true}
          className={email && password ? "active" : ""}
          onClick={() => handleLogin()}
        >
          {loadingApi && <i class="fa-solid fa-sync fa-spin"></i>}
          &nbsp;Login
        </button>
        <div className="back">
          <i className="fa-solid fa-chevron-left mx-2"></i>
          <Link to="/" className="go-back">
            Go back
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
