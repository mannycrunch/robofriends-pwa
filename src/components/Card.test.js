import { shallow } from "enzyme";
import Card from "./Card";

it("expect to render Card componet", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
