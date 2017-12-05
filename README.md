# Vue Sample Shop

This small demo shows how to accept payments with stripe with Vue.js using a
serverless function. It's actually not that bad to set up! The shop also shows
how a number of concepts work in Vue. Server side rendering and routing is done
with Nuxt.js. Centralized state management with Vuex for product details. Of
note, using computed properties, `.sync`, CSS Grid, and `transition-group`.

Live demo at
[https://shoppity.azurewebsites.net/](https://shoppity.azurewebsites.net/)

Articles explaining the demo will be available soon at
[https://css-tricks.com/](https://css-tricks.com/)

The serverless function is open source as well, available at this repo
[https://github.com/sdras/sample-stripe-handler](https://github.com/sdras/sample-stripe-handler)

![Vue stripe sample shop](https://image.ibb.co/hYi7nm/shop_demo.gif "Vue Stripe Sample Shop")

## Build Setup

```bash
# install dependencies
$ npm install # Or yarn

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project, get ready for launch on app services
$ npm run generate
```
