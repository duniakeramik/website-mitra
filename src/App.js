import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Router } from "./routes";
import algoliasearch from "algoliasearch/lite";
import { Provider } from "react-redux";
import store from "./redux/store";
import { InstantSearch } from "react-instantsearch-hooks";

const searchClient = algoliasearch(
  "YFXQX4S9XW",
  "db067ba34949f85333ece7db7d10ae17"
);

const theme = createTheme({
  palette: {
    primary: {
      // main: "#992d0d",
      main: `${process.env.REACT_APP_PRIMARY_COLOR}` || "#992d0d",
    },
    secondary: {
      // main: "#c36505",
      main: `${process.env.REACT_APP_SECONDARY_COLOR}` || "#c36505",
    },
    background: {
      // main: "#eaebe8",
      main: `${process.env.REACT_APP_THIRD_COLOR}` || "#eaebe8",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <InstantSearch
        suppressExperimentalWarning={true}
        searchClient={searchClient}
        indexName="all-products"
      >
        <Provider store={store}>
          <Router />
        </Provider>
      </InstantSearch>
    </ThemeProvider>
  );
}
