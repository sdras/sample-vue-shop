<template>
  <div class="navarea">
    <nav>
      <div class="capsule">
        <nuxt-link exact to="/">
          <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby="shopicon" role="presentation" width="60" height="60">
            <title id="shopicon">
              Magi Shop
            </title>
            <g fill="black">
              <path d="M82.89 42.69c0-.07 0-.15.05-.22a3.87 3.87 0 0 0 0-.39v-3.91a1 1 0 0 0-.07-.34v-.08a1 1 0 0 0 0-.09l-7.33-11.9a1 1 0 0 0-.86-.48h-3.56v-2.35a1 1 0 0 0-1-1h-4.49v-1.14a1 1 0 0 0-1-1H35.37a1 1 0 0 0-1 1v1.14h-4.49a1 1 0 0 0-1 1v2.35h-2.66a1 1 0 0 0-.82.43l-3.95 5.72-4.27 6.17a1 1 0 0 0-.07.13v.08a1 1 0 0 0-.07.34v3.93a3.86 3.86 0 0 0 0 .39c0 .08 0 .15.05.23a3.74 3.74 0 0 0 .13.44l.06.14a3.68 3.68 0 0 0 .26.51 3.67 3.67 0 0 0 .89 1l.11.07a3.66 3.66 0 0 0 .38.24l.3.14.13.06c0 .34-.07.69-.1 1s-.05.47-.07.71c-.06.76-.09 1.53-.09 2.29a30.61 30.61 0 0 0 5.4 17.4 29.79 29.79 0 0 0 5.39 6 30.8 30.8 0 0 0 40.23 0q.76-.65 1.48-1.35a30 30 0 0 0 3.89-4.66 30.61 30.61 0 0 0 5.36-17.36c0-.76 0-1.53-.09-2.29 0-.24 0-.48-.07-.71s-.06-.69-.1-1l.25-.11h.09a3.66 3.66 0 0 0 1.76-1.89v-.12a3.72 3.72 0 0 0 .21-.52zm-9.2 23.13c-.17.24-.35.48-.52.72s-.29.41-.45.6-.45.55-.68.83-.3.36-.45.54-.55.6-.84.89l-.37.39-.17.15V53.71a1 1 0 0 0-1-1H56.4a1 1 0 0 0-1 1V71H30.91q-.66-.58-1.28-1.2l-.4-.42c-.28-.28-.55-.57-.82-.87s-.3-.36-.45-.53-.47-.55-.69-.83-.3-.4-.44-.6-.35-.48-.52-.72V45.56h47.37zM68.2 71H57.4V54.71h10.8zm11.2-27.45h-5.54v-4.38H81v2.66a1.71 1.71 0 0 1-1.6 1.72zm-58.8 0a1.71 1.71 0 0 1-1.6-1.72v-2.66h7.13v4.39h-5.52zm43-20.61v7.82H36.38v-9h27.24v1.16zM28.9 36.9l4.86-9.62h.61v4.48a1 1 0 0 0 1 1H37l-1.4 4.4h-6.83zm16.23-4.13l-.58 4.4h-6.9l1.4-4.4zm2 0h6.13l.24 4.4h-6.93zm8.37 4.4l-.24-4.4h6.11l1.06 4.4zm-11.09 2v4.39h-7.13v-4.39zm2 0h7.14v4.39h-7.12zm9.14 0h7.14v4.39h-7.12zm8.93-2l-1.06-4.4h1.18a1 1 0 0 0 1-1v-4.49h1.48l1 2.4 3.21 7.49zm-36.36 2h7.14v4.39h-7.12zm36.58 4.39v-4.39h7.15v4.39zm8.8-6.39l-.12-.28-4.11-9.61h4.84l6.08 9.89zm-4.39-11.89h-3.48v-1.35h3.48zm-34.74 0h-3.48v-1.35h3.48zm-7.63 2h4.77l-3.92 7.77-1.07 2.12h-6.61l3.29-4.77zM21.22 47.2c0-.23 0-.45.07-.67s.08-.65.12-1h2.92v16.95a28.63 28.63 0 0 1-3.19-13.14c-.01-.71.02-1.43.08-2.14zm33.29 30.66a29.17 29.17 0 0 1-9 0 28.57 28.57 0 0 1-12-4.87h33.1a28.57 28.57 0 0 1-12.1 4.87zm21.17-15.38V45.56h2.92c0 .32.09.64.12 1s.05.45.07.67c.05.71.09 1.43.09 2.14a28.63 28.63 0 0 1-3.2 13.11z"/>
              <path d="M52.74 50H30.8a1 1 0 0 0-1 1v14.59a1 1 0 0 0 1 1h21.94a1 1 0 0 0 1-1V51a1 1 0 0 0-1-1zm-1 14.63H31.8V52h19.94zM60.08 62.94h5.44a1 1 0 0 0 1-1v-2.75a1 1 0 0 0-1-1h-5.44a1 1 0 0 0-1 1v2.74a1 1 0 0 0 1 1.01zm1-2.74h3.44v.74h-3.44z"/>
            </g>
          </svg>
        </nuxt-link>
        <ul>
          <nuxt-link to="/women"><li>Women's</li></nuxt-link>
          <nuxt-link to="/men"><li>Men's</li></nuxt-link>
          <nuxt-link to="/sale"><li>Sale</li></nuxt-link>
        </ul>
        <nuxt-link to="/cart">
          <div class="cartitem">
            <div v-if="cartTotal > 0" class="cartcount">{{ cartTotal }}</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby="shopicon" role="presentation" width="30" height="30">
              <title id="cart">
                Shopping Cart
              </title>
              <path fill="black" d="M8.01 10c-1.104 0-2 .896-2 2 0 1.105.896 2 2 2h10.376l10.53 49.813c-.107 1.14.952 2.245 2.095 2.187h50c1.057.015 2.03-.943 2.03-2s-.973-2.015-2.03-2H32.637l-1.688-8H85.01c.896-.01 1.742-.69 1.938-1.562l7-30c.26-1.16-.748-2.43-1.937-2.438H23.76l-1.78-8.437c-.2-.884-1.063-1.57-1.97-1.563zm16.594 14H89.51l-6.093 26H30.104zM42.01 72c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm28 0c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm-28 4c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5zm28 0c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5z"/>
            </svg>
          </div>
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    cartTotal() {
      return this.$store.state.cartTotal;
    }
  }
};
</script>

<style scoped>
.navarea {
  overflow: hidden;
}

.capsule {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  width: 100vw;
  height: 60px;
  background: white;
}

ul {
  padding-left: 0;
  display: flex;
  list-style: none outside none;
  justify-content: center;
  align-items: center;
}

li {
  padding: 0 50px;
}

a,
a:visited,
a:active {
  text-decoration: none;
  color: black;
}

.cartitem {
  position: relative;
  float: right;
}

.cartcount {
  font-family: 'Barlow', sans-serif;
  position: absolute;
  background: #ff2211;
  color: white;
  text-align: center;
  padding-top: 4px;
  width: 20px;
  height: 20px;
  font-size: 10px;
  margin: -5px 0 0 20px;
  border-radius: 1000px;
  font-weight: 700;
}
</style>
