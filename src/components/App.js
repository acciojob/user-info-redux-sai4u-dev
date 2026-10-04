import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName, updateEmail } from "../app/store";
import "./../styles/App.css";

const App = () => {
  const dispatch = useDispatch();

  const { name, email } = useSelector((state) => state);

  const handleNameChange = (e) => {
    dispatch(updateName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(updateEmail(e.target.value));
  };

  return (
    <div>
      {/* Do not remove the main div */}

      <h1>User Information</h1>

      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      </form>

      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
};

export default App;