import { shallow } from "enzyme";
import { Cards } from "../../../components/cards/Cards";

describe("Cards component tests", () => {
  test("should render <Cards/> component in the correct way", () => {
    const wrapper = shallow(<Cards />);
    expect(wrapper).toMatchSnapshot();
  });
});
