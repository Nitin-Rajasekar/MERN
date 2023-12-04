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



const Vendor_profile = (props) => {


  const [l_name, setLname] = useState("");
  const [l_password, setLpassword] = useState("");
  const [l_contact, setLcontact] = useState("");
  const [l_shop, setLshop] = useState("");
  const [l_open, setLopen] = useState("");
  const [l_close, setLclose] = useState("");
  



  const onChangeName = (event) => {
    setLname(event.target.value);
  };

  const onChangeShop = (event) => {
    setLshop(event.target.value);
  };

  const onChangeContact = (event) => {
    setLcontact(event.target.value);
  };

  const onChangeOpen = (event) => {
    setLopen(event.target.value);
  };
  const onChangeClose = (event) => {
    setLclose(event.target.value);
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
      .post("http://localhost:4000/Vendor/getvendorname", newLogger)

      .then((response) => {


        setLname(response.data);

        console.log(response.data);



      });

    axios
      .post("http://localhost:4000/Vendor/getvendorshop", newLogger)

      .then((response) => {


        setLshop(response.data);

        console.log(response.data);



      });

    axios
      .post("http://localhost:4000/Vendor/getvendorcontact", newLogger)

      .then((response) => {


        setLcontact(response.data);

        console.log(response.data);



      });

    axios
      .post("http://localhost:4000/Vendor/getvendoropen", newLogger)

      .then((response) => {


        setLopen(response.data);

        console.log(response.data);



      });


    axios
      .post("http://localhost:4000/Vendor/getvendorclose", newLogger)

      .then((response) => {


        setLpassword(response.data);

        console.log(response.data);



      });

    axios
      .post("http://localhost:4000/Vendor/getvendorpassword", newLogger)

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
      "manag_name": l_name,
      "open": l_open,
      "password": l_password,
      "close": l_close,
      "contact": l_contact,
      "shop_name": l_shop



    };

    axios
      .post("http://localhost:4000/Vendor/updatevendor", newLogger)

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
        label={"Shop"}
        variant="outlined"
        value={l_shop}
        onChange={onChangeShop}
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
        label={"Opens"}
        variant="outlined"
        value={l_open}
        onChange={onChangeOpen}
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
        label={"Closes"}
        variant="outlined"
        value={l_close}
        onChange={onChangeClose}
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

export default Vendor_profile;
