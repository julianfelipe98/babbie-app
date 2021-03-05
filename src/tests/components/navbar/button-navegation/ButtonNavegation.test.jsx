import { shallow } from "enzyme";
import { ButtonNavegation } from "../../../../components/navbar/button-navegation/ButtonNavegation";
describe("ButtonNavegation component tests", () => {
  test("should render <ButtonNavegation/> in the correct way", () => {
    const wrapper = shallow(<ButtonNavegation />);
    expect(wrapper).toMatchSnapshot();
  });
});
