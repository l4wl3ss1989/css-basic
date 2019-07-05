import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.scss';

const NavigationItems = props => {

    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/packages" exact>Packages</NavigationItem> 
            <NavigationItem link="/customers" exact>Customers</NavigationItem> 
            <NavigationItem link="/start-hosting" exact cta>Start Hosting</NavigationItem> 
        </ul>
    );
};

export default NavigationItems;