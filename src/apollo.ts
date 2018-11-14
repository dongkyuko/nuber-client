import ApolloClient, { Operation } from "apollo-boost";

// apollo 부스트를 활용하여서버와 연결 
// X-JWT 설정 (request, Operation으로 req context 설정, 쿼리 실행전에 무조건 검사 후 실행)
const client = new ApolloClient({
    // client 상태 설정
    clientState: {
        // Clinet State 정의
        defaults: {
          auth: {
            __typename: "Auth",
            isLoggedIn: Boolean(localStorage.getItem("jwt"))
          }
        },
        // Resolver 정의
        resolvers: {
          Mutation: {
            logUserIn: (_, { token }, { cache }) => {
              localStorage.setItem("jwt", token);
              cache.writeData({
                data: {
                  auth: {
                    __typename: "Auth",
                    isLoggedIn: true
                  }
                }
              });
              return null;
            },
            logUserOut: (_, __, { cache }) => {
              localStorage.removeItem("jwt");
              cache.writeData({
                data: {
                  __typename: "Auth",
                  isLoggedIn: false
                }
              });
              return null;
            }
          }
        }
      },
    // req 헤더에 있는 X-JWT 가져오기 
    request: async (operation: Operation) => {
        operation.setContext({
            headers: {
                "X-JWT": localStorage.getItem("X-JWT") || ""
            }
        });
    },
    uri: "http://localhost:4000/graphql"
});

export default client;