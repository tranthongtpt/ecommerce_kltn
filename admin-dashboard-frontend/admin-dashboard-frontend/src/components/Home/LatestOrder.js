import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const LatestOrder = (props) => {
  const {loading, error, orders} = props
  return (
    <div className="card-body">
      <h2 className="card-title">New orders</h2>
      {
        loading ? <Loading /> : error ? <Message variant="alert-danger">{error}</Message> :
        (
          <div className="table-responsive">
         <table className="table">
          <tbody>
          {
            orders.slice(0,5).map((order) => (
              <tr key={order._id}>
              <td>
                <b>{order.user.name}</b>
              </td>
              <td>{order.user.email}</td>
              <td>{order.totalPrice} VNĐ</td>
              <td>
              {
                order.isPaid ? (
                  <span className="badge rounded-pill alert-success">
                    Paid At {moment(order.createdAt).format("MMM Do YYYY")}
                  </span>
                )
                :
                (
                  <span className="badge rounded-pill alert-danger">
                    Not Paid
                  </span>
                )
              }
                
              </td>
              <td>{moment(order.createdAt).calendar()}</td>
              <td className="d-flex justify-content-end align-item-center">
              {
                order.isPaid ? (
                  <Link to={`/order/${order._id}`} className="text-success">
                  <i className="fas fa-eye"></i>
                </Link>
                )
                :
                (
                  <div className="text-dark">
                  <i className="fas fa-eye"></i>
                </div>
                )
              }
                
              </td>
            </tr>
            ))
          }
          </tbody>
        </table>
      </div>
        )
      }
      
    </div>
  );
};

export default LatestOrder;
