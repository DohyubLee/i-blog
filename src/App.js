import React, { Component } from "react";
import styled, { createGlobalStyle, keyframes, css } from "styled-components";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import About from "./components/About/About";
import Etc from "./components/Etc/Etc";
import { Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Wrap>
        <Header />
        <Route exact path="/" render={() => <Redirect to="home" />} />
        <Route path="/home" component={Posts} />
        <Route path="/about" component={About} />
        <Route path="/etc" component={Etc} />
      </Wrap>
    );
  }
}
const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 100px;
`;

export default App;
