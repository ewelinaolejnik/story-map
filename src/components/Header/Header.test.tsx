import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";
import { HeaderState } from "../../types";

describe("<Header/>", () => {
  let header: any;
  let props: HeaderState;

  beforeEach(() => {
    props = { title: "" };
    header = shallow(<Header {...props} />);
  });

  it("contains only Story Map when title is empty", () => {
    expect(header.text()).toEqual("Story Map");
  });

  it("contains Story Map of passed title", () => {
    props = { title: "test" };
    header = shallow(<Header {...props} />);
    expect(header.text()).toEqual("Story Map of test");
  });
});
