import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader-container">
        <div className="loader-content">
          <div className="loader-wrapper">
            <div className="loader">
              <span><span /><span /><span /><span /></span>
              <div className="base">
                <span />
                <div className="face" />
              </div>
            </div>
            <div className="longfazers">
              <span /><span /><span /><span />
            </div>
          </div>
          
          <div className="loading-text">
            <h3>Delivering Your Message</h3>
            <p>Constructing a connection with Er. Dineshkumar...</p>
            <div className="dots">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(circle, #162a4f 0%, #0b1528 100%);
    backdrop-filter: blur(12px);
    z-index: 100000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px;
  }
  
  .loader-wrapper {
    position: relative;
    width: 100px; /* Base width for centering */
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px; /* Gap between animation and text */
  }

  .loader {
    position: absolute;
    left: -50px; /* Offset to center the 100px base */
    animation: speeder 0.4s linear infinite;
  }
  .loader > span {
    height: 5px;
    width: 35px;
    background: #cf9432;
    position: absolute;
    top: -19px;
    left: 60px;
    border-radius: 2px 10px 1px 0;
  }
  .base span {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-right: 100px solid #cf9432;
    border-bottom: 6px solid transparent;
  }
  .base span:before {
    content: "";
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background: #cf9432;
    position: absolute;
    right: -110px;
    top: -16px;
  }
  .base span:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 0 solid transparent;
    border-right: 55px solid #cf9432;
    border-bottom: 16px solid transparent;
    top: -16px;
    right: -98px;
  }
  .face {
    position: absolute;
    height: 12px;
    width: 20px;
    background: #cf9432;
    border-radius: 20px 20px 0 0;
    transform: rotate(-40deg);
    right: -125px;
    top: -15px;
  }
  .face:after {
    content: "";
    height: 12px;
    width: 12px;
    background: #cf9432;
    right: 4px;
    top: 7px;
    position: absolute;
    transform: rotate(40deg);
    transform-origin: 50% 50%;
    border-radius: 0 0 0 2px;
  }

  /* Loading Text Area */
  .loading-text {
    text-align: center;
    color: white;
    z-index: 10;
    margin-top: 40px;
  }

  .loading-text h3 {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 10px;
    color: #cf9432;
    text-shadow: 0 0 20px rgba(207, 148, 50, 0.4);
    text-transform: uppercase;
  }

  .loading-text p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
  }

  .dots span {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #cf9432;
    margin: 15px 4px;
    animation: dots 1.4s infinite ease-in-out both;
  }

  .dots span:nth-child(1) { animation-delay: -0.32s; }
  .dots span:nth-child(2) { animation-delay: -0.16s; }

  @keyframes dots {
    0%, 80%, 100% { transform: scale(0); opacity: 0; }
    40% { transform: scale(1); opacity: 1; }
  }

  .loader > span > span:nth-child(1),
  .loader > span > span:nth-child(2),
  .loader > span > span:nth-child(3),
  .loader > span > span:nth-child(4) {
    width: 30px;
    height: 1px;
    background: #cf9432;
    position: absolute;
    animation: fazer1 0.2s linear infinite;
  }
  .loader > span > span:nth-child(2) {
    top: 3px;
    animation: fazer2 0.4s linear infinite;
  }
  .loader > span > span:nth-child(3) {
    top: 1px;
    animation: fazer3 0.4s linear infinite;
    animation-delay: -1s;
  }
  .loader > span > span:nth-child(4) {
    top: 4px;
    animation: fazer4 1s linear infinite;
    animation-delay: -1s;
  }
  @keyframes fazer1 {
    0% {
      left: 0;
    }
    100% {
      left: -80px;
      opacity: 0;
    }
  }
  @keyframes fazer2 {
    0% {
      left: 0;
    }
    100% {
      left: -100px;
      opacity: 0;
    }
  }
  @keyframes fazer3 {
    0% {
      left: 0;
    }
    100% {
      left: -50px;
      opacity: 0;
    }
  }
  @keyframes fazer4 {
    0% {
      left: 0;
    }
    100% {
      left: -150px;
      opacity: 0;
    }
  }
  @keyframes speeder {
    0% {
      transform: translate(2px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -3px) rotate(-1deg);
    }
    20% {
      transform: translate(-2px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 3px) rotate(-1deg);
    }
    60% {
      transform: translate(-1px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-2px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(2px, 1px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
  .longfazers {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .longfazers span {
    position: absolute;
    height: 2px;
    width: 20%;
    background: #cf9432;
    opacity: 0.3;
  }
  .longfazers span:nth-child(1) {
    top: 20%;
    animation: lf 0.6s linear infinite;
    animation-delay: -5s;
  }
  .longfazers span:nth-child(2) {
    top: 40%;
    animation: lf2 0.8s linear infinite;
    animation-delay: -1s;
  }
  .longfazers span:nth-child(3) {
    top: 60%;
    animation: lf3 0.6s linear infinite;
  }
  .longfazers span:nth-child(4) {
    top: 80%;
    animation: lf4 0.5s linear infinite;
    animation-delay: -3s;
  }
  @keyframes lf {
    0% {
      left: 200%;
    }
    100% {
      left: -200%;
      opacity: 0;
    }
  }
  @keyframes lf2 {
    0% {
      left: 200%;
    }
    100% {
      left: -200%;
      opacity: 0;
    }
  }
  @keyframes lf3 {
    0% {
      left: 200%;
    }
    100% {
      left: -100%;
      opacity: 0;
    }
  }
  @keyframes lf4 {
    0% {
      left: 200%;
    }
    100% {
      left: -100%;
      opacity: 0;
    }
  }`;

export default Loader;
