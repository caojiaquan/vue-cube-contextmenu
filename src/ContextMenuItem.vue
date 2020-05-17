<template>
  <div @click="handleClick" class="context-menu-item">
    <slot></slot>
  </div>
</template>

<script>
import EventBus from './EventBus'
export default {
  props: {
    data: {}
  },
  data() {
    return {
      attr: {}
    }
  },
  computed: {
    id() {
      return this.$parent.id
    }
  },
  mounted() {
    EventBus.$on(`${this.id}-set-attributes`, attr => {
      this.attr = attr
    })
  },
  methods: {
    handleClick(e) {
      this.$emit('on-click', e, this.data, this.attr)
    }
  }
}
</script>

<style lang="scss" scoped>
  .context-menu-item {
    position: relative;
    width: 200px;
    height: 32px;
    line-height: 32px;
    padding: 0 12px;
    margin: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background-color .1s ease;
    color: #606266;
    cursor: pointer;
    &:hover {
      background: #EBEFFF;
      color: #3F66FF;
    }
  }
</style>