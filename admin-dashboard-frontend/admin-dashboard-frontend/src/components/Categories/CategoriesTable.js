import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCaterogy } from "../../redux/Actions/CaterogyActions";

const CategoriesTable = (props) => {
  const { caterogy } = props;
  const dispatch = useDispatch()

  const deleteHandler = (id) => {
    if(window.confirm("Sure??")){
      dispatch(deleteCaterogy(id))
    }
  }

  return (
    <>
        <tbody>
          <tr>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </td>
            <td>{caterogy._id}</td>
            <td>
              <b>{caterogy.name}</b>
            </td>
            <td>{caterogy.image}</td>
            <td className="text-end">
              <div className="dropdown">
                <Link
                  to="#"
                  data-bs-toggle="dropdown"
                  className="btn btn-light"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item text-danger" to="#" onClick={() => deleteHandler(caterogy._id)}>
                    Delete
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        </>
  );
};

export default CategoriesTable;
