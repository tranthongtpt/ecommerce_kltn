import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createCaterogy, updateCaterogy } from "../../redux/Actions/CaterogyActions";
import { CATEROGY_CREATE_RESET, CATEROGY_UPDATE_RESET, CATEROGY_UPDATE_SUCCESS } from "../../redux/Constants/Caterogy";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import Toast from "../LoadingError/Toast";

const ToastObjects = {
  pauseOnFocusLoss : false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000
}
const CreateCategory = (props) => {
  const {caterogyId} = props
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const dispatch = useDispatch()

  const caterogyCreate = useSelector((state) => state.caterogyCreate)
  const {loading, error, caterogy} = caterogyCreate

  const caterogyEdit = useSelector((state) => state.caterogyEdit)
  const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = caterogyEdit

  useEffect(() => {
    
    if (caterogy){
      toast.success("Caterogy Added", ToastObjects)
      dispatch({type: CATEROGY_CREATE_RESET})
      setName("")
      setImage("")
    }
  }, [caterogy, dispatch, caterogyId, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createCaterogy(name,image))
  }
  
  return (
    <>
    <Toast />
    <div className="col-md-12 col-lg-4">
      <form onSubmit={submitHandler}>
      {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <div className="mb-4">
          <label htmlFor="product_name" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="form-control py-3"
            id="product_name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="product_name" className="form-label">
            Image
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="form-control py-3"
            id="product_name"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        {/*<div className="mb-4">
          <label className="form-label">Images</label>
          <input className="form-control" type="file" />
        </div>
        <div className="mb-4">
          <label className="form-label">Description</label>
          <textarea
            placeholder="Type here"
            className="form-control"
            rows="4"
          ></textarea>
          </div> */}

        <div className="d-grid">
          <button className="btn btn-primary py-3">Create category</button>
        </div>
          <br/>
      </form>
    </div>
    </>
  );
};

export default CreateCategory;
