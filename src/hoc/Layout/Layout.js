import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Layout.module.scss';
import Backdrop from '../../components/UI/BackDrop/Backdrop';

const Layout = props => {
    return (
        <div className={styles.Layout}>
            <Backdrop show={false} />
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;