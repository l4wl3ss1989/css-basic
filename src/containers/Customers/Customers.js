import React from 'react';

import Testimonial from '../../components/Testimonial/Testimonial';
import img1 from '../../assets/images/customer-1.jpg';
import img2 from '../../assets/images/customer-2.jpg';
import styles from './Customers.module.scss';

const Customers = () => {
    return (
        <div className={styles.Customers}>
            <Testimonial key="1"
                id="1"
                invert={false}
                img={img1}
                imgAlt="Mike Statham - Customer"
                name="Mike Statham"
                text="uHost helped me realize my project with a highly constrained budget in like no time."                         
            >
                Founder of<a href="tech-analysis.com">tech-analysis.com</a>
            </Testimonial>
            <Testimonial key="2"
                id="1"
                invert={true}
                img={img2}
                imgAlt="John Mellow - Customer"
                name="John Mellow"
                text="I worked as a blogger and always looked for an integrated hosting and file storage solution. I found
                it in uHost!"                         
            >
                Hosts his private videos on uHost.
            </Testimonial>
        </div>
    );
};

export default Customers;