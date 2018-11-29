import React from "react";
import App from "./components/containers/AppContainer";
import { TypographyStyle, GoogleFont } from "react-typography";
import typography from "./services/typography";
import { Provider } from "react-redux";

const Root = props => {
  const { store } = props;

  return (
    <>
      <TypographyStyle typography={typography} />
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
};

export default Root;
