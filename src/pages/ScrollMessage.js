import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const ScrollMessage = styled.div`
  position: fixed;
  top: 50%;
  right: -100%;
  transform: translate(0, -50%);
  animation: scroll-in 1s forwards;
`;

const Scroll = () => {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 500) { // change this value to the scroll position at which you want the message to appear
          setShowMessage(true);
          window.removeEventListener('scroll', handleScroll);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
    }, []);
  
    return (
        <>
          <div style={{ height: '1000px' }}>
            {/* add content to fill up the page */}
          </div>
          {showMessage && (
            <ScrollMessage className="scrollmessage">
              {/* add message content here */}
            </ScrollMessage>
          )}
        </>
      );
    };

export default ScrollMessage;