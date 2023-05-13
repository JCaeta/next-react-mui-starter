import { useRef, RefObject } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import PropTypes from 'prop-types';
import stylesPortrait from "./NavbarMobilePortrait.module.scss";
import stylesLandscape from "./NavbarMobileLandscape.module.scss";

export const NavbarMobile = (props: any) => {
    const navRef: RefObject<HTMLElement> = useRef(null);
    var styles: any = null;

    const setMode = () => {
        if(props.mode === "portrait"){
            styles = stylesPortrait;
        } else{
            styles = stylesLandscape;
        }
    }

    const showNavbar = () => {
        if (navRef.current !== null && navRef.current !== undefined) {
            navRef.current.classList.toggle(styles.responsiveNav);
        }
    };

    setMode();

    return (<>
        <header className={styles.header}>
            <h3>LOGO</h3>
            <nav className={styles.nav} ref={navRef}>
                <a href="/#home">Home</a>
                <a href="/#my-work">My work</a>
                <a href="/#blog">Blog</a>
                <a href="/#about-me">About me</a>
                <button className={`${styles.navBtn} ${styles.navCloseBtn}`}  onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className={styles.navBtn} onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    </>);
};

NavbarMobile.defaultProps =
{
    mode: "portrait",
}

NavbarMobile.propTypes = 
{
    mode: PropTypes.oneOf(["portrait", "landscape"]),
}