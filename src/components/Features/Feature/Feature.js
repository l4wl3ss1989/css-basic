import React from 'react';

import styles from './Feature.module.scss';

const Feature = props => {
    return (
        <li className={styles.Feature}>
            <div className={styles.Feature__image}>

            </div>
            <p className={styles.Feature__description}>{props.desc}</p>
        </li>
    );
};

export default Feature;