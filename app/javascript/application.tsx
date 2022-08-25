import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

const link = createHttpLink({
  uri: "/graphql",
  credentials: "include",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

document.addEventListener("DOMContentLoaded", () => {
  root.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  );
});
