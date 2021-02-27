import React from "react";
import * as renderer from "react-test-renderer";

import Sample from "../src/components/Sample";

it("SubjectToBeTested renders correctly", () => {
  const props = { title: "test", number: 42 };
  const tree = renderer
    .create(<Sample {...props} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});