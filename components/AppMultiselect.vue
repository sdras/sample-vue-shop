<template>
  <div class="multiselect">
    <input type="range" multiple value="0,100" />
  </div>
</template>

<script>
export default {
  mounted() {
    'use strict';

    var supportsMultiple =
      self.HTMLInputElement && 'valueLow' in HTMLInputElement.prototype;

    var descriptor = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value'
    );

    self.multirange = function(input) {
      if (supportsMultiple || input.classList.contains('multirange')) {
        return;
      }

      var value = input.getAttribute('value');
      var values = value === null ? [] : value.split(',');
      var min = +(input.min || 0);
      var max = +(input.max || 100);
      var ghost = input.cloneNode();

      input.classList.add('multirange', 'original');
      ghost.classList.add('multirange', 'ghost');

      input.value = values[0] || min + (max - min) / 2;
      ghost.value = values[1] || min + (max - min) / 2;

      input.parentNode.insertBefore(ghost, input.nextSibling);

      Object.defineProperty(
        input,
        'originalValue',
        descriptor.get
          ? descriptor
          : {
              // Fuck you Safari >:(
              get: function() {
                return this.value;
              },
              set: function(v) {
                this.value = v;
              }
            }
      );

      Object.defineProperties(input, {
        valueLow: {
          get: function() {
            return Math.min(this.originalValue, ghost.value);
          },
          set: function(v) {
            this.originalValue = v;
          },
          enumerable: true
        },
        valueHigh: {
          get: function() {
            return Math.max(this.originalValue, ghost.value);
          },
          set: function(v) {
            ghost.value = v;
          },
          enumerable: true
        }
      });

      if (descriptor.get) {
        // Again, fuck you Safari
        Object.defineProperty(input, 'value', {
          get: function() {
            return this.valueLow + ',' + this.valueHigh;
          },
          set: function(v) {
            var values = v.split(',');
            this.valueLow = values[0];
            this.valueHigh = values[1];
            update();
          },
          enumerable: true
        });
      }

      if (typeof input.oninput === 'function') {
        ghost.oninput = input.oninput.bind(input);
      }

      function update() {
        ghost.style.setProperty(
          '--low',
          100 * ((input.valueLow - min) / (max - min)) + 1 + '%'
        );
        ghost.style.setProperty(
          '--high',
          100 * ((input.valueHigh - min) / (max - min)) - 1 + '%'
        );
      }

      input.addEventListener('input', update);
      ghost.addEventListener('input', update);

      update();
    };

    multirange.init = function() {
      [].slice
        .call(
          document.querySelectorAll(
            'input[type=range][multiple]:not(.multirange)'
          )
        )
        .forEach(multirange);
    };

    if (document.readyState == 'loading') {
      document.addEventListener('DOMContentLoaded', multirange.init);
    } else {
      multirange.init();
    }
  }
};
</script>

<style scoped>
/* Lea Verous's MultiRange Styles */
@supports (--css: variables) {
  input[type='range'].multirange {
    padding: 0;
    margin: 0;
    display: inline-block;
    vertical-align: top;
  }

  input[type='range'].multirange.original {
    position: absolute;
  }

  input[type='range'].multirange.original::-webkit-slider-thumb {
    position: relative;
    z-index: 2;
  }

  input[type='range'].multirange.original::-moz-range-thumb {
    transform: scale(1); /* FF doesn't apply position it seems */
    z-index: 1;
  }

  input[type='range'].multirange::-moz-range-track {
    border-color: transparent; /* needed to switch FF to "styleable" control */
  }

  input[type='range'].multirange.ghost {
    position: relative;
    background: var(--track-background);
    --track-background: linear-gradient(
        to right,
        transparent var(--low),
        var(--range-color) 0,
        var(--range-color) var(--high),
        transparent 0
      )
      no-repeat 0 45% / 100% 40%;
    --range-color: hsl(190, 80%, 40%);
  }

  input[type='range'].multirange.ghost::-webkit-slider-runnable-track {
    background: var(--track-background);
  }

  input[type='range'].multirange.ghost::-moz-range-track {
    background: var(--track-background);
  }
}

/* my styles */
.multiselect {
  margin: 10px;
}
</style>