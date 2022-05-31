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
    text-decoration: underline; 
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
          <h1>Project</h1>
          <p>
            An application to show products and their details using REST API and
            javascript.
          </p>
          <a href="https://github.com/Silvia02?tab=repositories">
            Go to my github...
          </a>
        </div>
      </Section>
    </>
  );
};
export default Projects;
