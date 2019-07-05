import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.module.scss';

const NavigationItem = props => {
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