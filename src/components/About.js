import React from "react";

function About({
    imageSrc = "https://via.placeholder.com/215",
    aboutTxt
}) {
    return (
      <aside>
          <img src={imageSrc} alt="blog logo"/>
          <p>{aboutTxt}</p>
      </aside>
    );
  }
  
  export default About;