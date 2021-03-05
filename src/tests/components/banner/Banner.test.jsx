import { shallow } from "enzyme";
import { Banner } from "../../../components/banner/Banner";

describe("Banner component tests", () => {
  const title = "title";
  const subtitle1 = "subtitle1";
  const subtitle2 = "subtitle2";
  const paragraph = "paragraph";
  let wrapper ;
  beforeEach(() => {
    wrapper = shallow(
      <Banner title={title} subtitle1={subtitle1} subtitle2={subtitle2} paragraph={paragraph} />
    );
  });
  test("should show the correct title by props", () => {
    const textTitle = wrapper.find("#title").text();
    expect(textTitle).toBe(title);
  });
  test("should show the correct subtitle1 by props", () => {
    const textSubtitle = wrapper.find("#subtitle1").text();
    expect(textSubtitle).toBe(subtitle1);
  });
  test("should show the correct subtitle2 by props", () => {
    const textSubtitle = wrapper.find("#subtitle2").text();
    expect(textSubtitle).toBe(subtitle2);
  });
  test("should show the correct paragraph by props", () => {
    const textParagraph = wrapper.find("#paragraph").text();
    expect(textParagraph).toBe(paragraph);
  });
  test("should render <BannerApp/> in the correct way", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
