// react import
import React, { useCallback, useRef } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { REQUEST_BACK, RESET_KEYWORD } from "../reducers/search";
import { CLOSE_NAV, TOGGLE_NAV } from "../reducers/nav";

// style import
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Icon from "./Icon";

const Observer = styled.div`
  position: relative;
`;

const Criteria = styled.div`
  widht: 100%;
  height: 1px;
  position: absolute;
  top: 1px;
`;

const AppHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-duration: 0.5s;
  color: ${(props) =>
    props.isDark
      ? props.theme.mode.dark.header.font
      : props.theme.mode.light.header.font};
  font-size: 24px;
  font-weight: 800;
  position: fixed;
  z-index: 3;
`;

const EmptyIcon = styled.div`
  width: 60px;
  height: 60px;
`;

const Header = () => {
  // redux
  const dispatch = useDispatch();
  const { isDisplayed } = useSelector((state) => state.nav);
  const { isShowingDetail } = useSelector((state) => state.detail);
  const { isDark } = useSelector((state) => state.mode);
  const onClickNav = useCallback(() => {
    dispatch({ type: TOGGLE_NAV, data: isDisplayed });
  }, [isDisplayed]);

  const onClickHome = useCallback(() => {
    dispatch({ type: RESET_KEYWORD });
    dispatch({ type: CLOSE_NAV });
  }, []);

  const onClickBack = useCallback(() => {
    dispatch({ type: REQUEST_BACK });
  }, []);

  // Intersection Observer
  const headerRef = useRef(null);
  const { color, darkColor } = useIntersectionObserver(headerRef);

  return (
    <Observer>
      <Criteria ref={headerRef} />
      <AppHeader color={isDark ? darkColor : color} isDark={isDark}>
        <Icon>
          <FontAwesomeIcon icon={faBars} onClick={onClickNav} />
        </Icon>
        <Link href="/">
          <a onClick={onClickHome}>
            <div>저녁 뭐 먹지</div>
          </a>
        </Link>
        {isShowingDetail ? (
          <Link href="/">
            <a onClick={onClickBack}>
              <Icon>
                <FontAwesomeIcon icon={faArrowLeft} />
              </Icon>
            </a>
          </Link>
        ) : (
          <EmptyIcon />
        )}
      </AppHeader>
    </Observer>
  );
};

export default Header;
