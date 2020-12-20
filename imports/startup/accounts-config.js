import { Accounts } from 'meteor/accounts-base';

/* 
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});
*/

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
    
});

Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'first-name',
        fieldLabel: 'First name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your first name");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'last-name',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
    }, /*{
        fieldName: 'gender',
        showFieldLabel: false,      // If true, fieldLabel will be shown before radio group
        fieldLabel: 'Gender',
        inputType: 'radio',
        radioLayout: 'vertical',    // It can be 'inline' or 'vertical'
        data: [{                    // Array of radio options, all properties are required
    		id: 1,                  // id suffix of the radio element
            label: 'Male',          // label for the radio element
            value: 'm'              // value of the radio element, this will be saved.
          }, {
            id: 2,
            label: 'Female',
            value: 'f',
            checked: 'checked'
        }],
        visible: true
    }, */{
        fieldName: 'country',
        fieldLabel: 'Country',
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Please select your country',
        data: [{
            id: 1,
            label: 'Argentina',
            value: 'ar'
          }, {
            id: 2,
            label: 'France',
            value: 'fr'
          }, {
            id: 3,
            label: 'Italy',
            value: 'it'
          }, {
            id: 4,
            label: 'Spain',
            value: 'es'
          }, {
            id: 5,
            label: 'United Kingdom',
            value: 'uk'
          }],
        visible: true
    }, 
        {
        fieldName: 'roles',
        fieldLabel: 'Profile',
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Please select your profile',
        data: [{
            id: 1,
            label: 'Customer',
            value: 'user'
          }, {
            id: 2,
            label: 'Sommelier',
            value: 'admin'
          }, {
            id: 3,
            label: 'Management',
            value: 'super-admin',
        }],
        visible: true
    },                
                        
                        /*{
        fieldName: 'terms',
        fieldLabel: 'I accept the terms and conditions',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('You must accept the terms and conditions.');
                return false;
            }
        }
    }*/]
});



















