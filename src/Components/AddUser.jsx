import { FormGroup, InputLabel, FormControl, Input, Button, makeStyles, Typography } from '@material-ui/core';
import {React, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { addUser } from '../Service/api';

const useStyle = makeStyles({
    container:{
        width:"50%",
        margin:"5% 0 0 25%",
        '& > *': {
            marginTop: "20px"
        }
    }
})

const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: ''
}



const AddUser = () =>{
    const [ user, setUser ] = useState(initialValues);
    const {name, username, email, phone} = user;
    const classes = useStyle();
    const history = useHistory();


    const onValueChange = (e) => {
      console.log(e.target.value);
      setUser({ ...user, [e.target.name]: e.target.value });
    };

    const addUserDetails = async () => {
      await addUser(user);
      history.push("./all");
    };

    
    return (
      <FormGroup className={classes.container}>
        <Typography variant="h4">Add User</Typography>
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
        <Button variant="contained" color="primary" onClick={() => addUserDetails()}>
          Add User
        </Button>
      </FormGroup>
    );
}

export default AddUser;