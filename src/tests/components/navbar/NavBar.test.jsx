import { shallow } from "enzyme";
import { NavBar } from "../../../components/navbar/NavBar";
describe("NavBar component tests", () => {
  test("should render <NavBar/> in the correct way", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
