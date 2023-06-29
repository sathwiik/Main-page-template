import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScrollingMessage = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  transform: translateY(${props => props.visible ? '0' : '100%'});
  transition: transform 0.3s ease-out;
`;

const Link = styled.a`
  margin-right: 3em;
  color: #fff;
  text-decoration: none;
`;

const ScrollingMessageComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  }, []);

  return (
    <ScrollingMessage visible={isVisible}>
      <Link href="https://www.facebook.com">Facebook</Link>
      <Link href="https://www.instagram.com">Instagram</Link>
      <Link href="https://www.gmail.com">Gmail</Link>
      <Link href="https://www.linkedin.com">LinkedIn</Link>
    </ScrollingMessage>
  );
};

export default ScrollingMessageComponent;

