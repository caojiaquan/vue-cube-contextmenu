<template>
  <div 
    @contextmenu.stop="contextmenu"
    @click="hide">
    <slot></slot>
  </div>
</template>

<script>
import EventBus from './EventBus'
export default {
  props: {
    id: {
      type: String,
      default: 'ref'
    },
    attributes: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    contextmenu(e) {
      EventBus.$emit(`${this.id}-show-poptip`, e, this.attributes)
      this.$emit('on-contextmenu')
    },

    hide() {
      EventBus.$emit(`${this.id}-hide-poptip`, {})
    }
  }
}
</script>

<style lang="scss">
  
</style>