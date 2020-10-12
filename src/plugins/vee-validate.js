import Vue from 'vue';
import {
  ValidationObserver, ValidationProvider, extend, localize,
} from 'vee-validate';
import es from 'vee-validate/dist/locale/es.json';
import * as rules from 'vee-validate/dist/rules';

// install rules and localization
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize('es', es);

extend('strength_password', {
  message: (field) => `El campo ${field} debe contener al menos: 1 letra mayúscula, 1 letra minúscula, 1 número y un carácter especial (por ejemplo,. _ &? Etc.)`,
  validate: (value) => {
    // eslint-disable-next-line no-useless-escape
    const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
    return strongRegex.test(value);
  },
});

// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
