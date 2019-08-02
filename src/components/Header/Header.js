import React from 'react';

import Brand from '../Brand/Brand';
import NavigationItems from '../Navigation/NavigationItems';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle/DrawerToggle';
import { RETRIVE_HEADER_NAV_ITEMS } from '../../config/navigationItems';
import styles from './Header.module.scss';

const Header = props => {
    return (
        <header className={styles.Header}>
            <DrawerToggle 
                clicked={props.drawerToggleClicked}
            />
            <Brand />
            <nav className={styles.Header__Navigation}>
                <NavigationItems 
                    navItems={RETRIVE_HEADER_NAV_ITEMS.links}
                    classRef={RETRIVE_HEADER_NAV_ITEMS.classRef}
                />                
            </nav>
            <SideDrawer 
                open={props.sideDrawerOpen}
                closed={props.sideDrawerClosed}
                navItems={RETRIVE_HEADER_NAV_ITEMS.links}
                classRef="sidedrawer"
            />
        </header>
    );
};

export default Header;