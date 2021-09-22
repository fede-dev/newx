import { useState, useEffect } from "react"
import axios from 'axios'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const User = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/api/users')
            .then((response) => {

                setUsers(response.data)
            })
            .catch((error => {
                console.log(error)
            }))

        return () => {

        }
    }, [])

    return (
        <>

            {users.map((user) => {
                return (

                    <List>
                        <ListItem alignItems="flex-start">
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
                                    >{user.description}
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                )
            })}
        </>
    )
}

export default User






