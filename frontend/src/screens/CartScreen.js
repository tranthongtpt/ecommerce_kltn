import React, { useEffect } from "react";
import Header from "./../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removefromcart } from "../redux/Actions/cartActions";

const CartScreen = ({match, location, history}) => {
  window.scrollTo(0, 0);
  const productId = match.params.id
  const qty = location.search ? Number(location.search.split("=")[1]) : 1
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart

  const total = cartItems.reduce((a,i) => a + i.qty * i.price, 0).toFixed(2)

  useEffect(() => {
    if(productId){
      dispatch(addTocart(productId, qty))
    }
  }, [dispatch,productId, qty])

  const checkoutHandler = (e) => {
    history.push("/login?redirect=shipping")
  }

  const removeFromCartHandle = (id) => {
    dispatch(removefromcart(id))
  }
  return (
    <>
      <Header />
      {/* Cart */}
      <div className="container">
      {
        cartItems.lenght === 0 ? (
          <div className=" alert alert-info text-center mt-3">
          Your cart is empty
          <Link
            className="btn btn-success mx-5 px-5 py-3"
            to="/"
            style={{
              fontSize: "12px",
            }}
          >
            SHOPPING NOW
          </Link>
        </div>
        )
        :
        (
            <>
            <div className=" alert alert-info text-center mt-3">
            Giỏ hàng của bạn
            <Link className="text-success mx-2" to="/cart">
              {cartItems.lenght}
            </Link>
          </div>
          {/* cartiterm */}
          {
            cartItems.map((item) => (
              <div className="cart-iterm row">
              <div onClick={() => removeFromCartHandle(item.product)} 
              className="remove-button d-flex justify-content-center align-items-center">
                <i className="fas fa-times"></i>
              </div>
              <div className="cart-image col-md-3">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-text col-md-5 d-flex align-items-center">
                <Link to={`/products/${item.product}`}>
                  <h4>{item.name} <br/> {item.description}</h4>
                </Link>
              </div>
              <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                <h6>Số lượng</h6>
                <select value={item.qty} onChange={(e) => dispatch(addTocart(item.product, Number(e.target.value)))}>
                        {[...Array(item.countInStocks).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
              </div>
              <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                <h6>Giá tiền</h6>
                <h4>{item.price}VNĐ/sản phẩm</h4>
              </div>
            </div>
            ))
          }
  
          {/* End of cart iterms */}
          <div className="total">
            <span className="sub">Tổng tiền:</span>
            <span className="total-price">{total}VNĐ</span>
          </div>
          <hr />
          <div className="cart-buttons d-flex align-items-center row">
            <Link to="/products" className="col-md-6 ">
              <button>Tiếp tục mua hàng</button>
            </Link>
            {
              total > 0 && (
                <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                <button onClick={checkoutHandler}>
                    Đặt hàng
                </button>
              </div>
              )
            }
          </div>
          </>
        )
      }
      </div>
      </>
  );
};

export default CartScreen;
