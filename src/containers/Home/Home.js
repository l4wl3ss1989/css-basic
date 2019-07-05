import React from 'react';

import styles from './Home.module.scss'
import Plans from '../../components/Plans/Plans';

const Home = () => {
    return (
        <React.Fragment>
            <section className={styles.ProductOvervew}>
                <h1>Get the freedom you deserve.</h1>
            </section>
            <section className={styles.Plans}>
                <h1 className={styles.Plans__sectionTitle}>Choose Your Plan</h1>
                <Plans />
            </section>
        </React.Fragment>
    );
};

export default Home;