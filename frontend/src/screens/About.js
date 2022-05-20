import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../components/css/about.css";
import bacsi from "./icon/bacsi.png";
import aboutus from "./icon/aboutus.png"
const About =(heroBanner) =>{
    return(
        <>
          <Header/>
                <section className="home" id="home">
                    <div className="hero-banner-container">
                            <div>
                                <div className="btn-shopnow">
                                    <Link to={"/"}>
                                        <button type="button">Shop now</button>
                                    </Link></div>
                                <h2 className="beats-solo">Nhà thuốc</h2>
                                <h1>SEC Pharamacy</h1>
                                <img src={bacsi} alt="headphones" className="hero-banner-image" />
                                    <div>
                                        <div className="desc">
                                            <h5>Uy tín, an toàn, giá rẻ</h5>
                                            <p>{heroBanner.desc}</p>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="container">
                            <img className="onLeft" src={aboutus}></img>
                            <div className="onRight">
                                <p>Chào mừng đến với SEC Pharamacy</p>
                                <h1>VỀ CHÚNG TÔI</h1>
                                <p>Được thành lập vào năm 2022, SEC Pharmacy là một trong những chuỗi bán lẻ dược phẩm được ưa chuộng tại Việt Nam. Đến nay, SEC Pharmacy cung cấp các sản phẩm thuốc và sản phẩm chăm sóc sức khỏe hàng đầu với giá thành cạnh tranh nhất.
Nhà thuốc SEC Pharmacy luôn hướng đến mục tiêu nâng cao chất lượng chăm sóc sức khỏe cho từng khách hàng. Với niềm đam mê và sự sáng tạo của mình, SEC Pharmacy mang đến những trải nghiệm tốt nhất cho khách hàng.
Tới năm 2025, SEC Pharmacy sẽ tiếp tục mở rộng hệ thống, hướng đến mục tiêu trở thành nhà thuốc bán lẻ hiện đại và mang đến trải nghiệm tối ưu cho khách hàng.</p>
                            </div>
                        </div>

                        <div>
                            <h1 className="title">Contract</h1>
                            <div className="footer-container">                         
                                <div className="icons">
                                    <i className="fas fa-phone"></i>
                                    <div className="content-icon">
                                        <p>Liên hệ</p>
                                        <p>0395557279</p>
                                    </div>
                                </div>
                                <div className="icons">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="content-icon">
                                        <p>Địa điểm</p>
                                        <p>03 Quang Trung</p>
                                    </div>
                                </div>
                                <div className="icons">
                                    <i className="fas fa-envelope"></i>
                                    <div className="content-icon">
                                        <p>Email</p>
                                        <p>abc@gmail.com</p>
                                    </div>
                                </div>
                                <div className="icons">
                                    <i className="fas fa-clock"></i>
                                    <div className="content-icon">
                                        <p>Thời gian làm việc </p>
                                        <p>Thứ 2 - CN 9:00 - 22:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
          <Footer/>
        </>
    )
}
export default About;