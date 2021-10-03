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
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
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

  const changeDescription = () => {
    axios
      .post("http://localhost:4000/api/users/" + params.id, {
        description: description,
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
        setDescription(result.data.description);
      });

    return () => {};
  }, []);

  return (
    <>
      <Img src={user.pic} />
      {/* <button onClick={() => changeImage()}>change image</button> */}
      <h2>
        Mr.President name´s: {username}
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button
          onClick={() => {
            changeName();
          }}
        >
          Change Name
        </button>
        <div>
          {description}
          <input
            value="new Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button onClick={() => changeDescription()}>
            Change Description
          </button>
        </div>
        {user && (
          <Container>
            {user.name} {user.description}
          </Container>
        )}
      </h2>
    </>
  );
};

export default UserDeatail;
