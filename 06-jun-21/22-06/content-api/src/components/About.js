// import React from "react";
import { useContext } from "react";
import { DataContext } from "../context";
const About = () => {
  const data = useContext(DataContext);
  return (
    // <React.Fragment>

    <div>
      {data.map((item) => (
        <h2>
          {item.name}
          {item.emoji}
        </h2>
      ))}
    </div>
    // </React.Fragment>
  );
};
export default About;
