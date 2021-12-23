import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background-color: ${(props) =>
    props.isDark ? props.theme.mode.dark.content.bg : "#eee"};

  &:before {
    content: "";
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
`;

const Frame = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 5px solid #fff;
  padding: 10px;
`;

const Cover = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  z-index: 2;
`;

const spinny = keyframes`
    0% {
      transform: rotate(0deg);
      background: #29d;
    }
    50% {
      transform: rotate(180deg);
      background: #00427c;
    }
    100% {
      transform: rotate(360deg);
      background: #29d;
    }
`;

const Bar = styled.div`
  background: #29d;
  width: 50%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 100% 0 0 0;
  -webkit-animation: ${spinny} 2s linear infinite;
  transform-origin: 100% 100%;
`;

const Loading = () => {
  const { isDark } = useSelector((state) => state.mode);
  return (
    <Container isDark={isDark}>
      <Frame>
        <Cover />
        <Bar />
      </Frame>
    </Container>
  );
};

export default Loading;
