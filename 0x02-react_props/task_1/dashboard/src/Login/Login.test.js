import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";

describe("Login test", () => {
  it("should render without crashing", () => {
    const loginComponent = shallow(<Login />);
    expect(loginComponent).toBeDefined();
  });
  it("should have 2 input tags and 2 label tags", () => {
    const loginComponent = shallow(<Login />);
    expect(loginComponent.find("label")).toHaveLength(2);
    expect(loginComponent.find("input")).toHaveLength(2);
  });
});