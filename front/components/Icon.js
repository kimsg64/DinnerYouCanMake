import React from "react";
import styled from "styled-components";

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #e66767;
  }
  &:active {
    background-color: #ff6b6b;
  }
`;

const Icon = ({ children }) => {
  return <IconWrapper>{children}</IconWrapper>;
};

export default Icon;
