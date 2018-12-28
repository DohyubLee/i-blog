import React, { Component } from "react";
import styled from "styled-components";

class About extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
  }
  content = () => {
    let arr = [];
    for (let index = 0; index < 25; index++) {
      arr.push(<Container>Contents</Container>);
    }
    return arr;
  };
  render() {
    return this.content();
  }
}

const Container = styled.div`
  height: 90px;
`;

export default About;
