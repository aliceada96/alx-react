import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("Header test", () => {
  it("render without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toBeDefined();
  });
  it("should render a h1 element", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("img")).toEqual(true);
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
  });
});