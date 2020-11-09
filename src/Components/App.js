import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Movie from "../pages/Movie";
import TV from "../pages/TV";

const Wrapper = styled.div`
  padding: 20px 200px 0;
`;

function App() {
  return (
    <HashRouter>
      <Header />
      <Wrapper>
        <Switch>
          <Route exact path="/movie" component={Movie} />
          <Route exact path="/tv" component={TV} />
          <Redirect from="*" to="/movie" />
        </Switch>
      </Wrapper>
    </HashRouter>
  );
}

export default App;
