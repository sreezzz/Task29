import {
  FormGroup,
  InputLabel,
  FormControl,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { React, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { addUser, getusers } from "../Service/api";
import { editUser } from "../Service/api";

const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: "20px",
    },
  },
});

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const [user, setUser] = useState(initialValues);
  const { name, username, email, phone } = user;
  const { id } = useParams();
  const classes = useStyle();
  const history = useHistory();

  useEffect(() => {
        loadUserData();
  }, []);

  const loadUserData = async() =>{
     const response = await getusers(id);
     setUser(response.data);
  }

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    await editUser(id, user);
    history.push("./all");
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={username}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={phone}
          id="my-input"
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={() => editUserDetails()}
      >
        Edit User
      </Button>
    </FormGroup>
  );
};

export default EditUser;
