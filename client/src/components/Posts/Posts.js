import React, { useEffect } from "react";
import PropTypes from "prop-types";

import axios from "axios";

const Posts = (props) => {
  useEffect(() => {
    // пока что не работает из-за авторизации
    const fetchData = async () => {
      try {
        const response = await axios.get("/posts");

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return <div>all posts</div>;
};

Posts.propTypes = {};

export default Posts;
