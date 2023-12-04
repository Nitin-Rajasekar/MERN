import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";



import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

var glob_email="";

const Login = (props) => {

   
   const [is_buyer, setIs_buyer] = useState("");
   const [is_vendor, setIs_vendor] = useState("");
   
   var setGlob="";
  // const [glob_email, setGlob] = useState("");

   var glob_var=useState("");
   glob_email=glob_var[0];
   setGlob=glob_var[1];
   
   
   
   
   const navigate = useNavigate();
   

  const onSubmit_b = (event) => {
    event.preventDefault();
    //req_b_email=l_email;
    setGlob(l_email);
   
    const newLogger = {

      
      email: l_email,
      password: password
      
    };

    axios
      .post("http://localhost:4000/buyer/loginbuyer", newLogger)
      
      .then((response) => {
        
        alert("Login successful!");
    
        console.log(response.data);
        if(response.data==="Email Found")
        {
            
            navigate("/buyer_profile");
        }
        
        
        
      })
      .catch(error => {
        alert("Incorrect username or password");
      });

    
  };

  const onSubmit_v = (event) => {
    event.preventDefault();
    setGlob(l_email);

    const newLogger = {

      
      email: l_email,
      password: password
      
    };

    axios
      .post("http://localhost:4000/vendor/loginvendor", newLogger)
      
      .then((response) => {
        alert("Login successful!");
        
        
    
        console.log(response.data);
        if(response.data==="Email Found")
        {
            
            
            navigate("/vendor_profile");
        }
      
        
        
        
      })
      .catch(error => {
        alert("Incorrect username or password");
      });

    
  };





  const [l_email, setLemail] = useState("");
   const [password, setPassword] = useState("");
   const onChangeLemail = (event) => {
    setLemail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/profile") // unimplemented
      .then((response) => {
        setDetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
  		<pre>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
      
              
              

           <TextField
          label="Email"
          variant="outlined"
          value={l_email}
          onChange={onChangeLemail}
        />
        </div>
        <html><br></br><br></br></html>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TextField
          label={"Password"}
          type="password"
          variant="outlined"
          value={password}
          onChange={onChangePassword}
        />
        </div>
        <br></br><br></br>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button variant="contained" onClick={onSubmit_b}>
            Login as Buyer
          </Button>
          
          </div>
          <br></br>
          <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
          <Button variant="contained" onClick={onSubmit_v}>
            Login as Vendor
          </Button>
        </div>
          <br></br><br></br>
          
          
  </pre>
  );
  
  
};

export{glob_email};
export default Login;





