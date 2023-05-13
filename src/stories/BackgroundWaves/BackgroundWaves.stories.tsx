import { Meta, StoryObj } from "@storybook/react";
import { BackgroundWavesDesktop } from '../../components/Desktop/BackgroundWaves/BackgroundWavesDesktop';
import { BackgroundWavesMobile } from "../../components/Mobile/BackgroundWaves/BackgroundWavesMobile";
import styles from './BackgroundWaves.module.css';
import { heights1000 } from "../viewports";

export default {
    title: "Components/BackgroundWaves",
    component: BackgroundWavesDesktop ,
    argTypes: {},
    parameters: {
        viewport: {viewports: heights1000}
    }
} as Meta<typeof BackgroundWavesDesktop >;

type Story = StoryObj<typeof BackgroundWavesDesktop >;


export const MobilePortrait: Story = {
    render: () =>{
        return(<>
            <BackgroundWavesMobile mode={"portrait"}/>
        </>);
    } 
};


