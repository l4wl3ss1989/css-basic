import React from 'react';

import NavigationItems from '../Navigation/NavigationItems';
import { RETRIVE_FOOTER_NAV_ITEMS } from '../../config/navigationItems';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <nav>
                <NavigationItems 
                    navItems={RETRIVE_FOOTER_NAV_ITEMS.links}
                    classRef={RETRIVE_FOOTER_NAV_ITEMS.classRef}
                />
            </nav>
        </footer>
    );
};

export default Footer;