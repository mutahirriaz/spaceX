 
import React from "react";
import {shallow} from "enzyme";
import Loading from "./Loader";

describe("It should render the Loading component" , () => {
    const container   = shallow(<Loading/>)

    it("should render the div" , () => {
        expect(container.find("div").length).toEqual(1)
    })
})