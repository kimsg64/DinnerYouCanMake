// react & redux
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components & style
import styled from "styled-components";
import { searchAction } from "../reducers/search";

const Form = styled.form`
  height: 60px;
  width: ${(props) => (props.isDisplayed ? "calc(100% - 400px)" : "100%")};
  margin-left: ${(props) => (props.isDisplayed ? "400px" : "0px")};
  margin-bottom: 8%;
  padding-top: ${(props) => (props.isSearching ? "8%" : "12%")};
  transition-duration: 0.3s;
  display: flex;
  justify-content: center;

  @media ${(props) => props.theme.size.tablet} {
    width: 100%;
    margin-left: 0;
    padding-top: ${(props) => (props.isSearching ? "32%" : "40%")};
    margin-bottom: 20%;
  }
`;

const SearchInput = styled.input`
  width: 72%;
  height: 32px;
  padding: 12px 24px;
  border: 1px solid #4b4b4b;
  border-radius: 24px;
  outline: none;
`;

const SearchForm = () => {
  const dispatch = useDispatch();
  const { isSearching } = useSelector((state) => state.search);
  const { isDisplayed } = useSelector((state) => state.nav);
  const [value, setValue] = useState("");

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(searchAction(value));
      setValue("");
    },
    [value]
  );

  const onChangeInput = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [value]
  );

  return (
    <Form
      onSubmit={onSubmitForm}
      isSearching={isSearching}
      isDisplayed={isDisplayed}
    >
      <SearchInput
        type="text"
        placeholder="재료, 요리 이름으로 검색하세요"
        value={value}
        onChange={onChangeInput}
      />
    </Form>
  );
};

export default SearchForm;
