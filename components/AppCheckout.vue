<template>
  <div class="payment">
    <h3>Please enter your payment details:</h3>
    <label for="email">Email</label>
    <input id="email" type="email" v-model="stripeEmail" placeholder="name@example.com" />
    <label for="card">Credit Card</label>
    <card class='stripe-card'
      id="card"
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
.payment {
  border: 1px solid #ccc;
  color: black;
  width: 500px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  min-height: 350px;
  justify-content: space-between;
  text-align: center;
}
.stripe-card {
  border: 1px solid #ccc;
}
label {
  color: black;
  margin-top: 15px;
}
</style>