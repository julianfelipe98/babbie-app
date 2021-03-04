import { shallow } from "enzyme";
import { Banner } from "../../../components/banner/Banner";

describe("Banner component tests", () => {
  const title = "title";
  const subtitle = "subtitle";
  const paragraph = "paragraph";
  let wrapper ;
  beforeEach(() => {
    wrapper = shallow(
      <Banner title={title} subtitle={subtitle} paragraph={paragraph} />
    );
  });
  test("should show the correct title by props", () => {
    const textTitle = wrapper.find("#title").text();
    expect(textTitle).toBe(title);
  });
  test("should show the correct subtitle by props", () => {
    const textSubtitle = wrapper.find("#subtitle").text();
    expect(textSubtitle).toBe(subtitle);
  });
  test("should show the correct paragraph by props", () => {
    const textParagraph = wrapper.find("#paragraph").text();
    expect(textParagraph).toBe(paragraph);
  });
  test("should render <BannerApp/> in the correct way", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
