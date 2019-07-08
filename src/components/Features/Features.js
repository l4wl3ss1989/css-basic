import React from 'react';

import styles from './Features.module.scss';
import { RETRIVE_FEATURES } from '../../config/features';
import Feature from './Feature/Feature';

const Features = () => {
    return (
        <ul className={styles.Features}>
            {RETRIVE_FEATURES.map((feature, index) => (
                <Feature key={index}
                    desc={feature.desc}
                />
            ))}
        </ul>
    );
};

export default Features;