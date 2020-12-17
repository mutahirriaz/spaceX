import React from 'react'
import {shallow} from 'enzyme'
import Home from './Home'

describe("It should render a Home",()=>{
    const container = shallow(<Home/>)

    it("should render a div",()=>{
        expect(container.find("div").length).toEqual(9)
    })

    it("should render a button",()=>{
        expect(container.find("button").length).toEqual(3)
    })

    it("should render a heading",()=>{
        expect(container.find("h1").length).toEqual(3)
    })
})