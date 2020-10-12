<template>
  <div>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <b-form @submit.prevent="$emit('login')">
        <validation-provider
          name="email"
          :rules="{ required: true, email: true }"
          v-slot="validationContext"
        >
          <b-form-group label="Email" description="Los datos son privados">
            <b-form-input
              type="email"
              autocomplete="off"
              v-model="user.email"
              :state="getValidationState(validationContext)"
              placeholder="Introduce el email admin@vue.com"
            ></b-form-input>

            <b-form-invalid-feedback>
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>

        <validation-provider
          name="password"
          :rules="{
            required: true,
            min: 3,
            strength_password: true,
          }"
          v-slot="validationContext"
        >
          <b-form-group label="Password">
            <b-form-input
              type="password"
              autocomplete="off"
              v-model="user.password"
              :state="getValidationState(validationContext)"
              placeholder="Introduce el password @Password1"
            ></b-form-input>

            <b-form-invalid-feedback>
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>

        <b-button
          :disabled="invalid || ! user.password"
          type="submit"
          variant="primary"
        >
            Iniciar sesión
        </b-button>
      </b-form>
    </validation-observer>
  </div>
</template>

<script>
import validateMixin from '@/mixins/validation';

export default {
  mixins: [validateMixin],
  props: {
    user: {
      type: Object,
      required: true,
      validator: (user) => {
        // eslint-disable-next-line no-prototype-builtins
        if (!user.hasOwnProperty('email') || !user.hasOwnProperty('password')) {
          console.warn('Usuario no válido');
          return false;
        }
        return true;
      },
    },
  },
};
</script>
