import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle, keyframes, css } from "styled-components";

class Header extends Component {
  state = {
    scrollY: 0,
    scrollDiff: 0
  };
  constructor(props) {
    super(props);
    window.addEventListener("scroll", this.hendleScroll);
  }
  hendleScroll = () => {
    this.setState(
      {
        scrollDiff: window.scrollY - this.state.scrollY
      },
      () => {
        this.setState({
          scrollY: window.scrollY
        });
      }
    );
  };
  render() {
    return (
      <Wrap scrollY={this.state.scrollDiff}>
        <HeaderContainer>
          <LeftArea>
            <div>icon</div>
            <div>homename</div>
          </LeftArea>
          <RightArea>
            <Linker to="/home" activeClassName="active">
              <div>Home</div>
            </Linker>
            <Linker to="/about" activeClassName="active">
              <div>About</div>
            </Linker>
            <Linker to="/etc" activeClassName="active">
              <div>etc</div>
            </Linker>
          </RightArea>
        </HeaderContainer>
      </Wrap>
    );
  }
}
const Wrap = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0px;
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  ${props => {
    if (props.scrollY > 0) {
      return css`
        transform: translateY(-62px);
      `;
    } else {
      return css`
        transform: translateY(0px);
      `;
    }
  }}
`;
const HeaderContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const LeftArea = styled.div`
  height: 60px;
  align-items: center;
  display: flex;
`;
const RightArea = styled.div`
  width: 140px;
  justify-content: space-between;
  display: flex;
`;
const Linker = styled(NavLink)`
  all: unset;
  height: 60px;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #3852a0;
    color: #3852a0;
  }
  &.active {
    border-bottom: 2px solid #3852a0;
    color: #3852a0;
  }
  div {
    padding-top: 20px;
  }
`;

export default Header;
