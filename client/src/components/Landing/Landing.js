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
        <h1>Welcome to MERN GameZone</h1>
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
        <h3>Another technologies:</h3>
        <p className="Landing_text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
      </div>
    </div>
  );
}

export default Landing;
