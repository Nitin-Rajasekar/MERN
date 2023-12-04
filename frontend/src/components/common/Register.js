import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";



import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const Register = (props) => {


  

  const handleChange = (event) => {
    setType(event.target.value);
    if (type === 2) {
      setCount(
        <pre>
        </pre>
      );
    }
    else if(type==1)
    {
      setCount(
        <pre>

        </pre>
      );
    }
  };

  const [type, setType] = useState('');
  const [count, setCount] = useState("");


  const [name, setName] = useState("");
  const [b_email, setBemail] = useState("");
  const [b_contact_num, setBcontactnum] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [batch, setBatch] = useState("");
  const [date, setDate] = useState(null);



  const [manag_name, setManagname] = useState("");
  const [shop_name, setShopname] = useState("");
  const [v_email, setVemail] = useState("");
  const [v_contact_num, setVcontactnum] = useState("");
  const [open_time, setOpentime] = useState("");
  const [close_time, setClosetime] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeBemail = (event) => {
    setBemail(event.target.value);
  };

  const onChangeBcontactnum = (event) => {
    setBcontactnum(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeBatch = (event) => {
    setBatch(event.target.value);
  };

  const onChangeDate = (event) => {
    setDate(event.target.value);
  };

  const onChangeManagname = (event) => {
    setManagname(event.target.value);
  };

  const onChangeShopname = (event) => {
    setShopname(event.target.value);
  };

  const onChangeVmail = (event) => {
    setVemail(event.target.value);
  };

  const onChangeVcontactnum = (event) => {
    setVcontactnum(event.target.value);
  };

  const onChangeOpentime = (event) => {
    setOpentime(event.target.value);
  };

  const onChangeClosetime = (event) => {
    setClosetime(event.target.value);
  };

  const resetInputs = () => {
    {/*setName("");
  setEmail("");*/}
    setDate(null);
  };

  const onSubmit_b = (event) => {
    event.preventDefault();

    const newBuyer = {

      name: name,
      email: b_email,
      contact: b_contact_num,
      age: age,
      password: password,
      batch: batch
      
    };

    axios
      .post("http://localhost:4000/buyer/registerbuyer", newBuyer)
      .then((response) => {
        alert("Welcome " + response.data.name+"!");
        console.log(response.data);
      });

    resetInputs();
  };


  const onSubmit_v = (event) => {
    event.preventDefault();

    const newVendor = {

      manag_name: manag_name,
      shop_name: shop_name,
      email: v_email,
      password: password,
      contact: v_contact_num,
      open: open_time,
      close: close_time
      
      
    };

    axios
      .post("http://localhost:4000/vendor/registervendor", newVendor)
      .then((response) => {
        alert("Welcome " + response.data.shop_name+"!");
        console.log(response.data);
      });

    resetInputs();
  };


  const handleChange2 = (event) => {
    setBatch(event.target.value);
  };
  const z="";
  const x = (<pre>

          
    <form align="margin-left: auto; margin-right: auto">
      <Grid item xs={12}>

        <TextField
          label="Manager Name"
          variant="outlined"
          value={manag_name}
          onChange={onChangeManagname}
        />
        <br></br><br></br>
        <TextField
          label="Shop Name"
          variant="outlined"
          value={shop_name}
          onChange={onChangeShopname}
        />
        <br></br><br></br>
        <TextField
          label="Email address"
          variant="outlined"
          value={v_email}
          onChange={onChangeVmail}
        />
        <br></br><br></br>
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={onChangePassword}
        />
        <br></br><br></br>
        <TextField
          label="Contact number"
          variant="outlined"
          value={v_contact_num}
          onChange={onChangeVcontactnum}
        />

        <br></br><br></br>
        <TextField
          label="Opening time"
          variant="outlined"
          value={open_time}
          onChange={onChangeOpentime}
        />
        <br></br><br></br>

        <TextField
          label="Closing time"
          variant="outlined"
          value={close_time}
          onChange={onChangeClosetime}
        />

        <br></br><br></br>



        
         <br/><br/>
        <Grid item xs={12}>
          <Button variant="contained" onClick={onSubmit_v}>
            Register
          </Button>
        </Grid>
      </Grid>
    </form>

  </pre>);
  const y =(<html><pre>

          
    <form align="margin-left: auto; margin-right: auto">
      <Grid item xs={12}>

        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={onChangeName}
        />
        <br></br><br></br>
        <TextField
          label="Email"
          variant="outlined"
          value={b_email}
          onChange={onChangeBemail}
        />
        <br></br><br></br>
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={onChangePassword}
        />
        <br></br><br></br>
        <TextField
          label="Contact number"
          variant="outlined"
          value={b_contact_num}
          onChange={onChangeBcontactnum}
        />
        <br></br><br></br>
        <TextField
          label="Age"
          variant="outlined"
          value={age}
          onChange={onChangeAge}
        />
        <br></br><br></br>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Batch</InputLabel>
            <Select
              labelId="demo-simple-select-label_2"
              id="demo-simple-select_2"
              value={batch}
              label="Batch"
              onChange={handleChange2}
            >
              <MenuItem value={"UG1"}>UG1</MenuItem>
              <MenuItem value={"UG2"}>UG2</MenuItem>
              <MenuItem value={"UG3"}>UG3</MenuItem>
              <MenuItem value={"UG4"}>UG4</MenuItem>
              <MenuItem value={"UG5"}>UG5</MenuItem>

            </Select>
          </FormControl>
        </Box>
        <br/><br/>
        <Grid item xs={12}>
          <Button variant="contained" onClick={onSubmit_b}>
            Register
          </Button>
        </Grid>
      </Grid>
    </form>

  </pre></html>);

  


  return (

    <pre>


      <Grid container align={"center"} spacing={2}>
        {/*<Grid item xs={12}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={onChangeUsername}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={onChangeEmail}
          />
  </Grid>*/}

  
        





        <Grid item xs={12}>
        <Box sx={{ minWidth: 120 }}>
          
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="User Type"
              //onChange={function(){setCount(<p>hiiii</p>)}}
              onChange={handleChange}
            >
              <MenuItem value={1}>Buyer</MenuItem>
              <MenuItem value={2}>Vendor</MenuItem>
              {/*<MenuItem value={30}>Thirty</MenuItem>*/}
            </Select>
          
        </Box>
        </Grid>


















      </Grid>


      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
      {type === 1?y:z} 
      {type === 2?x:z}

      </div>

    </pre>





  );
};

export default Register;
