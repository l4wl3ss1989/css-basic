import React from 'react';

import Feature from './Feature/Feature';
import styles from './Features.module.scss';
import { RETRIVE_FEATURES } from '../../config/features';

const Features = () => {

    return (
        <ul className={styles.Features}>
            {RETRIVE_FEATURES.map((feature, index) => (
                <Feature key={index}
                    id={index}
                    desc={feature.desc}
                />
            ))}
        </ul>
    );
};

export default Features;