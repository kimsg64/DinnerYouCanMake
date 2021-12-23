// react & redux
import React, { useCallback } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RESET_KEYWORD } from "../../reducers/search";
import { CLOSE_NAV } from "../../reducers/nav";

// styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faMoon,
  faQuestion,
  faSun,
  faThumbsUp,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "../Icon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Navigator, NavItem, Seperator, Space } from "./styles";
import { TOGGLE_MODE } from "../../reducers/mode";

const Nav = () => {
  const dispatch = useDispatch();
  const { isDisplayed } = useSelector((state) => state.nav);
  const onClickHome = useCallback(() => {
    dispatch({ type: RESET_KEYWORD });
    dispatch({ type: CLOSE_NAV });
  }, []);
  const { isDark } = useSelector((state) => state.mode);
  const onClickToggleMode = useCallback(() => {
    dispatch({ type: TOGGLE_MODE });
  }, []);
  const onScrollNav = useCallback((e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }, []);

  return (
    <Navigator isDisplayed={isDisplayed} isDark={isDark} onScroll={onScrollNav}>
      <Seperator isDark={isDark}>메뉴</Seperator>
      <Link href="/">
        <a onClick={onClickHome}>
          <NavItem isDark={isDark}>
            <Icon>
              <FontAwesomeIcon icon={faHome} />
            </Icon>
            홈
          </NavItem>
        </a>
      </Link>
      <NavItem isDark={isDark}>
        <Icon>
          <FontAwesomeIcon icon={faThumbsUp} />
        </Icon>
        저녁 메뉴 추천
      </NavItem>
      <NavItem onClick={onClickToggleMode} isDark={isDark}>
        {isDark ? (
          <>
            <Icon>
              <FontAwesomeIcon icon={faSun} />
            </Icon>
            데이 모드로 전환
          </>
        ) : (
          <>
            <Icon>
              <FontAwesomeIcon icon={faMoon} />
            </Icon>
            다크 모드로 전환
          </>
        )}
      </NavItem>
      <NavItem isDark={isDark}>
        <Icon>
          <FontAwesomeIcon icon={faUtensils} />
        </Icon>
        저장 중인 레시피
      </NavItem>
      <NavItem isDark={isDark}>
        <Icon>🤔</Icon>
        나만의 레시피
      </NavItem>
      <NavItem isDark={isDark}>
        <Icon>
          <FontAwesomeIcon icon={faQuestion} />
        </Icon>
        FAQ
      </NavItem>
      <Seperator isDark={isDark}>연락처</Seperator>
      <a href="mailto:wincow64@gmail.com" target="_blank" rel="noreferrer">
        <NavItem isDark={isDark}>
          <Icon>
            <FontAwesomeIcon icon={faEnvelope} />
          </Icon>
          이메일
        </NavItem>
      </a>
      <a href="https://wincow.tistory.com/" target="_blank" rel="noreferrer">
        <NavItem isDark={isDark}>
          <Icon>T</Icon>
          블로그
        </NavItem>
      </a>
      <a href="https://github.com/kimsg64" target="_blank" rel="noreferrer">
        <NavItem isDark={isDark}>
          <Icon>
            <FontAwesomeIcon icon={faGithub} />
          </Icon>
          깃헙
        </NavItem>
      </a>
      <Space isDark={isDark} />
    </Navigator>
  );
};

export default Nav;
