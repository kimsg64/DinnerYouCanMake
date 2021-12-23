import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../reducers";

const configureStore = () => {
  // 얘네는 그냥 개발 중일 때 dev tools를 사용하기 위한 설정이다.
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  // 여기가 리덕스 기능을 사용하기 위해 스토어를 만드는 부분임
  const store = createStore(reducers, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
