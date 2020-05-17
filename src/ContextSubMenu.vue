<template>
  <div class="context-submenu"
    @mouseleave="isShow = false">
    <div class="context-menu-item" @mouseenter="isShow = true">
      <span>{{ title }}</span>
      <div
        type="md-arrow-dropright"
        :class="`context-submenu-icon context-submenu-icon-${isShow ? 'active': ''}`"></div>
      <div class="context-submenu-content" v-show="isShow">
        <div class="context-submenu-content-wrap">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContextMenuItem from './ContextMenuItem.vue'
import EventBus from './EventBus'
export default {
  components: {
    ContextMenuItem
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    id() {
      return this.$parent.id
    }
  }
}
</script>

<style lang="scss" scoped>
  .context-submenu{
    &-icon{
      position: absolute;
      right: 0;
      font-size: 22px;
      color: #C0C4CC;
      &-active{
        color: #3F66FF;
      }
    }
    &-content{
      position: absolute;
      left: 208px;
      top: 0;
      padding-left: 6px;
      &-wrap{
        padding: 8px 0;
        background-clip: padding-box;
        background:rgba(255,255,255,1);
        box-shadow:0px 2px 10px 4px rgba(77,100,169,0.1);
        border-radius: 3px;
        white-space: nowrap;
      }
    }
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
  }
</style>