import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import CreateCategory from "./CreateCategory";
import CategoriesTable from "./CategoriesTable";
import { listCaterogy } from "../../redux/Actions/CaterogyActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const MainCategories = () => {
  const dispatch = useDispatch()

  const caterogyList = useSelector((state) => state.caterogyList)
  const {loading, error,categories} = caterogyList

  const caterogyDelete = useSelector((state) => state.caterogyDelete)
  const { error: errorDelete, success:successDelete} = caterogyDelete

  useEffect(() => {
    dispatch(listCaterogy())
  },[dispatch, successDelete])
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Categories</h2>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
        {errorDelete && (<Message variant="alert-danger">{errorDelete}</Message>)}
        {
          loading ? (
            <Loading />
          ) : ( error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row">
              <>
              <CreateCategory />
              <div className="col-md-12 col-lg-8">
              <table className="table">
              <thead>
              <tr>
              <th>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
              </th>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
              {
                categories.map((caterogy) => (
                  <CategoriesTable caterogy={caterogy} key={caterogy._id}/>
                ))
              }
              </table>
              </div>
              </>
          </div>
          ))
        }
          
        </div>
      </div>
    </section>
  );
};

export default MainCategories;
