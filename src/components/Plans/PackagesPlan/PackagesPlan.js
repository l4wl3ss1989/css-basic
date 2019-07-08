import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PackagesPlan.module.scss';

const PackagesPlan = props => {

    let cssStyles = [styles.PackagesPlan];
    
    switch(props.name) {
        case 'PLUS':
            cssStyles.push(styles.PackagesPlan__Plus);
            break;
        case 'FREE':
            cssStyles.push(styles.PackagesPlan__Free);
            break;
        case 'PREMIUM':
            cssStyles.push(styles.PackagesPlan__Premium);
            break;
        default:
            break;
    }
    cssStyles = cssStyles.join(' ');

    return (
        <section className={cssStyles}>
            <Link to={`/plan?name=${props.name}`}>
                <h1 className={styles.PackagesPlan__title}>{`Our ${props.name} Plan`}</h1>
                <h2 className={styles.PackagesPlan__subtitle}>{props.title}</h2>
                <p className={styles.PackagesPlan__info}>{props.desc}</p>
            </Link>
        </section>
    );
};

export default PackagesPlan;