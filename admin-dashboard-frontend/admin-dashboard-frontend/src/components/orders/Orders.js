import React from "react";
import { Link } from "react-router-dom";
import moment from "moment"

const Orders = (props) => {
  const {orders} = props
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Total</th>
          <th scope="col">Paid</th>
          <th scope="col">Date</th>
          <th>Status</th>
          <th scope="col" className="text-end">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
      {
        orders.map((order) => (
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
          <td>{moment(order.createdAt).format("MMM Do YYYY")}</td>
          <td>
          {
            order.isDelivered ? (
              <span className="badge btn-success">Delivered</span>
            )
            :
            (
              <span className="badge btn-dark">Not Delivered</span>
            )
          }
          </td>
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
  );
};

export default Orders;
