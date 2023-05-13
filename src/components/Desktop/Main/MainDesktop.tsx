import React from 'react';
import { NavbarDesktop } from '../Navbar/NavbarDesktop';
import { BackgroundWavesDesktop } from '../BackgroundWaves/BackgroundWavesDesktop';
import { Container } from '../../Common/Container/Container';

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";


export const MainDesktop = () => {
    return (<>
        <NavbarDesktop/>
        <BackgroundWavesDesktop/>
        <Container id={"home"} colorBackground={"aqua"}>
            <h1>Home</h1>
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
    </>);
}

