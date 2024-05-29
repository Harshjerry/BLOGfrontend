
import React from "react";
import styled from "styled-components";
import {mobile } from "./../responsive";
import { Link } from "react-router-dom";
import {useContext} from "react";
import {Context} from "./../context/context.js";
//${mobile({ display:"none"})};

const Container= styled.div`
justify-content: space-between;
align-items: center;
text-align: center;
display: flex;
height:10vh;
width:100vw;
gap:5vw;
`;

const NavItem=styled.div`
flex:1;
height:100%;
justify-content: center;
align-items: center;
text-align: center;
display: flex;
`;

const NavMiddle=styled.div`
justify-content: center;
align-items: center;
text-align: center;
display: flex;
background-color:white;
height:60%;
flex:1;
border-radius:30px;
gap:2px;
${mobile({fontSize:"10px",flex: "1.3"})};
`;

const NavMidLink=styled.div`
flex:1;
color:black;
font-family: "Poppins", sans-serif;
 font-weight: 100;
 font-style: normal;
`;
const NavRightLink=styled.div`
flex:1;
color:white;
font-family: "Poppins", sans-serif;
 font-weight: 100;
 font-style: normal;
 ${mobile({fontSize:"12px",flex: "0.8"})};
`;

const NavItemR=styled.div`
flex:1;
height:100%;
justify-content: center;
align-items: center;
text-align: center;
display: flex;
 ${mobile({marginRight:"24px"})};
`;
const Brand=styled.h2`
font-size:2rem;
margin-right:5vw;
font-family: "Orbitron", sans-serif;
 font-optical-sizing: auto;
 ${mobile({fontSize:"1.5rem"})};
`;


const Navbar=()=>{

  const{user,dispatch} = useContext(Context);

  const handleLogOut= ()=>{
dispatch({type:"LOGOUT"});
};


  return (<Container>

<NavItem>
<Brand>Harsh</Brand>
</NavItem>


<NavItem>
       <NavMiddle>
         <Link to="/"> {/* Use Link component for navigation */}
           <NavMidLink>Home</NavMidLink>
         </Link>
         <NavMidLink>About</NavMidLink>
         {user && (
           <NavMidLink onClick={handleLogOut}>LOGOUT</NavMidLink>
         )}
       </NavMiddle>
     </NavItem>




   <NavItemR>
     {user ? (
       <>
         <Link className="link" to="/settings">
           <img
             className="topImg"
             src={user.profilePic}
             alt=""
           />
         </Link>
         <NavRightLink>User 1</NavRightLink>
       </>
     ) : (
       <>
         <Link className="link" to="/login">
           <NavRightLink>Login</NavRightLink>
         </Link>
         <Link className="link" to="/register">
           <NavRightLink>Register</NavRightLink>
         </Link>
       </>
     )}
   </NavItemR>


    </Container>)
}

export default Navbar;
