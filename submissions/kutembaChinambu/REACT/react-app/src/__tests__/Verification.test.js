import React from "react";
import { shallow} from "enzyme";
import Verification from "../components/Verification"

const thisComponent = shallow(<Verification />);

it("renders without crashing", () => {
    thisComponent 
});

it("test case: check service-title1", async () => {
    const text = thisComponent.find('h2');
    expect(text.text()).toBe('Verification');
}); 

it("test case: check input elements", async () => {
    const input = thisComponent.find("input");
    expect(input.length).toEqual(6);
});

it("test case: check select element", async () => {
    const select = thisComponent.find("select");
    expect(select.length).toEqual(1)
});

