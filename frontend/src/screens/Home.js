import React, { useEffect,useRef, useState  } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Image1 from "./icon/banner-ads-big.png";
import Image2 from "./icon/banner-ads1.webp";
import Image3 from "./icon/banner-ads2.webp";
import Image4 from "./icon/banner-ads-big.png";
import duocpham from "./icon/img-list-item7.png";
import chamsocsuckhoe from "./icon/img-list-item6.png";
import chamsoccanhan from "./icon/img-list-item5.png";
import sanphamtienloi from "./icon/img-list-item24.png";
import thucphamchucnang from "./icon/img-list-item3.png";
import mevabe from "./icon/img-list-item2.png";
import dekhang from "./icon/Protect-Green-icon.png";
import banchai from "./icon/P22588_1.jpg";
import danhmuc from "./icon/text-editor-icon.png";
import thuonghieu from "./icon/atom-icon.png";
import about from "./icon/brand-1.jpg";
import adv from "./icon/ads.svg";

import { useDispatch, useSelector } from "react-redux";
import { listCategory } from "../redux/Actions/CaterogyActions";
import { Link } from "react-router-dom";
import { listProduct } from "../redux/Actions/ProductActions";
import Loading from "../components/LoadingError/Loading";
import Message from "../components/LoadingError/Error";
/////////////
import { Pagination,Navigation,History } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
// modules styles
import 'swiper/modules/navigation/navigation.min.css'
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'
/////////////
function Home() {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);
  return (
    <>
      <Header />
      <section className="home" id="home">
        <div className="bannertop">
          <div className="bannertop-left">
            <img
              style={{
                maxWidth: "100%",
                minHeight: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "12px",
              }}
              className="bannertop-image"
              src={Image3}
              alt=""
            />
          </div>
          <div className="bannertop-right">
            <img className="bannertop-image" src={Image2} alt="" />
            <img className="bannertop-image" src={Image2} alt="" />
          </div>
        </div>
      </section>
      <section className="category">
        <div className="category-list__header">
          <img className="icon__title" src={danhmuc} alt="" />
          <p className="category-list__header-title">Danh m???c s???n ph???m</p>
        </div>
        <div className="container">
          {categories.map((caterogy) => (
            <Link to="/products" className="box">
              <img src={caterogy.image} />
              <p>{caterogy.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured" id="featured">
        <div className="category-list__header">
          <img className="icon__title" src={dekhang} alt="" />
          <p className="category-list__header-title">
            T??ng s???c ????? kh??n m??a d???ch
          </p>
        </div>

        <div className="swiper featured-slider">
          <div className="swiper-wrapper">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            
            history={{
              key: "slide",
            }}
            modules={[History]}
            className="mySwiper"
          >
            <SwiperSlide>
            <div className="swiper-slide box">
                <div className="image">
                  <img src={banchai} alt="" />
                </div>
                <div className="content">
                  <h2 className="productItem_title">
                    B??n ch???i ????nh r??ng P/S ch??m s??c n?????u ch???a mu???i tre
                  </h2>
                  <div className="productItem_original-price"></div>
                  <div className="price">
                    {" "}
                    <span>28.000 VND/C??y</span> <br /> 28.000 VND/C??y{" "}
                  </div>
                  <button className="btn">Th??m v??o gi??? h??ng</button>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
          <>
              {products.map((product) => (
                <div className="swiper-slide box">
                  <div className="image">
                    <Link to={`/products/${product._id}`}>
                      <img src={product.image} alt={product.name} />
                    </Link>
                  </div>
                  <div className="content">
                    <h2 className="productItem_title">
                      <p>
                        <Link to={`/products/${product._id}`}>
                          {product.name}
                        </Link>
                      </p>
                    </h2>
                    <div className="productItem_original-price"></div>
                    <div className="price">
                      {" "}
                      <span>0% VND/S???n ph???m</span> <br /> {product.price}{" "}
                      VND/S???n ph???m{" "}
                    </div>
                    {product.countInStocks > 0 ? (
                      <button
                        class="btn"
                        style={{ position: "relative", zindex: "2" }}
                      >
                        <Link to={`/products/${product._id}`}>
                          Xem chi ti???t
                        </Link>
                      </button>
                    ) : (
                      <span>H???t h??ng</span>
                    )}
                  </div>
                </div>
              ))}
            </>
          </SwiperSlide>
          
          <SwiperSlide>
          <div className="swiper-slide box">
                <div className="image">
                  <img src={banchai} alt="" />
                </div>
                <div className="content">
                  <h2 className="productItem_title">
                    B??n ch???i ????nh r??ng P/S ch??m s??c n?????u ch???a mu???i tre
                  </h2>
                  <div className="productItem_original-price"></div>
                  <div className="price">
                    {" "}
                    <span>28.000 VND/C??y</span> <br /> 28.000 VND/C??y{" "}
                  </div>
                  <button className="btn">Th??m v??o gi??? h??ng</button>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide><div className="swiper-slide box">
                <div className="image">
                  <img src={banchai} alt="" />
                </div>
                <div className="content">
                  <h2 className="productItem_title">
                    B??n ch???i ????nh r??ng P/S ch??m s??c n?????u ch???a mu???i tre
                  </h2>
                  <div className="productItem_original-price"></div>
                  <div className="price">
                    {" "}
                    <span>28.000 VND/C??y</span> <br /> 28.000 VND/C??y{" "}
                  </div>
                  <button className="btn">Th??m v??o gi??? h??ng</button>
                </div>
              </div>
          </SwiperSlide>

            </Swiper>
          </div>
        </div>


      </section>
      <section className="shop" id="shop">
        <div className="category-list__header">
          <img className="icon__title" src={banchai} alt="" />
          <p className="category-list__header-title">G???i ?? h??m nay</p>
        </div>

        <div className="box-container">
          {loading ? (
            <div className="mb-5">
              <Loading />
            </div>
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <>
              {products.map((product) => (
                <div className="box">
                  <div className="image">
                    <Link to={`/products/${product._id}`}>
                      <img src={product.image} alt={product.name} />
                    </Link>
                  </div>
                  <div className="content">
                    <h2 className="productItem_title">
                      <p>
                        <Link to={`/products/${product._id}`}>
                          {product.name}
                        </Link>
                      </p>
                    </h2>
                    <div className="productItem_original-price"></div>
                    <div className="price">
                      {" "}
                      <span>0% VND/S???n ph???m</span> <br /> {product.price}{" "}
                      VND/S???n ph???m{" "}
                    </div>
                    {product.countInStocks > 0 ? (
                      <button
                        class="btn"
                        style={{ position: "relative", zindex: "2" }}
                      >
                        <Link to={`/products/${product._id}`}>
                          Xem chi ti???t
                        </Link>
                      </button>
                    ) : (
                      <span>H???t h??ng</span>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </section>
      <section className="Outstanding-Brand">
        <div className="container-fluid">
          <div className="category-list__header">
            <img className="icon__title" src={thuonghieu} alt="" />
            <p className="category-list__header-title">Th????ng hi???u n???i b???t</p>
          </div>

          <div className="Outstanding-Brand__body">
            <div className="Outstanding-Brand-slider">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={5}
                    navigation={true}   
                    history={{
                      key: "slide",
                    }}
                    modules={[Navigation, History]}
                    className="mySwiper"
                  >
                  <SwiperSlide data-history="1"><div className="swiper-slide">  
                    <img src={about} alt="" />
                    <h4>Bao Ngan City1</h4>
                  </div></SwiperSlide>
                  <SwiperSlide data-history="Slide 2"><div className="swiper-slide">  
                    <img src={about} alt="" />
                    <h4>Bao Ngan City2</h4>
                  </div></SwiperSlide>
                  <SwiperSlide data-history="3"><div className="swiper-slide">  
                    <img src={about} alt="" />
                    <h4>Bao Ngan City3</h4>
                  </div></SwiperSlide>
                  <SwiperSlide data-history="Slide 4"><div className="swiper-slide">  
                    <img src={about} alt="" />
                    <h4>Bao Ngan City4</h4>
                  </div></SwiperSlide>
                  <SwiperSlide data-history="5"><div className="swiper-slide">  
                    <img src={about} alt="" />
                    <h4>Bao Ngan City5</h4>
                  </div></SwiperSlide>
                  <SwiperSlide data-history="6"><div className="swiper-slide">  
                    <img src={about} alt="" />
                    <h4>Bao Ngan City5</h4>
                  </div></SwiperSlide>
                  <SwiperSlide data-history="7"><div className="swiper-slide">  
                    <img src={about} alt="" />
                    <h4>Bao Ngan City5</h4>
                  </div></SwiperSlide>
                  <SwiperSlide data-history="8"><div className="swiper-slide">  
                    <img src={about} alt="" />
                    <h4>Bao Ngan City5</h4>
                  </div></SwiperSlide>
                  
                  
      </Swiper>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="ads">
        <img className="vvv" src={adv} alt="" />
      </div>
      <section className="icon-container">
        <div className="icons">
          <i className="fas fa-shipping-fast"></i>
          <div className="content-icon">
            <h3>Mi???n ph?? v???n chuy???n</h3>
            <p>??p d???ng cho ????n h??ng tr??n 5 x???</p>
          </div>
        </div>
        <div className="icons">
          <i className="fas fa-capsules"></i>
          <div className="content-icon">
            <h3>Thu???c t???t gi?? r???</h3>
            <p>B??n ra th??? tr?????ng gi?? g???c</p>
          </div>
        </div>
        <div className="icons">
          <i className="fas fa-user-shield"></i>
          <div className="content-icon">
            <h3>Cam k???t 100%</h3>
            <p>?????t ch???t l?????ng l??n h??ng ?????u</p>
          </div>
        </div>
        <div className="icons">
          <i className="fas fa-check-circle"></i>
          <div className="content-icon">
            <h3>Thu???c ch??nh h??ng</h3>
            <p>B???m ?????m an to??n, uy t??n</p>
          </div>
        </div>
      </section>
      <section className="newsemail">
        <form action="">
          <h3>Nh???p Email ????? nh???n th??ng tin khuy???n m??i t??? BaoNgan</h3>
          <input
            type="email"
            name=""
            placeholder="Enter your email"
            id=""
            className="box"
            required
          />
          <input type="submit" value="subscribe" className="btn" />
        </form>
      </section>
      <script></script>
      <Footer />
    </>
  );
}

export default Home;
