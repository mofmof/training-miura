import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";
import { createUploadLink } from "apollo-upload-client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Cookie from "js-cookie";
import axios from "../../lib/axios";
import App from "./App";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

// CSRFトークンをフロント側にセット
axios.get("/");

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "X-CSRF-Token": Cookie.get("CSRF-TOKEN"),
    },
  };
});

const httpLink = createUploadLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          tasks: relayStylePagination(),
        },
      },
    },
  }),
  link: authLink.concat(httpLink),
});

document.addEventListener("DOMContentLoaded", () => {
  root.render(
    <StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </StrictMode>
  );
});
