import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("Header test", () => {
  it("render without crashing", () => {
    const headerComponent = shallow(<Header />);
    expect(headerComponent).toBeDefined();
  });
  it("should render a h1 element", () => {
    const headerComponent = shallow(<Header />);
    expect(headerComponent.find("img")).toEqual(true);
    expect(headerComponent.find(<h1>School dashboard</h1>)).toEqual(true);
  });
});