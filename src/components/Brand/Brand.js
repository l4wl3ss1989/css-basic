import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Brand.module.scss';

const Brand = props => {
    return (
        <div className={styles.Brand}>
            <NavLink
                to="/"
                exact
                activeClassName="active"
            >
                uHost
            </NavLink>
        </div>
        
    );
};

export default Brand;