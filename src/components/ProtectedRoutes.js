import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Auth from './Auth';
const cookies = new Cookies();


export default function ProtectedRoutes() {
    const token = cookies.get("TOKEN");
  if(token){
    return (<Auth/>)
  }else{
    return(<Navigate to="/"/>)

  }
}
