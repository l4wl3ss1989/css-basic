import React from 'react';
import { NavLink } from 'react-router-dom';

import stylesHeader from './HeaderNavigationItem.module.scss';
import stylesFooter from './FooterNavigationItem.module.scss';
import stylesSideDrawer from './SideDrawerNavigationItem.module.scss';

const NavigationItem = props => {
    let styles;
    switch (props.classRef) {
        case 'header': styles = stylesHeader; break;
        case 'footer': styles = stylesFooter; break;
        case 'sidedrawer': styles = stylesSideDrawer; break;
        default: styles = stylesFooter; break;
    }
    return (
        <li className={styles.NavigationItem}>
            <NavLink
                to={props.link}
                exact={props.exact}
                activeClassName={styles.NavigationItem__link_active}
                className={props.cta ? 
                    `${styles.NavigationItem__link} ${styles.NavigationItem__link_cta}`  
                    : styles.NavigationItem__link}
            >
                {props.children}
            </NavLink>
        </li>
    );
};

export default NavigationItem;