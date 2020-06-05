import React from "react";
import { render } from "@testing-library/react";
// import App from "./App";
import ParentComponent from "./component/Parent.component";

test("renders learn react link", () => {
  const { getByText } = render(<ParentComponent />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
