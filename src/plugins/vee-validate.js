import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import validatorEs from 'vee-validate/dist/locale/es.json';

Vue.use(VeeValidate, {
  fieldsBagName: 'veeFields',
});
Validator.localize('es', validatorEs);
