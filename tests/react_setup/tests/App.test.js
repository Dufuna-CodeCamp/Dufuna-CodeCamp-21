import { shallow } from "enzyme";
import App from '../App';

const thisComponent = shallow(<App />);

it("renders without crashing", () => {
  thisComponent 
});