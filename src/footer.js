import React from "react";
import styled from "styled-components";
import Emoji, { EmojiWrapper } from "./emoji";
import { darkGreen } from "./colors";

const Footer = styled.footer`
  text-transform: Uppercase;
  font-size: 1.5em;
  color: white;
  padding: 30px 100px;
  text-align: right;
  width: 100%;
  height: ${({ height }) => height};
  background: ${darkGreen};
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
`;

const AlignedDiv = styled.div`
  display: flex;
  align-items: center;
`;

const SlideEmojiWrapper = styled.div`
  margin-right: 10px;
`;

export default ({ children, height }) => (
  <Footer height={height}>
    <AlignedDiv>
      <SlideEmojiWrapper>📒</SlideEmojiWrapper>
      <a href="https://generics.matthewgerstman.com">
        generics.matthewgerstman.com
      </a>
    </AlignedDiv>

    <AlignedDiv>
      <Emoji name="twitter.png" size="30px" marginRight="10px" />
      <a href="https://twitter.com/matthewgerstman">@MatthewGerstman</a>
    </AlignedDiv>
  </Footer>
);
