import React from 'react';

import styles from './Plan.module.scss';
import Button from '../../UI/Button/Button';

const Plan = props => {

    let cssClasses = [styles.Plan];
    if (props.featured) {
        cssClasses.push(styles.Plan_highlighted);
    }

    return (
        <article className={cssClasses.join(' ')}
        >
            {props.featured ? 
                <h1 className={styles.Plan__annotation}>RECOMENDED</h1> 
                : null}
            <h1 className={styles.Plan__title}>{props.id}</h1>
            <h2 className={styles.Plan__price}>${props.price}/month</h2>
            <h3>{props.desc}</h3>
            <ul className={styles.Plan__features}>
                {props.assets.map((asset, index) => (
                    <li key={index} className={styles.Plan__features__feature}>{asset}</li>
                ))}
            </ul>
            <div>
                <Button
                    disabled={false}
                    btnType={null}
                    clicked={props.clicked}
                >
                    CHOOSE PLAN
                </Button>
                {/* <button className={styles.Plan__button}></button> */}
            </div>
        </article>
    );
};

export default Plan;