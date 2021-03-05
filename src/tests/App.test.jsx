const { shallow } = require("enzyme");
const { App } = require("../App");

describe("App component tests", () => {
  test("should render <App/> in the correct way", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
