import { Meta, StoryObj } from "@storybook/react";
import { NavbarMobile} from "../../components/Mobile/Navbar/NavbarMobile";
import {customViewports} from "../viewports";
import {widths100} from "../viewports";
import { NavbarDesktop } from "../../components/Desktop/Navbar/NavbarDesktop";
 
export default {
    title: "components/Navbar",
    component: NavbarMobile ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100}
    }
} as Meta<typeof NavbarMobile >;

type Story = StoryObj<typeof NavbarMobile >;

export const MobilePortrait: Story = {
    render: () =>{
        return(<>
            <NavbarMobile mode={"portrait"}/>
        </>);
    } 
};

export const MobileLandscape: Story = {
    render: () =>{
        return(<>
            <NavbarMobile mode={"landscape"}/>
        </>);
    } 
};

export const Desktop: Story = {
    render: () =>{
        return(<>
            <NavbarDesktop/>
        </>);
    } 
};


