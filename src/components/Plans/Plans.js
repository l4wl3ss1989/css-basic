import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import styles from './Plans.module.scss';
import { RETRIVE_PLANS } from '../../config/plans';
import Plan from './Plan/Plan';
import Modal from '../UI/Modal/Modal';

class Plans extends Component {

    state = {
        showModal: false
    }

    handleAcceptModal = () => {
        // send data.
        this.setState({showModal: false})
        this.props.history.push("/");
    }
    handleCancelModal = () => {
        this.setState({showModal: false});
    }

    onClickedPlan = (plan) => {        
        this.setState({showModal: true});
    }
    
    render() {
        return (
            <div className={styles.Plans}>
                {RETRIVE_PLANS.map((plan, index) => (
                    <React.Fragment key={index}>
                        <Modal 
                            show={this.state.showModal} 
                            title="Do you want to continue?" 
                            onConfirm={this.handleAcceptModal}
                            onCancel={this.handleAcceptModal}
                        />
                        <Plan
                            id={plan.name}
                            price={plan.price}
                            desc={plan.desc}
                            assets={plan.assets}
                            featured={plan.featured ? true : false}
                            clicked={(plan) => this.onClickedPlan(plan)}
                        />
                    </React.Fragment>
                ))}            
            </div>
        );
    }
    
};

export default withRouter(Plans);