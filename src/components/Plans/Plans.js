import React from 'react';

import styles from './Plans.module.scss';
import { RETRIVE_PLANS } from '../../config/plans';
import Plan from './Plan/Plan';

const Plans = props => {
    return (
        <div className={styles.Plans}>
            {RETRIVE_PLANS.map((plan, index) => (
                <Plan key={index}
                    id={plan.name}
                    price={plan.price}
                    desc={plan.desc}
                    assets={plan.assets}
                />
            ))}            
        </div>
    );
};

export default Plans;