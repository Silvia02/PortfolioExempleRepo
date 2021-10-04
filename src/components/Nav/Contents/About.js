import React from 'react';
import { DivAbout, TitleAbout, SectionAbout } from "../../Styles.js";

const About = () => {
    return (
      <>
        <DivAbout id="About">
          <div className="divAbout">
            <TitleAbout>About Me</TitleAbout>
            <span>
              I am from Amazonas Brazil, I like the simple things in life. <br/> I am
              curious and like to learn new things. Love quiet places and
              breathe the fresh air from nature. <br/>I have big interest and
              ambition to learn about Web Development and the digital world. I
              want to contribute to and be part of that development.
            </span>
          </div>
        </DivAbout>
      </>
    );
}

export default About;



