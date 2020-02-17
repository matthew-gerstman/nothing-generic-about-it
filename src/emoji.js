import React from "react";
import styled from "styled-components";

const EmojiImg = styled.img`
  display: inline-block;
`;

export const EmojiWrapper = styled.span`   
  font-size: ${({ fontSize }) => fontSize};
  text-align: left;
  margin-right: ${({ marginRight }) => marginRight || "10px"};
  height: 100%;
  width: ${({ size }) => size};
`;

export default function Emoji({
  name,
  fontSize,
  size = "32px",
  marginRight = "10px",
}) {
  const src = require(`../assets/emoji/${name}`);
  console.log({name, src})
  return (
    <EmojiWrapper size={size} fontSize={fontSize} marginRight={marginRight}>
      <EmojiImg
        style={{ width: size }}
        src={src}
      />
    </EmojiWrapper>
  );
}
