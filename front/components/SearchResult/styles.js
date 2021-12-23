import styled from "styled-components";

export const ResultWrapper = styled.main`
  width: ${(props) => (props.isDisplayed ? "calc(100% - 400px)" : "100%")};
  margin-left: ${(props) => (props.isDisplayed ? "400px" : "0px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition-duration: 0.3s;
  @media ${(props) => props.theme.size.tablet} {
    width: 100%;
    margin-left: 0;
  }
  & a {
    width: 92%;
    height: 20%;
    padding: 8px 12px;
    margin: 12px 0;
    border: 1px solid grey;
  }
`;

export const ResultItem = styled.article`
  display: flex;
`;

export const ThumbnailSection = styled.section`
  width: 100px;
  height: 100px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoSection = styled.section`
  width: calc(100% - 120px);
  height: 100px;
  margin-left: 20px;
`;

export const TitleWrapper = styled.div`
  font-size: 18px;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const IngredientsWrapper = styled.div`
  font-size: 14px;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const HashTagWrapper = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #0064e5;
`;
