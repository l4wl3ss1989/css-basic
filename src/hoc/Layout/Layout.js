import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Layout.module.scss';
import Backdrop from '../../components/UI/BackDrop/Backdrop';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render() {
        return (
            <div className={styles.Layout}>
                <Backdrop show={false} />
                <Header 
                    drawerToggleClicked={this.sideDrawerToggleHandler} 
                    sideDrawerOpen={this.state.showSideDrawer}
                    sideDrawerClosed={this.sideDrawerClosedHandler} 
                />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        );
    }
};

export default Layout;