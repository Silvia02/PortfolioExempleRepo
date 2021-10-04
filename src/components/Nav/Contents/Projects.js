import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  margin: auto;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
  justify-content: center;
  border-radius: 20px;

  .boxProject {
    padding: 20px;
    margin-bottom: 20px;
    color: white;
    width: 50%;
    height: 100%;
    background-color: black;
     margin-top: 50px;
   

  }
  h1 {
    margin-top: -20px;
    color: hotpink;
    line-height: 1.5em;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 20px;  
  }

  .boxProject p {
    margin-bottom: 30px;
  }
  .boxProject a {
    padding: 20px;
    text-decoration: none;
    color: pink;
  }
  a:hover {
    color: hotpink;
  a:hover {
      color:hotpink;
}

`;

const Projects = () => {
  return (
    <>
      <Section id="Projects">
        <div className="boxProject">
          <h1>Projects</h1>
          <p>
            In this project, I'm fetching tree diferents API to call and
            grabbing the apis obects. I'm using pure CSS3 and javascript.
          </p>
          <a href="https://silvia02.github.io/API-APP/">
            Go to this project...
          </a>
        </div>
      </Section>
    </>
  );
};
export default Projects;
