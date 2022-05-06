import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
const Orders = (props) => {
  const {loading, error, orders } = props
  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
    {
      loading ? (
        <Loading/>
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <>
        {
          orders.length === 0 ? (
            <div className="col-12 alert alert-info text-center mt-3">
              No Orders
              <Link
              className="btn btn-success mx-2 px-3 py-2"
              to="/"
              style={{
              fontSize: "12px",
              }}
              >
            Không có đơn hàng
            </Link>
          </div>
          ) : (
            <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Trạng thái</th>
                  <th>Ngày đặt</th>
                  <th>Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
              {
                orders.map((order) => (
                <tr className={`${order.isPaid ? "alert-success": "alert-danger"}`} key = {order._id}>
                  <th>
                    <a href={`/order/${order._id}`} className="link">
                      {order._id}
                    </a>
                  </th>
                  <th>{order.isPaid ? <>Paid</> : <>Not Paid</>}</th>
                  <th>{order.isPaid ? moment(order.createdAt).calendar()
                    : moment(order.createdAt).calendar()}</th>
                  <th>{order.totalPrice}VNĐ</th>
                </tr>
                ))
              }
              </tbody>
            </table>
          </div>
          )
        }
        </>
      )
    }
    </div>
  );
};

export default Orders;
