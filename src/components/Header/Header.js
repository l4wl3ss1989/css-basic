import React from 'react';

import Brand from '../Brand/Brand';
import NavigationItems from '../Navigation/NavigationItems';
import styles from './Header.module.scss';

const Header = props => {
    return (
        <header className={styles.Header}>
            <Brand />
            <nav className={styles.Header__Navigation}>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Header;