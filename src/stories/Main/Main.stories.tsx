import { Meta, StoryObj } from "@storybook/react";
import { MainDesktop } from '../../components/Desktop/Main/MainDesktop';
import { MainMobile } from "../../components/Mobile/Main/MainMobile";
import { widths100 } from "../viewports";
import { heights1000} from "../viewports";

export default {
    title: "Components/Main",
    component: MainDesktop ,
    argTypes: {},
    parameters: {
        viewport: {viewports: heights1000}
    }
} as Meta<typeof MainDesktop >;

type Story = StoryObj<typeof MainDesktop >;

export const Desktop: Story = {
    render: () =>{
        return(<>
            <MainDesktop/>
        </>);
    } 
};

export const MobilePortrait: Story = {
    render: () =>{
        return(<>
            <MainMobile mode="portrait"/>
        </>);
    } 
};
