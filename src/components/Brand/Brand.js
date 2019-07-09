import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/images/uhost-icon.png';
import styles from './Brand.module.scss';

const Brand = props => {
    return (
        <div className={styles.Brand}>
            <NavLink
                to="/"
                exact
                activeClassName="active"
            >
                <img src={Logo} alt="uHost"/>
            </NavLink>
        </div>
        
    );
};

export default Brand;