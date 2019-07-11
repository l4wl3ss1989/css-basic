import React from 'react';

import styles from './Backdrop.module.scss';

const Backdrop = props => {

    let backdrop = props.show ? <div className={styles.Backdrop}></div> : null;

    return backdrop;
};

export default Backdrop;