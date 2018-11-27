import React from 'react';
import { ApolloProvider } from "react-apollo"; 
import ReactDOM from 'react-dom';
import client from "./apollo";
import App from "./Components/App";
import GlobalStyle from "./global-styles";

ReactDOM.render(
  // https://github.com/apollographql/apollo-client/tree/master/packages/apollo-boost 참고
  // Apollo는 GraphQL 과 커뮤니케이션을 하는 클라이언트
  // ApolloProvider 로  서버와 연결
  <ApolloProvider client = {client}>
    <App />
    <GlobalStyle />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
