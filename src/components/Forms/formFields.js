import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './formFields.module.scss';

const FormFields = props => {

    const renderFields = () => {
        const formAray = [];
        props.formData.forEach(element => {
            formAray.push({
                id: element,
                settings: props.formData[element]
            })
        });      
        
        return formAray.map((item, i) => {
            return ( 
                <div key={i} className={styles.Form_element}>
                    {renderTemplates(item)}
                </div>
            );
        });
    }

    const showLabel = (show,label,name,icon=null) => {
        if(icon)
            icon = <FontAwesome name={icon} />    

        return show ? 
            <label htmlFor={name}>{icon}{label}</label>
        : null
    }

    const showValidation = (data) => {
        let errorMessage = null;

        if(data.validation && !data.valid){
            errorMessage = (
                <div className={styles.label_error}>
                    {data.validationMessage}
                </div>
            );
        }
        return errorMessage;
    }
    
    const changeHandler = (event,id,blur) => {
        const newState = props.formData;
        newState[id].value = event.target.value;        
        if(blur){
            let validData = validate(newState[id])
            newState[id].valid = validData[0];
            newState[id].validationMessage = validData[1];
        }
        if(id === 'image' && event.target.value !== '') {
            newState[id].prevImage = URL.createObjectURL(event.target.files[0]);
            newState[id].file = event.target.files[0];
        }

        newState[id].touched = blur;

        props.change(newState);
    }

    const renderTemplates = data => {
        let formTemplate = null;
        let values = data.settings;
        switch (values.element) {
            case 'input':
                formTemplate = (
                    <React.Fragment>
                        {showLabel(values.label,values.labelText,values.config.name)}   
                        <input 
                            {...values.config}
                            value={values.value}
                            onBlur = {
                                (event) => changeHandler(event,data.id,true) 
                            }
                            onChange = {
                                (event) => changeHandler(event,data.id,false)
                            }
                        />
                        {showValidation(values)}
                    </React.Fragment>
                );
                break;
            case 'select':
                formTemplate = (
                    <React.Fragment>
                        {showLabel(values.label,values.labelText,values.config.name)} 
                        <select
                            value={values.value}
                            name={values.config.name}
                            onChange = {
                                (event) => changeHandler(event,data.id)
                            }
                        >
                            { values.config.options.map( (item,i) =>(
                                <option key={i} value={item.val}>
                                    {item.text}
                                </option>
                            ))}
                        </select>
                    </React.Fragment>
                );
                break;
            default: 
                formTemplate = null; 
                break;
                
        }

        return formTemplate;
    }

    return <div>{renderFields()}</div>;
};

export default FormFields;