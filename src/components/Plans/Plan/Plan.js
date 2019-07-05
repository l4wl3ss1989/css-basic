import React from 'react';

import styles from './Plan.module.scss';

const Plan = props => {
    return (
        <article className={styles.Plan}>
            <h1>{props.id}</h1>
            <h2>${props.price}/month</h2>
            <h3>{props.desc}</h3>
            <ul>
                {props.assets.map((asset, index) => (
                    <li key={index}>{asset}</li>
                ))}
            </ul>
            <div>
                <button>CHOOSE PLAN</button>
            </div>
        </article>
    );
};

export default Plan;