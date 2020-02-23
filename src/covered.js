import * as React from "react";
import Emoji from "./emoji";

export default function CoveredTopics() {
  return (
    <ul style={{ fontSize: "1em" }}>
      <li>
        <Emoji name="typescript.jpg" size="40px" /> Structural Typing
      </li>
      <li>
        <Emoji name="typescript.jpg" size="40px" /> Never & Unknown
      </li>
      <li>
        <Emoji name="typescript.jpg" size="40px" /> Unions & Intersections
      </li>
      <li>
        <Emoji name="typescript.jpg" size="40px" /> Generics
      </li>
      <li>
        <Emoji name="typescript.jpg" size="40px" /> Type Indexing
      </li>
      <li>
        <Emoji name="typescript.jpg" size="40px" /> Mapped Types
      </li>
      <li>
        <Emoji name="typescript.jpg" size="40px" /> Conditional Types & Infer
      </li>
    </ul>
  );
}
