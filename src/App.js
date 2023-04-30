import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const response = await axios.get("http://localhost:3001/users");
    setUsers(response.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      {users.map((user) => {
        const { id, name, email } = user;
        return (
          <article key={id}>
            <h1>{name}</h1>
            <p>{email}</p>
          </article>
        );
      })}
    </div>
  );
};

export default App;
