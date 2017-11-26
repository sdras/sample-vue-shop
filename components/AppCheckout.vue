<template>
  <div id='app'>
    <h1>Please give us your payment details:</h1>
    <label for="email">Email</label>
    <input id="email" type="text" v-model="stripeEmail" /><br>
    <card class='stripe-card'
      :class='{ complete }'
      stripe='pk_test_5ThYi0UvX3xwoNdgxxxTxxrG'
      :options='stripeOptions'
      @change='complete = $event.complete'
    />
    <button class='pay-with-stripe' @click='pay' :disabled='!complete'>Pay with credit card</button>
  </div>
</template>

<script>
import { Card, createToken } from 'vue-stripe-elements-plus';
import axios from 'axios';

export default {
  props: {
    total: {
      type: [Number, String],
      default: '50.00'
    }
  },
  data() {
    return {
      complete: false,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      },
      stripeEmail: ''
    };
  },
  components: { Card },
  methods: {
    pay() {
      createToken().then(data => {
        console.log(data.token);
        axios
          .post(
            'https://sdras-stripe.azurewebsites.net/api/charge?code=zWwbn6LLqMxuyvwbWpTFXdRxFd7a27KCRCEseL7zEqbM9ijAgj1c1w==',
            {
              stripeEmail: this.stripeEmail,
              stripeToken: 'tok_visa',
              stripeAmt: this.total
            },
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          )
          .then(response => {
            this.response = JSON.stringify(response, null, 2);
            console.log(this.response);
          })
          .catch(error => {
            this.response = 'Error: ' + JSON.stringify(error, null, 2);
            console.log(this.response);
          });
      });
    }
  }
};
</script>

<style scoped>
.stripe-card {
  width: 300px;
  border: 1px solid grey;
}
.stripe-card.complete {
  border-color: green;
}
label {
  color: black;
}
</style>