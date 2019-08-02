import React from 'react';

import styles from './DrawerToggle.module.scss';

const DrawerToggle = props => {
    return (
        <button className={styles.DrawerToggle}
            onClick={props.clicked}
        >
            <span className={styles.DrawerToggle__bar}></span>
            <span className={styles.DrawerToggle__bar}></span>
            <span className={styles.DrawerToggle__bar}></span>
        </button>
    );
};

export default DrawerToggle;