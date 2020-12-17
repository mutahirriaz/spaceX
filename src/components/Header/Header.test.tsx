import React from "react";
import {shallow} from "enzyme";
import Header from "./Header"

describe("Should render a Header" , () => {
    const container = shallow(<Header/>)

    it("Should render a div " , () => {
        expect(container.find("div").length).toEqual(1)
    });

    it("should render a heading" , () => {
        expect(container.find("h1").length).toEqual(1)
    })


})