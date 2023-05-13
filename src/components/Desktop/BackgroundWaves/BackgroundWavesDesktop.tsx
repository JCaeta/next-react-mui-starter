import React from 'react';
import PropTypes from 'prop-types';
import styles from "./BackgroundWavesDesktop.module.css";
import img1 from '../../Common/BackgroundWaves/images/1.png';
import img2 from '../../Common/BackgroundWaves/images/2.png';
import img3 from '../../Common/BackgroundWaves/images/3.png';
import Image from 'next/image';

export const BackgroundWavesDesktop = (props: any) => 
{
    return (<>
        <section className={styles.container}>
            <Image 
                src={img1} 
                className={`${styles.wave} ${styles.wave1}`}
                alt="My image"/>

            <Image 
                src={img2} 
                className={`${styles.wave} ${styles.wave2}`}
                alt="My image"/>

            <Image 
                src={img3} 
                className={`${styles.wave} ${styles.wave3}`}
                alt="My image"/>
        </section>
    </>);
}

BackgroundWavesDesktop.defaultProps =
{

}

BackgroundWavesDesktop.propTypes = 
{

}
