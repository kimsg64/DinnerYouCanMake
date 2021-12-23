// react
import React from "react";
import { useSelector } from "react-redux";

// styles
import styled from "styled-components";
import Header from "./Header";
import SearchForm from "./SearchForm";
import Nav from "./Nav/";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) =>
    props.isDark
      ? props.theme.mode.dark.content.bg
      : props.theme.mode.light.content.bg};
  color: ${(props) =>
    props.isDark
      ? props.theme.mode.dark.content.font
      : props.theme.mode.light.content.font};
`;

const AppLayout = ({ children }) => {
  const { isShowingDetail } = useSelector((state) => state.detail);
  const { isDark } = useSelector((state) => state.mode);
  return (
    <Wrapper isDark={isDark}>
      <Header />
      <Nav />
      {isShowingDetail || <SearchForm />}
      {children}
    </Wrapper>
  );
};

export default AppLayout;
