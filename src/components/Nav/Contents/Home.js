import React from 'react';
import silvia from '../../../images/silvia.jpg';
import { DivHome} from '../../Styles.js';


const Home = ()=> {

    return (
      <>
        <DivHome>
          <img src={silvia} alt="me" />
          <div className="textMe">
            My name is Silvia, I'm a frontend developer. <br/> I like to code and to be
            in constant learning. <br/>-Stockholm, Sweden!
          </div>
        </DivHome>
       
       
      
      </>
    );
}

export default Home;