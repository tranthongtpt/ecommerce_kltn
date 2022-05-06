import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { listOrders } from "../../redux/Actions/OrderActions";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import Orders from "./Orders";

const OrderMain = (props) => {
  const {keyword} = props
  const [keyword1, setKeyword1] = useState()
  const dispatch = useDispatch()
  let history = useHistory()

  const orderList = useSelector((state) => state.orderList)
  const {loading, error, orders} = orderList

  useEffect(() => {
    dispatch(listOrders(keyword))
  }, [dispatch, keyword])

  const submitHandler= (e) => {
    e.preventDefault()
    if(keyword1.trim()){
      history.push(`/search/orders/${keyword1}`)
    }else{
      history.push("/")
    }
  }
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Orders</h2>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
            <form onSubmit={submitHandler}>
             <input onChange={(e) => setKeyword1(e.target.value)}
                type="text"
                placeholder="Search..."
                className="form-control p-2"
              />
            </form>
             
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Status</option>
                <option>Active</option>
                <option>Disabled</option>
                <option>Show all</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Show 20</option>
                <option>Show 30</option>
                <option>Show 40</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="table-responsive">
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <Orders orders={orders}/>
          )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderMain;
