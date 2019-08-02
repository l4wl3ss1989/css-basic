import React from 'react';

import styles from './Modal.module.scss'
import Backdrop from '../BackDrop/Backdrop';

const Modal = props => {

    let modal = null;
    if(props.show) {
        modal = (
        <React.Fragment>
            <Backdrop show={true} cancel={props.onCancel} />
            <div className={styles.Modal}>
                <h1 className={styles.Modal__title}>{props.title}</h1>
                <div className={styles.Modal__actions}>
                    <button className={styles.Modal__action}
                        type="button"
                        onClick={props.onConfirm}
                    >Yes!</button>
                    <button className={`${styles.Modal__action} ${styles.Modal__action_negative}`}  
                        type="button"
                        onClick={props.onCancel}
                    >No!</button>
                </div>
            </div>
        </React.Fragment>
        );
    }

    return modal;
};

export default Modal;