import React from "react";

import mongo from "../../img/mongo.png";
import express from "../../img/express.png";
import react from "../../img/react.png";
import node from "../../img/node.png";
import "./Landing.css";

function Landing() {
  return (
    <div className="Landing">
      <div className="Landing_content">
        <h1>Welcome to MERN blog</h1>
        <h3>This site is using MERN stack</h3>
        <div className="Landing_block">
          <div>
            <img className="Landing_pic" src={mongo} alt="pic" />
            <p>MongoDB</p>
          </div>
          <div>
            <img className="Landing_pic" src={express} alt="pic" />
            <p>ExpressJS</p>
          </div>
          <div>
            <img className="Landing_pic" src={react} alt="pic" />
            <p>ReactJS</p>
          </div>
          <div>
            <img className="Landing_pic" src={node} alt="pic" />
            <p>NodeJS</p>
          </div>
        </div>
        <h3>Another technologies</h3>
        <div className="Landing_text">
          <strong>Backend:</strong>
          <p>
            bcryptjs, config, express-validator, gravatar, jsonwebtoken,
            mongoose; <br /> concurrently and nodemon as dev dependencies.
          </p>
          <strong>Frontend:</strong>
          <p>
            axios, is_js, moment, react-moment, redux, react-redux,
            redux-devtools-extension, redux-thunk, react-router-dom, uuidv4,
            styled-components, material-ui.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
