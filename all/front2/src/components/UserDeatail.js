import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 300px;
  margin: auto 0;
  margin-top: 30px;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 20px;
  margin-left: 20px;
`;

const UserDeatail = () => {
  const params = useParams();
  const history = useHistory();

  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [pic, setPic] = useState("");

  const submit = () => {
    axios
      .post("http://localhost:4000/api/users/" + params.id, {
        name: username,
        description: description,
        pic: pic,
      })
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
        setDescription(result.data.description);
        setPic(result.data.pic);
      });

    return () => {};
  }, []);

  return (
    <>
      <Img src={user.pic} />
      <h2>
        Mr.President name´s: {username}
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <div>
          <input
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            value={pic}
            onChange={(e) => {
              setPic(e.target.value);
            }}
          />
        </div>
        {user && (
          <Container>
            {user.name} {user.description}
          </Container>
        )}
      </h2>
      <button onClick={() => submit()}>salvar cmabios</button>
    </>
  );
};

export default UserDeatail;
