import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => {

    return (
        <ul>
            <NavigationItem link="/packages" exact>Packages</NavigationItem> 
            <NavigationItem link="/customers" exact>Customers</NavigationItem> 
            <NavigationItem link="/start-hosting" exact>Start Hosting</NavigationItem> 
        </ul>
    );
};

export default NavigationItems;