import React from "react";
import { shallow } from "enzyme";

import Layout from "./Layout";
import HeaderContainer from "../Header/HeaderContainer";
import InteractableStoryMap from "../InteractableStoryMap/InteractableStoryMap";

describe("<Layout/>", () => {
  let layout: any;

  beforeEach(() => {
    layout = shallow(<Layout />);
  });

  it("contains HeaderContainer as first component and InteractableStoryMap as second one", () => {
    expect(
      layout.contains([
        <HeaderContainer></HeaderContainer>,
        <InteractableStoryMap></InteractableStoryMap>,
      ]),
    ).toEqual(true);
  });
});
