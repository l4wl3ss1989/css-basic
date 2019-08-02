import React from 'react';

import FormFields from '../../components/Forms/formFields';
import { FORM_HOSTING_INPUTS } from '../../config/formInputs';
import styles from './StartHosting.module.scss';

const StartHosting = () => {
    return (
        <React.Fragment>
            <div>
                <h1 className={styles.StartHosting__title}>Awesome! Let's dive right in!</h1>
            </div>
            <form onSubmit={this.submitForm} className={styles.ItemForm}>
                {/* <img src={this.state.image}/> */}
                {/* redirect */}
                <FormFields 
                    formData={this.state.FORM_HOSTING_INPUTS}
                    onblur={(newState) => this.updateForm(newState)}
                    change={(newState) => this.updateForm(newState)}
                />
                <button type="submit">Sign Up</button>  
                {/* button as indvidual component */}
            </form>            
        </React.Fragment>
        // <form action="index.html" class="signup-form">
        //     <label for="title">Title</label>
        //     <select id="title">
        //         <option value="mr">Mr.</option>
        //         <option value="ms">Ms.</option>
        //     </select>
        //     <label for="first-name">First name</label>
        //     <input type="text" id="first-name">
        //     <label for="last-name">Last name</label>
        //     <input type="text" id="last-name">
        //     <label for="email">E-Mail</label>
        //     <input type="email" id="email">
        //     <label for="password">Password</label>
        //     <input type="password" id="password">
        //     <input type="checkbox" id="agree-terms">
        //     <label for="agree-terms">Agree to
        //         <a href="#">Terms &amp; Conditions</a>
        //     </label>
        //     <button type="submit" class="button">Sign Up</button>
        // </form>
    );
};

export default StartHosting;