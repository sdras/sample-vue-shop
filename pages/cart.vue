<template>
  <div class="capsule">
    <div v-if="cartTotal > 0" class="cart">
      <h1>Cart</h1>
      <div class="cartitems" v-for="item in cart">
        <div class="carttext">
          <h4>{{ item.name }}</h4>
          <p>{{ item.price | usdollar }} x {{ item.count }}</p>
          <p>Total for this item: <strong>{{ item.price * item.count }}</strong></p>
        </div>
        <img class="cartimg" :src="`/${item.img}`" :alt="`Image of ${item.name}`">
      </div>
      <div class="total">
        <h3>Total: {{ total }}</h3>
      </div>
      <app-checkout :total="total"></app-checkout>
    </div>
    <div v-else class="cart empty">
      <h1>Cart</h1>
      <h3>Your cart is empty.</h3>
      <nuxt-link exact to="/"><button>Fill er up!</button></nuxt-link>
    </div>
  </div>
</template>

<script>
import AppCheckout from './../components/AppCheckout.vue';

export default {
  components: {
    AppCheckout
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.$store.state.cartTotal;
    },
    total() {
      let arr = [];
      Object.values(this.cart).forEach(el => {
        arr.push(el.count * el.price)
      })
      const result = arr.reduce((a, b) => a + b)
      return result.toFixed(2)
    }
  },
  filters: {
    usdollar: function(value) {
      return `$${value}`;
    }
  },
  mounted() {
    console.log(this.cart)
  }
};
</script>

<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 50px;
  background: white;
  border-radius: 3px;
  margin-top: 10px;
  padding-bottom: 80px;
}

.cart.empty h1, .cart.empty h3 {
  margin-bottom: 15px;
}

.cartitems {
  padding: 30px;
  border-bottom: 1px solid #ccc;
  width: 500px;
}

.carttext {
  width: 250px;
  float: left;
}

.carttext p,
.carttext h4 {
  padding: 5px;
}

.cartimg {
  width: 100px;
  border: 1px solid #ccc;
  float: right;
}

.total {
  margin: 20px 0;
}
</style>