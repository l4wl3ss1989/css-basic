import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import stylesHeader from './HeaderNavigationItems.module.scss';
import stylesFooter from './FooterNavigationItems.module.scss';

const NavigationItems = props => {
    const cssStyles = props.classRef === 'header' ? stylesHeader : stylesFooter;
    return (
        <ul className={cssStyles.NavigationItems}>
            {props.navItems.map((item, index) => (
                <NavigationItem key={index}
                    link={item.link}
                    exact={item.exact}
                    cta={item.cta ? true : false} 
                    classRef={props.classRef}
                >{item.name}</NavigationItem>
            ))}
            {/* <NavigationItem link="/packages" exact>Packages</NavigationItem> 
            <NavigationItem link="/customers" exact>Customers</NavigationItem> 
            <NavigationItem link="/start-hosting" exact cta>Start Hosting</NavigationItem>  */}
        </ul>
    );
};

export default NavigationItems;