import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import Layout from "./components/Layout/Layout";

describe("<App/>", () => {
  let app: any;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it("contains Layout component", () => {
    expect(app.contains(<Layout />)).toEqual(true);
  });
});
