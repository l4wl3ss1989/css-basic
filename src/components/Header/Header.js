import React from 'react';

import Brand from '../Brand/Brand';
import NavigationItems from '../Navigation/NavigationItems';
import { RETRIVE_HEADER_NAV_ITEMS } from '../../config/navigationItems';
import styles from './Header.module.scss';

const Header = props => {
    return (
        <header className={styles.Header}>
            <Brand />
            <nav className={styles.Header__Navigation}>
                <NavigationItems 
                    navItems={RETRIVE_HEADER_NAV_ITEMS.links}
                    classRef={RETRIVE_HEADER_NAV_ITEMS.classRef}
                />
            </nav>
        </header>
    );
};

export default Header;