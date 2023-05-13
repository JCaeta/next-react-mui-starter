import React from 'react';
import { NavbarMobile } from '../Navbar/NavbarMobile';
import { Container } from '../../Common/Container/Container';
import PropTypes from 'prop-types';
import { BackgroundWavesMobile } from '../BackgroundWaves/BackgroundWavesMobile';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


export const MainMobile = (props: any) => {
    const setPortraitMode = () => {
        return(<>
            <NavbarMobile mode="portrait"/> 
            <BackgroundWavesMobile mode="portrait"/>
            <Container id={"home"} colorBackground={"aqua"}>
                <h1>Home mobile portrait</h1>
            </Container>
            <Container id={"my-work"} colorBackground={"green"}>
                <h1>My work</h1>
            </Container>
            <Container id={"blog"} colorBackground={"red"}>
                <h1>Blog</h1>
            </Container>
            <Container id={"about-me"} colorBackground={"purple"}>
                <h1>About me</h1>
            </Container>
        </>)
    }

    const setLandscapeMode = () =>{
        return(<>
            <NavbarMobile mode="landscape"/> 
            <BackgroundWavesMobile mode="landscape"/>
        </>)
    }

    return (<>
        {props.mode === "portrait"? 
        setPortraitMode(): setLandscapeMode()}
    </>);
}


MainMobile.defaultProps =
{
    mode: "portrait",
    colorBackground: "aqua"
}

MainMobile.propTypes = 
{
    mode: PropTypes.oneOf(["portrait", "landscape"]),
    colorBackground: PropTypes.string
}
