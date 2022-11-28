import React from "react";
import { shallow} from "enzyme";
import CartPage from "../components/Cart"

const thisComponent = shallow(<CartPage />);

it("renders without crashing", () => {
    thisComponent 
});

it("test case: check header title", async () => {
    const text = thisComponent.find('h2');
    expect(text.text()).toBe('Cart');
}); 

it("test case: check intial counter value", () => {
    const counter = thisComponent.find('span').first();
    expect(Number(counter.text())).toBeGreaterThanOrEqual(0);
});

it("test case: expected images", () => {
    const counter = thisComponent.find('img');
    expect(counter.length).toBeGreaterThan(1);
});

it("test case: check submit button", async () => {
    const text = thisComponent.find('button').last().text();
    expect(text).toBe('Checkout');
}); 
