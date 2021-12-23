import styled from "styled-components";

export const Navigator = styled.nav`
  width: ${(props) => (props.isDisplayed ? "360px" : "0px")};
  max-height: calc(100vh - 60px);
  overflow: auto;
  transition-duration: 0.3s;
  border-right: 1px solid
    ${(props) =>
      props.isDark
        ? props.theme.mode.dark.nav.border
        : props.theme.mode.light.nav.border};
  position: fixed;
  top: 60px;
  left: 0;
  display: inline-block;
  z-index: 2;

  @media ${(props) => props.theme.size.tablet} {
    width: ${(props) => (props.isDisplayed ? "100%" : "0px")};
  }
`;

export const NavItem = styled.div`
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  display: flex;
  cursor: pointer;
  transition-duration: 0.1s;
  background-color: ${(props) =>
    props.isDark
      ? props.theme.mode.dark.nav.bg
      : props.theme.mode.light.nav.bg};
  font-size: 18px;
  color: ${(props) =>
    props.isDark
      ? props.theme.mode.dark.nav.font
      : props.theme.mode.light.nav.font};
  font-weight: bold;
  &:hover {
    background-color: ${(props) =>
      props.isDark
        ? props.theme.mode.dark.nav.bgOnHover
        : props.theme.mode.light.nav.bgOnHover};
    color: ${(props) =>
      props.isDark
        ? props.theme.mode.dark.nav.fontOnHover
        : props.theme.mode.light.nav.fontOnHover};
  }
  &:active {
    background-color: ${(props) =>
      props.isDark
        ? props.theme.mode.dark.nav.bgOnActive
        : props.theme.mode.light.nav.bgOnActive};
    color: ${(props) =>
      props.isDark
        ? props.theme.mode.dark.nav.fontOnActive
        : props.theme.mode.light.nav.fontOnActive};
  }
`;

export const Seperator = styled.div`
  width: 100%;
  height: 40px;
  padding: 8px 20px;
  font-weight: bold;
  background-color: ${(props) =>
    props.isDark
      ? props.theme.mode.dark.nav.others
      : props.theme.mode.light.nav.others};
  color: ${(props) =>
    props.isDark
      ? props.theme.mode.dark.nav.fontOnActive
      : props.theme.mode.light.nav.fontOnActive};
`;

export const Space = styled.div`
  width: 100%;
  height: calc(100vh - 680px);
  background-color: ${(props) =>
    props.isDark
      ? props.theme.mode.dark.nav.others
      : props.theme.mode.light.nav.others};
`;
