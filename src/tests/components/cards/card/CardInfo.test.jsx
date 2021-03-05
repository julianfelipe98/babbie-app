import { shallow } from "enzyme";
import { CardInfo } from "../../../../components/cards/card/CardInfo";

describe("CardInfo component tests", () => {
  const title = "title";
  const subtitle1 = "subtitle1";
  const subtitle2 = "subtitle2";
  const paragraph1 = "paragraph";
  const paragraph2 = "paragraph";
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CardInfo id="1" title={title} subtitle1={subtitle1} subtitle2={subtitle2} paragraph1={paragraph1}  paragraph2={paragraph2} />
    );
  });
  test("should show the correct title by props", () => {
    const textTitle = wrapper.find("p").at(0).text();
    expect(textTitle).toBe(title);
  });
  test("should show the correct subtitle1 by props", () => {
    const textSubtitle = wrapper.find("h1").at(0).text();
    expect(textSubtitle).toBe(subtitle1);
  });
  test("should show the correct subtitle2 by props", () => {
    const textSubtitle = wrapper.find("h1").at(1).text();
    expect(textSubtitle).toBe(subtitle2);
  });
  test("should show the correct paragraph1 by props", () => {
    const textParagraph = wrapper.find("h3").at(0).text();
    expect(textParagraph).toBe(paragraph1);
  });
  test("should show the correct paragraph2 by props", () => {
    const textParagraph = wrapper.find("h3").at(1).text();
    expect(textParagraph).toBe(paragraph2);
  });

  test("should render <CardInfo/> in the correct way", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
