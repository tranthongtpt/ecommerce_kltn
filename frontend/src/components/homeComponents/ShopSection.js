import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import image from './img-list-item1.png'
import {listProduct} from "../../redux/Actions/ProductActions"
import { useDispatch, useSelector } from "react-redux";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { listCategory } from "../../redux/Actions/CaterogyActions";

const ShopSection = (props) => {
  const [caterogy, setCaterogy] = useState("")
  const {keyword, pagenumber} = props
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const {loading, error, products, page, pages} = productList

  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber))
  }, [dispatch, keyword, pagenumber,caterogy])

  const categoryList = useSelector((state) => state.categoryList)
  const {categories} = categoryList

  useEffect(() => {
    dispatch(listCategory())
  },[dispatch, caterogy])

  const handlerCategory = e => {
    setCaterogy(e.target.value)
  }
  return (
    <>
    <div className="productInfo__header">
        <div className="container-detail">
            <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                <li className="breadcrumb-item"><a href="#">Danh mục sản phẩm</a></li>
            </ul>
        </div>
    </div>
    <div className="productInfo__body">
        <div className="container">
            <div className="category_box">
                <div className="category_aside">
                    <div className="category_aside-title">
                        <h3>Danh mục</h3>
                    </div>
                    <div className="category_aside-box">
                        {
                          categories.map((caterogy) => (
                            <div className="categoryAside_list-items">
                            <div className="categoryAside_list-box">
                                <figure key={caterogy}
                                onClick={() => setCaterogy(caterogy)}>
                                    <img src={caterogy.image} title="Sản phẩm xxxxxx" alt="" style=
                                    {{
                                    width:"80px", 
                                    height:"70px" }} />
                                </figure>
                                <h3>{caterogy.name}</h3>
                                
                                </div>
                            </div>
                          ))
                        }
                    </div>
                </div> 
                <div className="category_product">
                    <div className="category_product-head">
                        <div className="dropdown">
                            <button type="button" className="btn btn-primary dropdown-toggle fs-4" data-bs-toggle="dropdown">
                              Sắp xếp
                            </button>
                            <ul className="dropdown-menu fs-4">
                              <li><a className="dropdown-item" href="#">Giá giảm dần</a></li>
                              <li><a className="dropdown-item" href="#">Giá tăng dần</a></li>
                              <li><a className="dropdown-item" href="#">Giá mới nhất</a></li>
                            </ul>
                          </div>
                    </div>
                    
                    <div className="box-container">
                    {
                      loading ? (<div className="mb-5"><Loading /></div>) : error ? (<Message variant="alert-danger">{error}</Message>)
                      :
                      (
                        <>
                        {
                          products.map((product) => (
                            <div
                              className="box"
                              key={product._id}
                            >
                              <div className="image">
                                <Link to={`/products/${product._id}`}>
                                    <img src={product.image} alt={product.name} />
                                </Link>
          
                                <div className="content">
                                  <p>
                                    <Link to={`/products/${product._id}`}>
                                      {product.name}
                                    </Link>
                                  </p>
                                  <div class="productItem_original-price"></div>
                                  <div class="price"> <span>0% VND/Sản phẩm</span> <br/> {product.price} VND/Sản phẩm </div>
                                  {product.countInStocks > 0 ? (
                                    <button class="btn" style={{position: "relative", zindex:"2"}}>Thêm vào giỏ hàng</button>
                                  ) : (
                                    <span>Hết hàng</span>
                                  )}
                                </div>
                              </div>

                            </div>
                            
                          ))
                        }
                        </>
                      )
                    }
                    {/* Pagination */}
                    <Pagination pages={pages} page={page} keyword={keyword ? keyword : ""}/>
                    </div>
                    </div> 
                    </div>
                </div>
            </div>
        
    </>
  );
};

export default ShopSection;
