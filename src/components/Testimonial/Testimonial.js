import React from 'react';

import styles from './Testimonial.module.scss'

const Testimonial = props => {
    const img = (
        <div className={styles.Testimonial__imageContainer}>
            <img src={props.img} alt={props.imgAlt} className={styles.Testimonial__imageContainer__image} />
        </div>
    );
    const info = (
        <div className={styles.Testimonial__info}>
            <h1 className={styles.Testimonial__info__name}>{props.name}</h1>
            <h2 className={styles.Testimonial__info__subtitle}>{props.children}</h2>
            <p className={styles.Testimonial__info__text}>{props.text}</p>
        </div>
    );
    
    return (
        <div className={styles.Testimonial} id={props.invert ? styles.Customer2 : null}>
            {props.invert ? info : img}   
            {props.invert ? img : info}           
        </div>
    );
};

export default Testimonial;