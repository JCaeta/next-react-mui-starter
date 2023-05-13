import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Container.module.css";

export const Container = (props: any) => 
{
    const propStyles = {
        height: props.height,
        backgroundColor: props.colorBackground
    }

    return (<>
        <section id={props.id} className={styles.container} style={propStyles}>
            {/* <h1 style={{margin: 0}}>Hello</h1> */}
            {props.children}
        </section>
    </>);
}

Container.defaultProps =
{
    id: null,
    height: "80vh",
    children: null,
    colorBackground: "aqua"
}

Container.propTypes = 
{
    id: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.element,
    colorBackground: PropTypes.string
}