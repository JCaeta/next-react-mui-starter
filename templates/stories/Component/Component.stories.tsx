import { Meta, StoryObj } from "@storybook/react";
import {customViewports} from "../viewports";
import {widths100} from "../viewports";
import { Component } from "../../components/Common/Component/Component";
 
export default {
    title: "components/Component",
    component: Component ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100}
    }
} as Meta<typeof Component >;

type Story = StoryObj<typeof Component >;


export const MobileLandscape: Story = {
    render: () =>{
        return(<>
            <Component/>
        </>);
    } 
};