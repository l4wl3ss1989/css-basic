import React from 'react';

import PackagesPlan from '../../components/Plans/PackagesPlan/PackagesPlan';
import { RETRIVE_PACKAGES_PLANS } from '../../config/plans';
import styles from './Packages.module.scss';

const Packages = () => {
    return (
        <React.Fragment>
            <div className={styles.Background}></div>
            <div className={styles.Packages}>
                {RETRIVE_PACKAGES_PLANS.map((plan, index) => (
                    <React.Fragment key={index}>
                        <PackagesPlan
                            name={plan.name}
                            title={plan.title}
                            desc={plan.desc}
                            featured={plan.featured}
                        />
                        <div className={styles.ClearFix} />
                    </React.Fragment>
                ))}
                
            </div>
        </React.Fragment>
    );
};

export default Packages;