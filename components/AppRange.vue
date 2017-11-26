<template>
<div class="sidearea">
  <label for="pricerange">Highest Price: <span>${{ pricerange }}</span></label>
  <input class="slider" id="pricerange" v-model="pricerange" type="range" :min="min" :max="max" step="0.1">
  <span class="min">${{ min }}</span>
  <span class="max">${{ max }}</span>
</div>
</template>

<script>
export default {
data() {
  return {
    pricerange: 300,
    min: 0,
    max: 400
  }
},
}
</script>

<style scoped lang="scss">
label {
  font-family: 'Playfair Display', serif;
  padding: 15px 0;
  text-align: center;
}

span {
  font-family: 'Barlow', sans-serif;
}

.max {
  font-size: 12px;
  float: right;
  color: #565656;
}

.min {
  float: left;
  font-size: 12px;
  color: #565656;
}

input[type=range].slider {
  -webkit-appearance: none;
  width: 100%;
  margin: 25px 0 5px;
}
input[type=range].slider:focus {
  outline: none;
}
input[type=range].slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 4.3px;
  cursor: pointer;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  background: #3e64ea;
  border-radius: 13.7px;
  border: 0px solid rgba(1, 1, 1, 0);
}
input[type=range].slider::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px rgba(0, 0, 62, 0), 0px 0px 0px rgba(0, 0, 88, 0);
  border: 1.9px solid #3e63ea;
  height: 17px;
  width: 17px;
  border-radius: 31px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -6.35px;
}
input[type=range].slider:focus::-webkit-slider-runnable-track {
  background: #5576ed;
}
input[type=range].slider::-moz-range-track {
  width: 100%;
  height: 4.3px;
  cursor: pointer;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  background: #3e64ea;
  border-radius: 13.7px;
  border: 0px solid rgba(1, 1, 1, 0);
}
input[type=range].slider::-moz-range-thumb {
  box-shadow: 0px 0px 0px rgba(0, 0, 62, 0), 0px 0px 0px rgba(0, 0, 88, 0);
  border: 1.9px solid #3e63ea;
  height: 17px;
  width: 17px;
  border-radius: 31px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range].slider::-ms-track {
  width: 100%;
  height: 4.3px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range].slider::-ms-fill-lower {
  background: #2752e7;
  border: 0px solid rgba(1, 1, 1, 0);
  border-radius: 27.4px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
}
input[type=range].slider::-ms-fill-upper {
  background: #3e64ea;
  border: 0px solid rgba(1, 1, 1, 0);
  border-radius: 27.4px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
}
input[type=range].slider::-ms-thumb {
  box-shadow: 0px 0px 0px rgba(0, 0, 62, 0), 0px 0px 0px rgba(0, 0, 88, 0);
  border: 1.9px solid #3e63ea;
  height: 17px;
  width: 17px;
  border-radius: 31px;
  background: #ffffff;
  cursor: pointer;
  height: 4.3px;
}
input[type=range].slider:focus::-ms-fill-lower {
  background: #3e64ea;
}
input[type=range].slider:focus::-ms-fill-upper {
  background: #5576ed;
}
</style>