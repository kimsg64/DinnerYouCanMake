// react & redux
import React from "react";
import wrapper from "../store/configureStore";

// styles
import "../styles/global.css"; // 전역 스타일링(with pageProps)
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import theme from "../styles/theme";

const RecommnendDinner = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <title>저녁 뭐 먹지</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(RecommnendDinner);
