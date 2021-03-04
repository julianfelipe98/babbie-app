import { shallow } from "enzyme";
import { Footer } from "../../../components/footer/Footer";

describe("Footer component tests", () => {
  test("should render <Footer/> in the correct way", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
