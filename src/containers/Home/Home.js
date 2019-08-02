import React from 'react';

import styles from './Home.module.scss'
import Plans from '../../components/Plans/Plans';
import Features from '../../components/Features/Features';

//TEMP
import Modal from '../../components/UI/Modal/Modal';

const Home = () => {

    return (
        <React.Fragment>                
            <section className={styles.ProductOvervew}>
                <h1>Get the freedom you deserve.</h1>
            </section>
            <section className={styles.Plans}>
                <h1 className={styles.Plans__SectionTitle}>Choose Your Plan</h1>
                <Plans />
            </section>
            <section className={styles.KeyFeatures}>
                <h1 className={styles.KeyFeatures__SectionTitle}>Many Good Reasons to Stick Around</h1>
                <Features />
            </section>
        </React.Fragment>
    );
}

export default Home;