import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Layout.module.scss';

const Layout = props => {
    return (
        <div className={styles.Layout}>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;