import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { isMatch, register } from "../redux/Actions/userActions";
import Header from "./../components/Header";
import Image from "./icon/img-login.svg"

const Register = ({location, history}) => {
  window.scrollTo(0, 0);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cf_password, setCfPassword] = useState("")

  const dispatch = useDispatch()
  const redirect = location.search ? location.search.split("=")[1] : "/"

  const userRegister = useSelector((state) => state.userRegister)
  const {error, loading, userInfo} = userRegister

  useEffect(() =>{
      if(userInfo){
          history.push(redirect)
      }
  },[userInfo, history,redirect])

  const submitHandler = (e) =>{
      e.preventDefault()
      if(!isMatch(password, cf_password)) return ({alert:"Password is not match!"})
      dispatch(register(name,email,password))
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
        <h2>Đăng ký</h2>
        <form onSubmit={submitHandler}>
            <div class="inputBx">
                <span>Tên người dùng</span>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required  placeholder="Name"  />
            </div>
            <div class="inputBx">
                <span>Tên đăng nhập</span>
                <input type="email" name="email"value={email} onChange={(e) => setEmail(e.target.value)} required  placeholder="enter your email" id=""   />
            </div>
            <div class="inputBx">
                <span>Mật khẩu</span>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required  placeholder="enter your password" id="" />
            </div>
            <div class="inputBx">
                <span>Nhập lại mật khẩu</span>
                <input type="password" name="cf_password" value={cf_password} onChange={(e) => setCfPassword(e.target.value)} required placeholder="enter your password" id=""  />
            </div>
            <div class="inputBx">
                <span>Số điện thoại</span>
                <input type="number" name="" placeholder="(+84)" required />
            </div>
            <div class="inputBx">
                <span>Địa chỉ</span>
                <input type="text" name="" class="box" placeholder="Đà Nẵng, Việt Nam" id="" required />
            </div>
            <div class="remember">
                <label>
                    <input type="checkbox" />Bạn đã đồng ý với điều khoản của chúng tôi
                </label>
            </div>
            
            <div class="inputBx">
                <input type="submit" name="" value="Sign in" />
            </div>
            <div class="inputBx">
                        <p>If you have account?<Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>Login</Link></p>
            </div>
        </form>
    </div>
</div>
</div>
    </>
  );
};

export default Register;
