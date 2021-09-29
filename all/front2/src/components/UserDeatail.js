import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const UserDeatail = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const history = useHistory();

  const changeName = () => {
    axios
      .post("http://localhost:4000/api/users/" + params.id, { name: username })
      .then((result) => {
        history.push("/users");
      });
  };

  useEffect(() => {
    let result = axios
      .get("http://localhost:4000/api/users/" + params.id)
      .then((result) => {
        setUser(result.data);
        setUsername(result.data.name);
      });

    return () => {};
  }, []);

  return (
    <h1>
      hola user datail {username}
      <button
        onClick={() => {
          changeName();
        }}
      >
        change name
      </button>
      <input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      {user && (
        <div>
          {user.name} {user.description}
        </div>
      )}
    </h1>
  );
};

export default UserDeatail;
