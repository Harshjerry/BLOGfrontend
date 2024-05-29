import React from "react";
import {mobile } from "./../responsive";

import styled from "styled-components";
const Container=styled.div`
justify-content: center;
align-items: center;
text-align: center;
display: flex;
height:50vh;
width:100vw;
background-color:#452713;
flex-direction:column;
`;

const Wrapper=styled.div`
justify-content: center;
align-items: center;
text-align: center;
display: flex;
flex-direction:column;
height:85%;
width:80%;
`;


const  NewsletterItem=styled.div`
flex:1;
width:100%;
justify-content: center;
align-items: center;
text-align: center;
display: flex;
`;

const NewsletterHead=styled.h1`
color:white;
`;


const NewsletterCaption=styled.h3`
color:white;
font-weight:lighter;
`

const NewsletterCaptionBox=styled.div`
height:100%;
width:100%;
padding: 10px 24%;
 ${mobile({padding:"5px 6%"})};
`;


const NewsletterInput=styled.input`
height:60%;
width:50%;
text-decoration: none;
border: none;
padding:5px;
border-radius:10px;
${mobile({width:"70%"})};


&::placeholder {
  padding: 10px;
  color: #999;
}
`;
const NewsletterButton=styled.button`
width:15%;
height:70%;
background-color:#7F4420;
border:none;
border-radius:10px;
color:white;
${mobile({width:"30%",height:"85%"})};
`;

export default function Newsletter(){
return (<Container>
                    <Wrapper>
                    <NewsletterItem>  <NewsletterHead>  Hungry for more stories?</NewsletterHead>   </NewsletterItem>
                    <NewsletterItem>    <NewsletterCaptionBox><NewsletterCaption>  Sign-up for the HarshBlog  , get latest updates on new destinations, new experiences , inpiration stories into your mailbox</NewsletterCaption>   </NewsletterCaptionBox>       </NewsletterItem>
                    <NewsletterItem>     <NewsletterInput  placeholder="Enter your email"/>                     </NewsletterItem>
                    <NewsletterItem>  <NewsletterButton> Subscribe</NewsletterButton></NewsletterItem>
                    </Wrapper>
  </Container>);
}
