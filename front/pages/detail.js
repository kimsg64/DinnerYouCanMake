import React, { useEffect } from "react";
import { useRouter } from "next/router";

// styles & components
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { ENTER_DETAIL_PAGE, LEAVE_DETAIL_PAGE } from "../reducers/detail";

const DetailWrapper = styled.main`
  width: ${(props) => (props.isDisplayed ? "calc(100% - 400px)" : "100%")};
  margin-left: ${(props) => (props.isDisplayed ? "400px" : "0px")};
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition-duration: 0.5s;
  @media ${(props) => props.theme.size.tablet} {
    width: 100%;
    margin-left: 0;
  }
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin: 20px 10%;
`;

const SubTitle = styled(Title)`
  font-size: 18px;
`;

const MainImageSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: 40%;
  overflow: hidden;
  & img {
    width: 80%;
    height: 100%;
    object-fit: cover;
  }
`;

const IngredientsSection = styled.section`
  width: 100%;
  margin: 20px 0;
  & > div {
    width: 80%;
    margin: 0 auto;
    padding: 12px;
    background-color: ${(props) =>
      props.isDark
        ? props.theme.mode.dark.content.others
        : props.theme.mode.light.content.others};
    border: 1px solid grey;
    border-radius: 8px;
    & > div {
      margin: 0;
    }
  }
`;

const ReceipeSection = styled.section`
  width: 100%;
`;

const StepWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  & div {
    width: 80%;
  }
  & img {
    width: 100%;
  }
`;

const getNumbers = new Array(20).fill().map((v, i) => {
  return i < 9 ? "0" + (i + 1) : String(i + 1);
});

const Detail = () => {
  const { currentName } = useRouter().query;
  // ★ 페이지 내에서 새로고침을 하면 currentName이 전달되지 않은 채로 parse를 시도해서 JSON 에러가 남
  const cuisine = JSON.parse(currentName);
  const dispatch = useDispatch();
  const { isShowingDetail } = useSelector((state) => state.detail);
  const { isDisplayed } = useSelector((state) => state.nav);
  const { isDark } = useSelector((state) => state.mode);
  console.log(cuisine);
  useEffect(() => {
    dispatch({ type: ENTER_DETAIL_PAGE });
    return () => {
      dispatch({ type: LEAVE_DETAIL_PAGE });
    };
  }, [isShowingDetail]);

  return (
    <AppLayout>
      <DetailWrapper isDisplayed={isDisplayed}>
        <Title>{cuisine.RCP_NM}💁‍♂️</Title>
        <MainImageSection>
          <img src={cuisine.ATT_FILE_NO_MAIN} alt={cuisine.RCP_NM} />
        </MainImageSection>
        <IngredientsSection isDark={isDark}>
          {cuisine.RCP_PARTS_DTLS.slice(0, 2) === "재료" ? (
            <div>
              <SubTitle>재료</SubTitle>
              <br />
              {cuisine.RCP_PARTS_DTLS.slice(2)}
            </div>
          ) : (
            <div>
              <SubTitle>재료</SubTitle>
              <br />
              {cuisine.RCP_PARTS_DTLS}
            </div>
          )}
        </IngredientsSection>
        <ReceipeSection>
          <SubTitle>조리방법</SubTitle>
          {getNumbers.map((v) => {
            const imageNumber = "MANUAL_IMG" + v;
            const manualNumber = "MANUAL" + v;
            if (cuisine[imageNumber] === "" && cuisine[manualNumber] === "")
              return;
            return (
              <StepWrapper key={manualNumber}>
                <div>
                  <img src={cuisine[imageNumber]} />
                </div>
                <div>{cuisine[manualNumber]}</div>
              </StepWrapper>
            );
          })}
        </ReceipeSection>
      </DetailWrapper>
    </AppLayout>
  );
};

export default Detail;
