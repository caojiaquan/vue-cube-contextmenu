/**
 * @file 菜单项组件
 */
<template>
  <div @click="handleClick" class="context-menu-item">
      <!-- 菜单项内容插槽 -->
      <slot></slot>
  </div>
</template>

<script>
import EventBus from './EventBus';
export default {
    props: {
        // 菜单项自定义数据
        data: {}
    },
    data() {
        return {
            // 缓存trigger数据
            attr: {}
        };
    },
    computed: {
        // 菜单groupid，同父级
        id() {
            return this.$parent.id;
        }
    },
    mounted() {
        // 订阅设置属性动作
        EventBus.$on(`${this.id}-set-attributes`, attr => {
            this.attr = attr;
        });
    },
    methods: {

        /**
         * 菜单项点击事件处理
         * @param {Object} e event对象
         */
        handleClick(e) {
            this.$emit('on-click', e, this.data, this.attr);
        }
    }
};
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