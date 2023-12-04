import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";


import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";




import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Login from "../common/Login";
import { glob_email } from "../common/Login";

//import onChangeLemail from "../users/Buyer_profile";



const Buyer_profile = (props) => {


  const [l_name, setLname] = useState("");
  const [l_password, setLpassword] = useState("");
  const [l_contact, setLcontact] = useState("");
  const [l_age, setLage] = useState("");
  const [l_batch, setLbatch] = useState("");



  const onChangeName = (event) => {
    setLname(event.target.value);
  };

  const onChangeAge = (event) => {
    setLage(event.target.value);
  };

  const onChangeContact = (event) => {
    setLcontact(event.target.value);
  };

  const onChangeBatch = (event) => {
    setLbatch(event.target.value);
  };

  const onChangePassword = (event) => {
    setLpassword(event.target.value);
  };


  const onSubmit_s = (event) => {


    event.preventDefault();
    //req_b_email=l_email;


    const newLogger = {


      "email": glob_email,



    };

    axios
      .post("http://localhost:4000/buyer/getbuyername", newLogger)

      .then((response) => {


        setLname(response.data);

        console.log(response.data);



      });

    axios
      .post("http://localhost:4000/buyer/getbuyerbatch", newLogger)

      .then((response) => {


        setLbatch(response.data);

        console.log(response.data);



      });

    axios
      .post("http://localhost:4000/buyer/getbuyercontact", newLogger)

      .then((response) => {


        setLcontact(response.data);

        console.log(response.data);



      });

    axios
      .post("http://localhost:4000/buyer/getbuyerage", newLogger)

      .then((response) => {


        setLage(response.data);

        console.log(response.data);



      });


    axios
      .post("http://localhost:4000/buyer/getbuyerpassword", newLogger)

      .then((response) => {


        setLpassword(response.data);

        console.log(response.data);



      });

  };


  const onSubmit_u = (event) => {


    event.preventDefault();
    //req_b_email=l_email;


    const newLogger = {


      "email": glob_email,
      "name": l_name,
      "age": l_age,
      "password": l_password,
      "batch": l_batch,
      "contact": l_contact



    };

    axios
      .post("http://localhost:4000/buyer/updatebuyer", newLogger)

      .then((response) => {




        console.log(response.data);



      });






  };

  return (<pre>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>


      <TextField
        label={"Email"}
        variant="outlined"
        value={glob_email}
      //onChange={onChangeLemail}
      />
    </div>
    <html><br></br><br></br></html>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <TextField
        label={"Name"}
        variant="outlined"
        value={l_name}
        onChange={onChangeName}
      />
    </div>

    <html><br></br><br></br></html>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <TextField
        label={"Batch"}
        variant="outlined"
        value={l_batch}
        onChange={onChangeBatch}
      />
    </div>
    <html><br></br><br></br></html>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>

      <TextField
        label={"Age"}
        variant="outlined"
        value={l_age}
        onChange={onChangeAge}
      />
    </div>
    <html><br></br><br></br></html>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>

      <TextField
        label={"Contact"}
        variant="outlined"
        value={l_contact}
        onChange={onChangeContact}
      />
    </div>
    <html><br></br><br></br></html>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
    <TextField
      label={"Password"}
      variant="outlined"
      value={l_password}
      onChange={onChangePassword}
    />
    </div>
    <html><br></br><br></br></html>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>

    <Button variant="contained" onClick={onSubmit_s}>
      Show details
    </Button>
    </div>
    <html><br></br><br></br></html>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
    <Button variant="contained" onClick={onSubmit_u}>
      Update details
    </Button>
    </div>

  </pre>)

};

export default Buyer_profile;
