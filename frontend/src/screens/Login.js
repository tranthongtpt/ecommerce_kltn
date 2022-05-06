import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import Footer from "../components/Footer";
import Image from "./icon/img-login.svg"
import {useDispatch, useSelector} from "react-redux"
import {login} from "./../redux/Actions/userActions"
import Message from "../components/LoadingError/Error"
import Loading from "../components/LoadingError/Loading"

const Login = ({location, history}) => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const redirect = location.search ? location.search.split("=")[1] : "/"

  const userLogin = useSelector((state) => state.userLogin)
  const {error, loading, userInfo} = userLogin

  useEffect(() =>{
      if(userInfo){
          history.push(redirect)
      }
  },[userInfo, history,redirect])

  const submitHandler = (e) =>{
      e.preventDefault()
      dispatch(login(email,password))
  }
  
  return (
    <>
      <div className="section">
      <div class="imgBx">
            <img src={Image} />
        </div>
        <div class="contentBx">
            <div class="formBx">
            {error && <Message variant="alert-danger">{error}</Message>}
            {loading && <Loading />}
                <h2>Đăng nhập</h2>
                <form onSubmit={submitHandler}>
                    <div class="inputBx">
                        <span>Username</span>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Tên đăng nhập" />
                    </div>
                    <div class="inputBx">
                        <span>Password</span>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="on" placeholder="Nhập mật khẩu" />                    
                    </div>
                    <div class="remember">
                        <label>
                            <input type="checkbox" />Remember me
                        </label>
                    </div>
                    <div class="inputBx">
                        <input type="submit" name="" value="Sign in" />
                    </div>
                    <div class="inputBx">
                        <p>Do not have an account?<Link to={redirect ? `/register?redirect=${redirect}`: "/register"}> Sign up</Link></p>
                    </div>
                </form>
                <h3>Login with social media</h3>
                <ul class="sci">
                    <li><i class="fab fa-facebook-f"></i></li>
                    <li><i class="fab fa-google"></i></li>
                </ul>
            </div>
        </div>
        </div>
    </>
  );
};

export default Login;
