/*
const RollingText = styled.div`
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  top: calc(70vh + 10em);
  left: 50%;
  transform: translateX(-50%);
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  span {
    display: inline-block;
    animation: marquee 10s linear infinite;
    font-size: 2rem;
    font-family: "Times New Roman", serif;
    color: #333;
  }

  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
`;

const RollingText = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // change this value to the scroll position at which you want the message to appear
        setShowMessage(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div style={{ height: '1000px' }}>
      </div>
      {showMessage && (
        <ScrollMessage className="scrollmessage">
          Register for the next batch!
        </ScrollMessage>
      )}
    </>
  );
};

const ScrollMessage = styled.div`
  position: fixed;
  top: 80%;
  right: -100%;
  transform: translate(0, -50%);
  animation: scroll-in 1s forwards;
`;

<RollingText>
<span>Register for next batch</span>
</RollingText>
*/