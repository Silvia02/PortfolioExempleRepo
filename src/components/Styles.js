/*  */
import styled from 'styled-components';
//Home styles
export const DivHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  img {
    width: 20%;
    -webkit-box-shadow: 4px 17px 15px 6px #000000; 
    box-shadow: 4px 17px 15px 7px #000000;    
  }
  .textMe {
    font-size: 20px;
    line-height: 1.4em;
    margin-left: 20px;
    color: white;
    height: 100px;
    color: black;
    
  }
  @media only screen and (max-width: 425px) {
   img {
    margin-left: 30px;
    width: 50%;
   },
   .textMe {
      margin-bottom: -10px;
      height: 100%; 
   }
  }
`;

//NAVBAR styles
export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  font-family: Arial, Helvetica, sams-serif;
  .logo {
    padding: 20px 0;
    margin: 0 auto;
  }
  img {
    width: 80%;
  }
  @media only screen and (max-width: 700px) {
    .logo img {
      width: 80%;
    }
  }
`;

export const DivWrapper = styled.div`
  .wrapper {
    display: inline-flex;
    flex-direction: column;
  }
    @media only screen and (max-width: 768px) {
   ul {
    width: 150px;
      height: 100vh;
   

  }
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 20;
  // display: none;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  
`;

export const Ul = styled.ul`
  li {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  height: 60px;
}
  }
  background-color: #0d2538;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  li a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    width: 50%;
    height: 100%;
    padding:16px;
    border-radius: 4px;
  }
  a:hover {
    background-color: orange;
  }
    @media (max-width: 640px){
     li a{
        width: 100%;
        margin-top: 40px;
      }
    }

`;

export const TitleAbout = styled.h1`
  // text-align: center;
  // font-size: 2rem;
  // color: hotpink;
  margin-bottom: 20px;
`;

export const DivAbout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;

  .divAbout {
    padding: 15px;
    background-color: black;
    border-radius: 20px;
    width: 50%;
    color: white;
    line-height: 1.4em;
  }

  @media (min-width: 1024px) {
    .divAbout {
      margin-top: 50px;
      width: 50%;
    }
  }
  @media (max-width: 600px){
    .divAbout {
      margin-top: 200px;
      width: 80%;
 
    }
  }
 

  h1 {
    text-align: center;
    font-size: 2rem;
    color: hotpink;
    margin-bottom: 20px;
    margin-top: 10px;
  }
`;
//*********FOOTER*******///
export const FooterSection = styled.section`
  display: flex;
  min-height: 200px;
  background-color: #0d2538;

  .divSocial {
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    margin-left: 80px;
  }

  .divSocial a {
    color: orange;
    padding: 3em 0 0 2em;
  }
  a:hover {
    color: hotpink;
  }

  .divContact {
    justify-content: center;
    display: flex;
    padding: 10px;
    flex-direction: row;
    margin-top: 80px;
    width: 100%;
  }

  span {
    padding: 20px;
    height: 70px;
    color: black;
    background-color: orange;
    border-radius: 20px;
    margin-left: 20px;
  }
  @media (max-width: 768px) {
    .divContact,
    .divSocial {
      flex-direction: column;
      margin-top: 20px;
      margin-left: 0;
      margin-right: 0;
    }
    span {
      margin: auto;
      height: 100%;
      background-color: transparent;
      padding: 3em 0 0 2em;
      color: orange;
    }
  }
`;

export const DivSocial = styled.div`
  
`;

export const DivCopy = styled.div`

  

 
`;
 

