import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import {
  HashTagWrapper,
  ThumbnailSection,
  InfoSection,
  IngredientsWrapper,
  ResultItem,
  ResultWrapper,
  TitleWrapper,
} from "./styles";

const SearchResult = ({ data = null }) => {
  const { keyword } = useSelector((state) => state.search);
  const { isDisplayed } = useSelector((state) => state.nav);
  console.log(data);

  return (
    <ResultWrapper isDisplayed={isDisplayed}>
      "{keyword}" 검색 결과
      <br />
      {data ? (
        data.map((cuisine) => {
          return (
            <Link
              href={{
                pathname: `/detail/`,
                query: { currentName: JSON.stringify(cuisine) },
              }}
              as={`/detail/`}
              key={cuisine.RCP_SEQ + cuisine.RCP_NM}
            >
              <a>
                <ResultItem>
                  <ThumbnailSection>
                    <img
                      src={`${cuisine.ATT_FILE_NO_MAIN}`}
                      alt={cuisine.RCP_NM}
                    />
                  </ThumbnailSection>
                  <InfoSection>
                    <TitleWrapper>{cuisine.RCP_NM}</TitleWrapper>
                    <IngredientsWrapper>
                      {cuisine.RCP_PARTS_DTLS}
                    </IngredientsWrapper>
                    <br />
                    <HashTagWrapper>
                      {cuisine.HASH_TAG && `#${cuisine.HASH_TAG}`}
                    </HashTagWrapper>
                  </InfoSection>
                </ResultItem>
              </a>
            </Link>
          );
        })
      ) : (
        <div>"{keyword}" 레시피가 없습니다.</div>
      )}
    </ResultWrapper>
  );
};

export default SearchResult;
