<template>
  <div>
    <transition name="fade">
      <div v-if="!submitted" class="payment">
        <h3>Please enter your payment details:</h3>
        <label for="email">Email</label>
        <input id="email" type="email" v-model="stripeEmail" placeholder="name@example.com"/>
        <label for="card">Credit Card</label>
        <card class='stripe-card'
          id="card"
          :class='{ complete }'
          stripe='pk_test_5ThYi0UvX3xwoNdgxxxTxxrG'
          :options='stripeOptions'
          @change='complete = $event.complete'
        />
        <p>Testing credit card number: 4242 4242 4242 4242</p>
        <button class='pay-with-stripe' @click='pay' :disabled='!complete || !stripeEmail'>Pay with credit card</button>
      </div>
      <div v-else class="statussubmit">
        <div v-if="status === 'success'">
          <app-success />
          <h2>Success!</h2>
          <p>Your order has been processed, it will be delivered shortly.</p>
        </div>
        <div v-else-if="status === 'failure'">
          <h3>Oh No!</h3>
          <p>Something went wrong!</p>
          <button @click="clearCart">Please try again</button>
        </div>
        <div v-else class="loadcontain">
          <h4>Please hold, we're filling up your cart with goodies</h4>
          <app-loader />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { Card, createToken } from 'vue-stripe-elements-plus';
import AppSuccess from './AppSuccess.vue';
import AppLoader from './AppLoader.vue';
import axios from 'axios';

export default {
  components: {
    Card,
    AppLoader,
    AppSuccess
  },
  props: {
    total: {
      type: [Number, String],
      default: '50.00'
    }
  },
  data() {
    return {
      submitted: false,
      complete: false,
      status: '',
      response: '',
      stripeOptions: {
        // you can configure that cc element. I liked the default, but you can
        // see https://stripe.com/docs/stripe.js#element-options for details
      },
      stripeEmail: ''
    };
  },
  methods: {
    pay() {
      createToken().then(data => {
        this.submitted = true;
        console.log(data.token); //this is a token we would use for the stripeToken below
        axios
          .post(
            'https://sdras-stripe.azurewebsites.net/api/charge?code=zWwbn6LLqMxuyvwbWpTFXdRxFd7a27KCRCEseL7zEqbM9ijAgj1c1w==',
            {
              stripeEmail: this.stripeEmail,
              stripeToken: 'tok_visa', //testing token
              stripeAmt: this.total
            },
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          )
          .then(response => {
            this.status = 'success';
            //this.$store.commit('clearCartCount');
            this.response = JSON.stringify(response, null, 2);
            console.log(this.response);
          })
          .catch(error => {
            this.status = 'failure';
            this.response = 'Error: ' + JSON.stringify(error, null, 2);
            console.log(this.response);
          });
      });
    },
    clearCart() {
      this.submitted = false;
      this.status = '';
      this.complete = false;
      this.response = '';
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
.statussubmit {
  text-align: center;
}
.stripe-card {
  border: 1px solid #ccc;
}
p {
  margin: 10px 0 20px;
}
label {
  color: black;
  margin-top: 15px;
}
button[disabled] {
  color: #ccc;
  border-color: #ccc;
  &:hover {
    background: white;
    color: #ccc;
  }
}
.loadcontain {
  text-align: center;
}

/* -- transition --*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>