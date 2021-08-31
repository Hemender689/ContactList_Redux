import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAction } from "../Redux/Actions";

const Home = () => {
  const data = useSelector((state) => state.rootReducer);

  const length = data.length;

  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch(deleteAction(id));
  };

  return (
    <div>
      <div className="hometext">
        <h2>Welcome to React Redux Contact Book</h2>
      </div>

      {length ? (
        <table className="table" border="1rem">
          <thead>
            <tr>
              {/* <th>Id</th> */}
              <th>Name</th>
              <th>Email</th>
              <th>Contact number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, i) => (
              <tr key={user.id}>
                {/* <td>{user.id}</td> */}
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td>
                  <Link to={`/edit/${user.id}`}>
                    <button className="button">Edit</button>
                  </Link>
                  <button
                    className="button"
                    type="button"
                    onClick={() => deleteContact(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
      <div>
        <Link to="/add">
          <button className="button">Add New Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
