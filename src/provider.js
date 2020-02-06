import React, {Fragment} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {useDeck} from 'gatsby-theme-mdx-deck';
import Footer from './footer';

const footerHeight = '80px';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,800');
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
		text-transform: uppercase;
		font-size: 3em;
  }
	h2 {
		text-transform: uppercase;
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
  console.log({deck: useDeck()});
  if (mode.toLowerCase() !== 'normal') {
    return children;
  }

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>{children}</Wrapper>
      {/* <Bar size={(index + 1) / length} /> */}
      <Footer height={footerHeight} />
    </Fragment>
  );
}
