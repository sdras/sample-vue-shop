<template>
  <div class="successsvg">
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="-10 -10 40 40">
      <path class="success1" d="M22,10.1a.94.94,0,0,0-1,1V12a9,9,0,0,1-9,9h0A9,9,0,0,1,12,3h0a9.46,9.46,0,0,1,3.7.8A1,1,0,0,0,16.5,2,11.38,11.38,0,0,0,12,1h0a11,11,0,0,0,0,22h0A11,11,0,0,0,23,12v-.9A.94.94,0,0,0,22,10.1Z" transform="translate(-1 -1)" style="fill: #8fd01f"/>
    <path class="success2" d="M23.7,2.3a1,1,0,0,0-1.4,0L12,12.6,9.7,10.3a1,1,0,0,0-1.4,1.4l3,3a1,1,0,0,0,1.4,0l11-11A1,1,0,0,0,23.7,2.3Z" transform="translate(-1 -1)" style="fill: #8fd01f"/>
    </svg>
  </div>
</template>

<script>
import { TweenMax, Elastic, set } from 'gsap';

export default {
  mounted() {
    TweenMax.set('.success1, .success2', {
      transformOrigin: '50% 50%'
    });

    TweenMax.from('.success1', 1.25, {
      scaleX: 0,
      ease: Elastic.easeOut.config(1, 0.75)
    });

    TweenMax.from('.success2', 1.25, {
      scaleX: -1,
      rotation: 360,
      ease: Elastic.easeOut.config(1, 0.75)
    });

    window.setTimeout(() => this.$emit('restartCart'), 3000);
  }
};
</script>

<style scoped>
svg {
  width: 100px;
  height: 100px;
}

.successsvg {
  margin: 20px auto;
  display: table;
}
</style>