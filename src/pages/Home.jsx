//import React, { useState, useEffect } from 'react';
import * as React from "react";
//import { useState, useEffect } from "react";
import { getUserId, getUserName } from "../reducks/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";

const Home = (props) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const username = getUserName(selector);
  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => dispatch(push("/login"))}>ログインへ</button>
      <p>uid:{uid}</p>
      <p>username:{username}</p>
    </div>
  );
};

export default Home;
