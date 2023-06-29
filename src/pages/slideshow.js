import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

import ScrollingMessageComponent from './ScrollingMessage';
import logo from './../images/logo-color-1.png'



const SlideshowImage = styled.img`
position: absolute;
top: 10em;
left: 3em;
width: 100vh ;
height: 42vh;
`;

const images = [
  'https://via.placeholder.com/600x400?text=Samskrita+Bharati',
  'https://via.placeholder.com/600x400?text=Image+2',
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];





const MainTitle = styled.div`
  font-family: "Samarkan";
  font-size: 3em;
  position: absolute;
  right: 17%;
  padding: 0.05em 0;
`;



const SlideshowContainer = styled.div`
  
`;
const TopRight = styled.img`
  position: absolute;
  top: 0.5emem;
  left: 0.75em;
  width: 17em ;
  height: 8em;
`;





const OngoingEvents = styled.div`
  position: absolute;
  top: 10em;
  right: 2em;
  width: 60vh;
  height: 42vh;
  background: #F5F5F5;
  display: flex;
  flex-direction: column;
  gap: 1em; 
`;

const Events = styled(Link)`
  font-size: 2.5em;
  padding-left: 0.5em; 
  text-decoration: none;
  color: black;

`;
const Event = styled(Link)`
  color: black;
  font-size: 2em;
  padding-left: 0.5em; 
  text-decoration: none;
  flex-direction: column;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: lightyellow;
    color: black;
  }
  &.active {
    color: black;
  }
  .sanskrit-text {
    color: brown;
    font-size: 0.8em;
  }
`;

const CenteredContent = styled.div`
  position: absolute;
  top: calc(40vh + 19.5em);
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: centre;
`;

const TitleBox = styled.div`
  background-color: #F5F5F5;
  padding: 1em;
  margin-bottom: 1em;
  margin-left: 1em;
  width: 50vh;

`;

const Title = styled.h2`
  font-size: 2em;
  background-color: black;
  color: white;
  padding: 0.5em 0.5em;
`;


const LinkContainer = styled.div`
  display: flex;
`;

const Link1 = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.4rem;  

  &:hover {
    text-decoration: underline;
  }
`;

const Text = styled.p`
  font-size: 1.4rem;
  margin: 0.5rem;
`;

const RightContent = styled.div`
  position: absolute;
  top: calc(40vh + 19.5em); 
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: centre;
`;

const WhyBox = styled.div`
  background-color: #F5F5F5;
  padding: 1em;
  width: 56vh;
  height: 25vh;

`;

const Why = styled.h2`
  font-family: "Samarkan";
  font-size: 2.5em;
  background-color: black;
  color: white;
  padding: 0.25em 0.5em;
`;


const RollingText = styled.div`
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  top: calc(40vh + 13em);
  width: 95%;
  left: 0em;
  transform: translateX(1em);
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  span {
    display: inline-block;
    animation: marquee 20s linear infinite;
    font-size: 2rem;
    font-family: "Times New Roman", serif;
    color: #333;
  }

  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
`;



function Slideshow() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    
    <SlideshowContainer>
       <SlideshowImage src={images[currentImage]} />


      <MainTitle>Samskrita Bharati Singapore</MainTitle>
      <TopRight src={logo} />

      {/* <SlideshowImage src={images[currentImage]} /> */}
      <OngoingEvents>
        <Events to='/' activeStyle>
          Ongoing Events            
        </Events>
        <Event to='/' activeStyle>
          <span>-Shloka class</span>
          <span className="sanskrit-text">   संस्कृत टेक्स्ट</span>         
        </Event>
        <Event to='/' activeStyle>
          <span>-Pratidinam Samskrutam</span>
          <span className="sanskrit-text">   संस्कृत टेक्स्ट</span>     
        </Event>
        <Event to='/' activeStyle>
          <span> -Vadatu Samskrutam</span>
          <span className="sanskrit-text">   संस्कृत टेक्स्ट</span>    
        </Event>
        <Event to='/' activeStyle>
          <span>-Advanced Grammar</span>
          <span className="sanskrit-text">   संस्कृत टेक्स्ट</span> 
        </Event>
        <Event to='/' activeStyle>
          <span>-Raghuvamsham</span>
          <span className="sanskrit-text">   संस्कृत टेक्स्ट</span>      
        </Event>
      </OngoingEvents>
    <CenteredContent>
      <TitleBox>
        <Title>Distance Learning</Title>
        <LinkContainer>
          <Text>
            Samskrita Bharati's Distance Learning Program (DLP) is a unique opportunity to learn Samskritam at your own pace, at your own place...
          <Link1 href="#">Read more</Link1>.</Text>
        </LinkContainer>
      </TitleBox>
      <TitleBox>
        <Title>Sambhashana Sandesha</Title>
        <LinkContainer>
          <Text>
            Sambhashana Sandesha, a monthly magazine published by Samskrita Bharati is published from Aksharam, Bangalore.
            It comes to you with current affairs, articles, Samskritam news and events from across the world, stories for children and grown-ups, cartoons, crossword, vocabulary builders, and more.  
          <Link1 href="#">Read more</Link1>.</Text>
        </LinkContainer>
      </TitleBox>
    </CenteredContent>
    <RightContent>
       <WhyBox>
        <Why>Why Samskrita Bharati?</Why>
       </WhyBox>
    </RightContent>
    <ScrollingMessageComponent />
    <RollingText>
      <span>Next batch of Samskrita Bharati starts in August. Register Now!, oiugd eib oic qwei coqewciqw co sldb </span>
    </RollingText>


    </SlideshowContainer>

    
  );
}

export default Slideshow;
