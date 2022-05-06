import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../redux/Actions/cartActions";

const ShippingScreen = ({history}) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart)
  const {shippingAddress} = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [phone, setphone] = useState(shippingAddress.phone)
  const [district, setdistrict] = useState(shippingAddress.district)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({address,city,phone,district}))
    history.push("/payment")
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h4>Địa chỉ giao hàng</h4>
          <input type="text" placeholder="Nhập địa chỉ" required value={address} onChange={(e) => setAddress(e.target.value)}/>
          <input type="text" placeholder="Quận/Huyện" required value={district} onChange={(e) => setdistrict(e.target.value)} />
          <input type="text" placeholder="Thành phố/Tỉnh" required value={city} onChange={(e) => setCity(e.target.value)} />
          <input type="text" placeholder="Số điện thoại nhận hàng" required value={phone} onChange={(e) => setphone(e.target.value)}/>
          <button type="submit">
              Tiếp tục
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ShippingScreen;
