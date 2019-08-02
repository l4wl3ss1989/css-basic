import React from 'react';

import Backdrop from '../../UI/BackDrop/Backdrop';
import NavigationItem from '../NavigationItem/NavigationItem';
import styles from './SideDrawer.module.scss';

const SideDrawer = props => {

    let sideDrawer = null;
    if(props.open){
        sideDrawer = (
            <React.Fragment>
                <Backdrop show={props.open} clicked={props.closed}/>
                <nav className={styles.SideDrawer}>
                    <ul className={styles.SideDrawer__items}>
                        {props.navItems.map((item, index) => (
                            <NavigationItem key={index}
                                link={item.link}
                                exact={item.exact}
                                cta={item.cta ? true : false} 
                                classRef={props.classRef}
                            >{item.name}</NavigationItem>
                        ))}
                    </ul>
                </nav>
            </React.Fragment>
        );
    }

    return sideDrawer;
};

export default SideDrawer;