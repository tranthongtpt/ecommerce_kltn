import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { listUser } from "../../redux/Actions/userActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const UserComponent = (props) => {
  const {keyword} = props
  const [keyword1, setKeyword1] = useState()
  const dispatch = useDispatch()
  let history = useHistory()

  const userList = useSelector((state) => state.userList)
  const {loading, error, users} = userList

  useEffect(() => {
    dispatch(listUser(keyword))
  },[dispatch, keyword])

  const submitHandler= (e) => {
    e.preventDefault()
    if(keyword1.trim()){
      history.push(`/search/users/${keyword1}`)
    }else{
      history.push("/")
    }
  }

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Customers</h2>
        <div>
          <Link to="#" className="btn btn-primary">
            <i className="material-icons md-plus"></i> Create new
          </Link>
        </div>
      </div>

      <div className="card mb-4">
        <header className="card-header">
          <div className="row gx-3">
            <div className="col-lg-4 col-md-6 me-auto">
            <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="Search..."
                className="form-control"
                onChange={(e) => setKeyword1(e.target.value)}
              />
            </form>
              
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Show 20</option>
                <option>Show 30</option>
                <option>Show 40</option>
                <option>Show all</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Status: all</option>
                <option>Active only</option>
                <option>Disabled</option>
              </select>
            </div>
          </div>
        </header>

        {/* Card */}
        <div className="card-body">
        {
          loading ? <Loading /> : error ? (<Message variant="alert-danger">{error}</Message>)
          :(
            // <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            // {
            //   users.map((user) => (
            //     <div className="col" key={user._id}>
            //     <div className="card card-user shadow-sm">
            //     <div className="card-header">
            //       <img
            //         className="img-md img-avatar"
            //         src="images/user.png"
            //         alt=""
            //       />
            //     </div>
            //     <div className="card-body">
            //       <h5 className="card-title mt-5">{user.name}</h5>
            //       <div className="card-text text-muted">
            //       {
            //         user.isAdmin === true ? (
            //           <p className="m-0">Admin</p>
            //         )
            //         :
            //         (
            //           <p className="m-0">Customer</p>
            //         )
            //       }
            //         <p>
            //           <a href={`mailto:${user.email}`}>{user.email}</a>
            //         </p>
            //       </div>
            //     </div>
            //   </div>
            // </div>
            //   ))
            // }
            // </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Status</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
              {
                users.map((user) => (
                  <tr>
                    <th key={user._id}></th>
                    <td>{user.name}</td>
                    <td> <a href={`mailto:${user.email}`}>{user.email}</a></td>
                    <td>
                      {
                        user.isAdmin === true ? (
                          <p className="m-0">Admin</p>
                        )
                        :
                        (
                          <p className="m-0">User</p>
                        )
                      }
                    </td>
                    <td>   
                      <a data-position="top" data-tooltip="Status" href="/account/{{{this.account_status}}}/{{{this._id}}}" class="{{btnStatus this.account_status}} tooltipped btn btn-small   blue-grey "><i class="material-icons  "></i></a>
                      <a data-position="top" data-tooltip="Update" href="/account/{{{this._id}}}" class="btn btn-small tooltipped  yellow darken-3 button-radius "><i class="material-icons">system_update_alt</i></a>

                      <a data-position="top" data-tooltip="Update"  data-list="{{this.list_id}}" data-id="{{{this._id}}}" class=" tooltipped waves-effect waves-light btn modal-trigger btn_delete red  {{accType this.accountType}}" href="#modal1"><i class="material-icons">delete</i></a>
                    </td>
                  </tr>
                  ))
              }
              </tbody>
            </table>
          )
        }
          

          {/* nav */}
          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default UserComponent;
