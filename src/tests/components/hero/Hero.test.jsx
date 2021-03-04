import { shallow } from "enzyme";
import { Hero } from "../../../components/hero/Hero";

describe("Hero component test", () => {
  test("should render <Hero/> in the correct way", () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper).toMatchSnapshot();
  });
});
