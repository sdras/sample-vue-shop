<template>
  <div class="sidearea">
    <h4>Only Show Sale Items</h4>
    <div class="can-toggle demo-rebrand-2">
      <input id="e" type="checkbox" v-model="trigger" @change="updateSale">
      <label for="e">
        <div class="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trigger: this.checked
    };
  },
  computed: {
    checked() {
      return this.$store.state.sale;
    }
  },
  methods: {
    updateSale() {
      this.$store.commit('switchSale');
    }
  }
};
</script>

<style scoped lang="scss">
h4 {
  margin: 20px 0;
}

/* modified from Accessbile Toggle Switch by Chris Hart: https://codepen.io/personable/full/stpwD */
@mixin can-toggle-branding(
  $can-toggle-off-color: #777, 
  $can-toggle-on-color: #5fc054,
  $can-toggle-inactive-text: rgba(white, 0.5),
  $can-toggle-transition: cubic-bezier(0,1,0.5,1)
) {
  input[type='checkbox'] {
    &[disabled] ~ label {
      color: rgba($can-toggle-off-color, 0.5);
    }

    &:focus ~ label,
    &:hover ~ label {
      .can-toggle__switch {
        background-color: $can-toggle-off-color;
        &:after {
          color: darken($can-toggle-off-color, 10%);
        }
      }
    }
    &:hover ~ label {
      color: darken($can-toggle-off-color, 5%);
    }
    &:checked {
      ~ label {
        &:hover {
          color: darken($can-toggle-on-color, 3%);
        }

        .can-toggle__switch {
          background-color: lighten($can-toggle-on-color, 5%);
          &:after {
            color: darken($can-toggle-on-color, 5%);
          }
        }
      }

      &:focus,
      &:hover {
        ~ label {
          .can-toggle__switch {
            background-color: $can-toggle-on-color;
            &:after {
              color: darken($can-toggle-on-color, 10%);
            }
          }
        }
      }
    }
  }

  label {
    font-family: 'Barlow', sans-serif;
    cursor: pointer;
    .can-toggle__switch {
      transition: background-color 0.3s $can-toggle-transition;
      background: lighten($can-toggle-off-color, 5%);
      &:before {
        color: $can-toggle-inactive-text;
      }
      &:after {
        // Autoprefixer choked here, so making the prefixes explicit
        -webkit-transition: -webkit-transform 0.3s $can-toggle-transition;
        transition: transform 0.3s $can-toggle-transition;
        color: $can-toggle-off-color;
      }
    }
  }
}

@mixin can-toggle-appearance ($can-toggle-width: 134px,
  $can-toggle-height: 36px,
  $can-toggle-border-radius: 4px,
  $can-toggle-offset: 2px,
  $can-toggle-label-font-size: 14px,
  $can-toggle-switch-font-size: 12px,
  $can-toggle-shadow: 0 3px 3px rgba(black, 0.2)) {
  $can-toggle-switch-width: $can-toggle-width/2;

  input[type='checkbox'] {
    &:focus ~ label,
    &:hover ~ label {
      .can-toggle__switch {
        &:after {
          box-shadow: $can-toggle-shadow;
        }
      }
    }

    &:checked {
      ~ label {
        .can-toggle__switch {
          &:after {
            transform: translate3d(
              $can-toggle-width - ($can-toggle-switch-width + $can-toggle-offset),
              0,
              0
            );
          }
        }
      }
      &:focus,
      &:hover {
        ~ label {
          .can-toggle__switch {
            &:after {
              box-shadow: $can-toggle-shadow;
            }
          }
        }
      }
    }
  }

  label {
    font-size: $can-toggle-label-font-size;

    .can-toggle__switch {
      height: $can-toggle-height;
      flex: 0 0 $can-toggle-width;
      border-radius: $can-toggle-border-radius;

      &:before {
        left: 22px;
        font-size: $can-toggle-switch-font-size;
        line-height: $can-toggle-height;
        width: $can-toggle-width/2;
        padding: 0 12px;
      }

      &:after {
        top: $can-toggle-offset;
        left: $can-toggle-offset;
        border-radius: $can-toggle-border-radius/2;
        width: $can-toggle-switch-width - $can-toggle-offset;
        line-height: $can-toggle-height - ($can-toggle-offset*2);
        font-size: $can-toggle-switch-font-size;
      }

      &:hover {
        &:after {
          box-shadow: $can-toggle-shadow;
        }
      }
    }
  }
}

.can-toggle {
  position: relative;
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  input[type='checkbox'] {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;

    &[disabled] ~ label {
      pointer-events: none;
      .can-toggle__switch {
        opacity: 0.4;
      }
    }

    &:checked {
      ~ label {
        .can-toggle__switch {
          &:before {
            content: attr(data-unchecked);
            left: 0;
          }

          &:after {
            content: attr(data-checked);
          }
        }
      }

      &:focus,
      &:hover {
        ~ label {
        }
      }
    }
  }

  label {
    user-select: none;
    position: relative;
    display: flex;
    align-items: center;

    .can-toggle__label-text {
      flex: 1;
      padding-left: 32px;
    }

    .can-toggle__switch {
      position: relative;

      &:before {
        content: attr(data-checked);
        position: absolute;
        top: 0;
        text-transform: uppercase;
        text-align: center;
      }

      &:after {
        content: attr(data-unchecked);
        position: absolute;
        z-index: 5;
        text-transform: uppercase;
        text-align: center;
        background: white;
        transform: translate3d(0, 0, 0);
      }
    }
  }

  &.demo-rebrand-2 {
    cursor: pointer;
    @include can-toggle-branding (#888, #3e64ea, rgba(white, 0.7), ease);
    @include can-toggle-appearance (60px, 30px, 22px, 3px, 0, 9px, 0 2px 4px rgba(black, 0.2));
  }
}

.sidearea {
  padding-bottom: 30px;
}
</style>