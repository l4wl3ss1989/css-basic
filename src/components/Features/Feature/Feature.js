import React from 'react';

import SVG1 from '../../SVG/SVG1';
import SVG2 from '../../SVG/SVG2';
import SVG3 from '../../SVG/SVG3';
import styles from './Feature.module.scss';

const Feature = props => {

    let image = null;
    switch (props.id) {
        case 0:
            image = <SVG1 />
        break;
        case 1:
            image = <SVG2 />
            break;
        case 2:
            image = <SVG3 />
            break;    
        default: 
            break;
    }

    return (
        <li className={styles.Feature}>
            <div className={styles.Feature__image}>
                {image}
            </div>
            <p className={styles.Feature__description}>{props.desc}</p>
        </li>
    );
};

export default Feature;