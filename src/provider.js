import React, {Fragment} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {useDeck} from 'gatsby-theme-mdx-deck';
import Footer from './footer';
const AtlasGrotesk = require('../assets/fonts/AtlasGrotesk-Black-Web.ttf')
const SharpGrotesk = require('../assets/fonts/SharpGroteskDBBook20.ttf')
console.log({SharpGrotesk})

const footerHeight = '80px';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "AtlasGrotesk";
    src: url('${AtlasGrotesk}') format("truetype");
  }

  @font-face {
    font-family: "SharpGrotesk";
    src: url('${SharpGrotesk}') format("truetype");
  }

  body {
    font-family: "SharpGrotesk";
  }

  a {
		color: white;
		text-decoration: none;
	}

	ul {
		list-style: none;
		text-align: left;
		font-size: 1.5em;
	}

	li {
		padding-top: 10px;
	}
	h1 {
    font-family: SharpGrotesk!important;
    text-transform: uppercase;
    text-align: center;
  }

  h2 {
    font-family: SharpGrotesk!important;
    text-transform: uppercase;
    text-align: center;
  }
`;

const Wrapper = styled.main`
  width: 100vw;
  height: calc(100vh - ${footerHeight});
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

const Bar = styled.div`
  background: white;
  height: 2px;
  width: ${props => 100 * props.size}%;
  position: fixed;
  bottom: ${footerHeight};
`;

export default function MatthewProvider({children}) {
  const {mode, length, index} = useDeck();
  if (mode.toLowerCase() !== 'normal') {
    return <Fragment><GlobalStyle />{children}</Fragment>;
  }

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>{children}</Wrapper>
      <Bar size={(index + 1) / length} />
      <Footer height={footerHeight} />
    </Fragment>
  );
}
