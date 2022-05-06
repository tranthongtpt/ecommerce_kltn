import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Product from "./Product";
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from "../../redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const MainProducts = (props) => {
  const {keyword, pagenumber} = props
  const [keyword1, setKeyword1] = useState()
  const dispatch = useDispatch()
  let history = useHistory()

  const productList = useSelector((state) => state.productList)
  const {loading, error, products, page, pages} = productList

  const productDelete = useSelector((state) => state.productDelete)
  const { error: errorDelete, success:successDelete} = productDelete

  useEffect(() => {
    dispatch(listProducts(keyword, pagenumber))
  }, [dispatch, successDelete, keyword, pagenumber])

  const submitHandler= (e) => {
    e.preventDefault()
    if(keyword1.trim()){
      history.push(`/search/${keyword1}`)
    }else{
      history.push("/")
    }
  }

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Products</h2>
        <div>
          <Link to="/addproduct" className="btn btn-primary">
            Create new
          </Link>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white ">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto ">
            <form onSubmit={submitHandler}>
            <input
                type="search"
                placeholder="Search..."
                className="form-control p-2"
                onChange={(e) => setKeyword1(e.target.value)}
              />
            </form>
            
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>All category</option>
                <option>Electronics</option>
                <option>Clothings</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Latest added</option>
                <option>Cheap first</option>
                <option>Most viewed</option>
              </select>
            </div>
          </div>
        </header>

        <div className="card-body">
        {errorDelete && (
          <Message variant="alert-danger">{errorDelete}</Message>
        )}
        {
          loading ? (<Loading />) : error ? (<Message variant={"alert-danger"}>{error}</Message>)
          :(
            <div className="row">
            {/* Products */}
            {products.map((product) => (
              <Product product={product} key={product._id} />
            ))}
          </div>
          )
        }
          {pages > 1 && (
           <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
            <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Previous
                </Link>
              </li>
            {
              [...Array(pages).keys()].map((x) => (
                <>
              <li className={`page-item ${x+1 === page ? "active" :""}`} key={x+1}>
                <Link className="page-link" to={keyword ? `/search/${keyword}/page/${x+1}`: `/page/${x+1}`}>
                  {x+1}
                </Link>
              </li>
              </>
              ))
            }
            <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
              
            </ul>
          </nav>
          
          )
          }
          
        </div>
      </div>
    </section>
  );
};

export default MainProducts;
