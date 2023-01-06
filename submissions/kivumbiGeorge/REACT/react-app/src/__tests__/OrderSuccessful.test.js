import React from "react";
import { shallow} from "enzyme";
import OrderSuccessful from "../components/OrderSuccessful"

const thisComponent = shallow(<OrderSuccessful />);

it("renders without crashing", () => {
    thisComponent 
});


it('test case: assert image amount is 1', async () => {
    const images = thisComponent.find("img");
    expect(images.length).toBe(1)
});

it("test case: check order success title", async () => {
    const title = thisComponent.find("p").at(0);
    expect(title.text()).toBe("Order successful");
})

it("test case: check order success description", async () => {
    const title = thisComponent.find("p").at(1);
    expect(title.text()).toBe( "We have started processing your order.");
})
