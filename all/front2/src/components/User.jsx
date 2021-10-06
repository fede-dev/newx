import { useState, useEffect } from "react";
import axios from "axios";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

const DeletePresident = styled.img`
   width: 20px;
   height: 20px;
   margin-bottom:20px;
   background-color: yellow;
`

const ListContainer = styled(ListItem)`
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  margin-left: 40px;
  width: 100%;
`

const User = () => {
  const [users, setUsers] = useState([]);

  const history = useHistory();

  const handleSingleCard = (id) => {
    history.push("/users/" + id);
  };

  useEffect(() => {
    getUser() 

    return () => {};
  }, []);

  const handleDelete = async(userId)=> {
   await axios.delete("http://localhost:4000/api/users/" + userId)
   getUser()
  }

  const getUser = ()=>{
    axios
      .get("http://localhost:4000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <List>
        {users.map((user) => {
          return (
            <>
              <ListContainer
                alignItems="flex-start"
                onClick={() => handleSingleCard(user.id)}
              >
                <ListItemAvatar>
                  <Avatar alt="Barak Obama" src={user.pic} />
                </ListItemAvatar>
                <ListItemText
                  primary={user.name}
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {user.description}
                    </Typography>
                  }
                />
              </ListContainer>
              <DeletePresident src={"https://cdn-icons-png.flaticon.com/512/54/54324.png"} onClick={()=> handleDelete(user.id)}/>
              <Divider variant="inset" component="li" />
            </>
          );
        })}
      </List>
    </>
  );
};

export default User;
