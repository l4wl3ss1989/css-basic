import React from 'react';

import Header from '../../components/Header/Header';
import styles from './Layout.module.scss';

const Layout = props => {
    return (
        <div className={styles.Layout}>
            <Header />
            <main>
                {props.children}
            </main>
        </div>
    );
};

export default Layout;