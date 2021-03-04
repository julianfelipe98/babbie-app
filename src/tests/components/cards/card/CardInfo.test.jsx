import { shallow } from "enzyme";
import { CardInfo } from "../../../../components/cards/card/CardInfo";

describe("CardInfo component tests", () => {
  const title = "title";
  const subtitle = "subtitle";
  const paragraph = "paragraph";
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CardInfo id="1" title={title} subtitle={subtitle} paragraph={paragraph} />
    );
  });
  test("should show the correct title by props", () => {
    const textTitle = wrapper.find("p").at(0).text();
    console.log(wrapper.find("p"));
    expect(textTitle).toBe(title);
  });
  test("should show the correct subtitle by props", () => {
    const textSubtitle = wrapper.find("h1").at(0).text();
    expect(textSubtitle).toBe(subtitle);
  });
  test("should show the correct paragraph by props", () => {
    const textParagraph = wrapper.find("h3").at(0).text();
    expect(textParagraph).toBe(paragraph);
  });

  test("should render <CardInfo/> in the correct way", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
