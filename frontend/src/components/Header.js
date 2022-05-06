import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { listCategory } from "../redux/Actions/CaterogyActions";
import { logout } from "../redux/Actions/userActions";
const Header = () => {

  const [keyword, setKeyword] = useState()
  let history = useHistory()

  const cart = useSelector(state => state.cart)
  const {cartItems} = cart


  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  const submitHandler = (e) => {
      e.preventDefault()
      if(keyword.trim()){
          history.push(`/search/${keyword}`)
      }else{
          history.push("/")
      }
  }

    const [caterogy, setCaterogy] = useState()
    const categoryList = useSelector((state) => state.categoryList)
    const {categories} = categoryList
  
    useEffect(() => {
      dispatch(listCategory())
    },[dispatch])

    const handlerCategory = e => {
        setCaterogy(e.target.value)
    }

    const myStyle = {
    textAlign: "center",
    background:"var(--green)",
    position: "fixed",
    bottom:"0", left:"0", right:"0",
    zIndex: "1000",
    display: "none"
    };
    const a={
        fontSize: "2.5rem",
    padding:"2rem",
    color:"#fff",
    textDecoration: "none"
    }

    return (
    <div>
      {/* Top Header */}
      <header className="header">
        <div className="grid">
            <div className="header__navbar py-2">
                <ul className="header__navbar-list mb-0">
                    <li className="header__navbar-item ">
                        <span className="header__navbar-title--no-pointer fw-bold">Hotline đặt hàng</span>
                        <i className="header__navbar-icon fas fa-phone-alt header__navbar-title--no-pointer"></i>
                        <span className="header__navbar-title--no-pointer fw-bold">(+84) 0395557279</span>
                    </li>
                </ul>
                <ul className="header__navbar-list mb-0">
                    <li className="header__navbar-item">
                        <a href="https://goo.gl/maps/X5kujfbjCT33HymV7" target="_blank" rel="noopener"
                        className="text-decoration-none col-black">
                            <i className="header__navbar-icon fas fa-map-marker-alt fw-bold ">Địa điểm</i></a>
                    </li>
                    {
                        userInfo ? (
                            <>
                                <li id="" className="header__navbar-item fw-bold" ><Link to="/profile">Hello, {userInfo.name}</Link></li>
                                <li id="" className="header__navbar-item fw-bold" ><Link to="#" onClick={logoutHandler}>Đăng xuất</Link></li>
                            </>
                        )
                        :
                        (
                            <>
                                <li id="sign-btn" className="header__navbar-item fw-bold" ><Link to="/register">Đăng ký</Link></li>
                                <li id="login-btn1" className="header__navbar-item fw-bold" ><Link to="/login">Đăng nhập</Link></li>
                            </>
                        )
                    }
                </ul>
            </div>
            <div className="header-with-search">
                <div id="list-cetagory" className="fas fa-map-marker-alt"></div>
                <Link to="/">
                    <img src="/assets/img/logo2.png" alt="bn-logo" /><Link to="/home"></Link>
                </Link>
                <form onSubmit={submitHandler} className="search-form">
                    <input type="search" id="search-box"header__navbar placeholder="Bạn đang tìm gì hôm nay..." onChange={(e) => setKeyword(e.target.value)}/>
                    <label for="search-box" className="fas fa-search fs-3 pe-3  "></label>
                </form>
                
                <div className="header__cart-icon">
                     <a className="text-decoration-none pe-3" href="#">
                        <i className="fas fa-heart"></i>
                    </a>   
                        <a className="text-decoration-none "><Link to="/cart">
                        <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                        <span id="checkout_items" className="checkout_items">{cartItems.length}</span>
                        </Link>
                        </a>
                             
                    <div id="login-btn" className="fas fa-user"></div>
                </div>
            </div>
            <div id="header-with-search1">
                <form className="search-form1">
                    <input type="search" id="search-box"header__navbar placeholder="Bạn đang tìm gì hôm nay..." required />
                    <label for="search-box" className="fas fa-search fs-3 pe-3  "></label>
                </form>
            </div>
        </div>
        <div className="main-menu">
            <div className="navbar justify-content-center py-0">
                <ul id="nav">
                    <li>
                        <a href="#"><i className="fas fa-bars"></i>Danh mục</a>
                        <ul className="subnav">
                        {categories.map((caterogy) => (
                            <li><Link to="products">{caterogy.name}</Link></li>
                        ))}
                        </ul>
                    </li>
                    <li>
                        <a href="#">Nhãn hàng<i className="pd-l fas fa-angle-down"></i></a>
                        <ul className="subnav">
                        {categories.map((caterogy) => (
                            <li><Link to="products">{caterogy.name}</Link></li>
                        ))}
                        </ul>
                    </li>
                    <li>
                        <Link to="/products">Sản phẩm thuốc</Link>
                    </li>
                    <li>
                        <Link to="">Dược mỹ phẩm</Link>
                    </li>
                    <li>
                        <a href="#">Góc sức khỏe</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Khuyễn mãi Hot</a>
                    </li>
                </ul>
            </div>
        </div>
        
    </header>
    <nav style={myStyle} classNameName ="bottom-navbar">
          <Link style={a} to="/" className="fas fa-home"></Link>
          <Link style={a} to="/" className="fas fa-list"></Link>
          <Link style={a} href="#reviews" className="fas fa-comments"></Link>
          <Link style={a} to="/profile" className="far fa-user-circle"></Link>
      </nav>
    </div>
    )
  }

export default Header;
