/** 
 * @file 菜单触发器
 */
<template>
  <div
      class="context-menu-trigger"
      @contextmenu.stop="onContextmenu"
      @click="hideDialogue">
      <!-- 菜单触发器内容插槽 -->
      <slot></slot>
  </div>
</template>

<script>
import EventBus from './EventBus';
export default {
    props: {
        // 菜单groupid
        id: {
            type: String,
            default: 'ref'
        },
        // 触发器数据
        attributes: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {};
    },
    methods: {

        /**
         * 右键事件处理
         * @param {Object} e event对象
         */
        onContextmenu(e) {
            // 发布打开菜单动作，并注入trigger数据
            EventBus.$emit(`${this.id}-show-poptip`, e, this.attributes);
            // 对外暴露trigger事件
            this.$emit('on-contextmenu');
        },

        /**
         * 主动关闭弹窗方法
         */
        hideDialogue() {
            EventBus.$emit(`${this.id}-hide-poptip`, {});
        }
    }
};
</script>

<style lang="scss" scoped>
    .context-menu-trigger {
        display: inline-block;
    }
</style>