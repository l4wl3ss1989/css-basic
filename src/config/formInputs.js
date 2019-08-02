const FORM_HOSTING_INPUTS = {
    title: {
        element: 'select',
        value: '',
        label: true,
        labelText: 'Title',
        config: {
            name: 'title',
            options: [
                {val:'mr',text:'Mr.'},
                {val:'ms',text:'Ms.'},
            ]
        },
        validation: {
            required: false
        },
        valid: true
    },
    name: {
        element: 'input',
        value: '',
        label: true,
        labelText: 'First name',
        config: {
            name: 'first-name',
            type: 'text',
            placeholder: 'Enter your first name'
        },
        validation: {
            required: true                  
        }
    },
    lastname: {
        element: 'input',
        value: '',
        label: true,
        labelText: 'Last name',
        config: {
            name: 'last-name',
            type: 'text',
            placeholder: 'Enter your last name'
        },
        validation: {
            required: true                  
        }
    },
    email:{
        element: 'input',
        value: '',
        label: true,
        labelText: 'E-Mail',
        config: {
            name: 'email',
            type: 'email',
            placeholder: 'Enter your email'
        },
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
    },
    password: {
        element: 'input',
        value: '',
        label: true,
        labelText: 'Password',
        config: {
            name: 'password',
            type: 'password',
            placeholder: 'Enter your password'
        },
        validation: {
            required: true,
            minLen: 6
        },
    },
    // agree-terms checkbox
}

export { FORM_HOSTING_INPUTS }