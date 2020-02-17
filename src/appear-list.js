import {Appear, Notes} from 'mdx-deck';
import React from 'react';

export function AppearList({children, marginTop}) {
  return (
    <>
      <ul style={{marginTop}}>
        <Appear>{children}</Appear>
      </ul>
      <Notes>
        <ul>{children}</ul>
      </Notes>
    </>
  );
}
