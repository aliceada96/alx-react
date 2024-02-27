import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";


describe("Footer test", () => {
  it("should render without crashing", () => {
    const footerComponent = shallow(<Footer />);
    expect(footerComponent).toBeDefined();
  });
  it("should render the text 'Copyright'", () => {
    const footerComponent= shallow(<Footer />);
    expect(footerComponent.find('.App-footer').text()).toEquals(
      `Copyright ${getFullYear()} - ${getFooterCopy(true)}`);
  });
});