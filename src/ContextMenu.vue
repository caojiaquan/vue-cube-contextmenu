/**
 * @file 菜单容器
 */
<template>
  <div class="m-context-menu" ref="contextElem" :style="contextMenuStyle">
      <!-- 菜单容器内容插槽；内容为ContextMenuItem或ContextSubMenu -->
      <slot></slot>
  </div>
</template>

<script>
import EventBus from './EventBus';
export default {
    props: {
        // 菜单groupid；与触发器id相对应
        id: {
            type: String,
            default: 'ref'
        }
    },
    data() {
        return {
            // 菜单初始样式
            contextMenuStyle: {
                left: '-500px',
                top: '-500px'
            }
        };
    },

    mounted() {
        // document单击关闭菜单弹窗
        document.addEventListener('click', e => {
            this.hideDialogue();
        });

        // 订阅呼起弹窗动作
        EventBus.$on(`${this.id}-show-poptip`, (e, attributes) => {
            this.showDialogue(e);
            // 发布点击选中菜单项结构
            EventBus.$emit(`${this.id}-set-attributes`, attributes);
        });

        // 订阅关闭弹窗动作
        EventBus.$on(`${this.id}-hide-poptip`, attributes => {
            this.hideDialogue();
        });
    },

    methods: {

        /**
         * 打开菜单
         * @param {Object} e event对象
         */
        showDialogue(e) {
            e.preventDefault();
            this.$nextTick(() => {
                this.contextMenuStyle = this.getMenuPos(e);
            });
        },

        /**
         * 隐藏菜单
         */
        hideDialogue() {
            this.contextMenuStyle = {
                left: '-500px',
                top: '-500px'
            };
        },

        /**
         * 获取菜单位置
         * @param {Object} e event对象
         * @return {Object} 位置信息
         */
        getMenuPos(e) {
            if (!this.$refs.contextElem) {
                return;
            }

            let menuPos = this.$refs.contextElem.getBoundingClientRect(),
                width = menuPos.width,
                height = menuPos.height,
                x0 = e.clientX,
                y0 = e.clientY,
                Wbody = document.documentElement.clientWidth,
                Hbody = document.documentElement.clientHeight,
                menuLeft = x0,
                menuTop = y0;
            if (x0 + width > Wbody) {
                // 重置菜单x坐标，防止溢出屏幕右侧
                menuLeft = x0 - width;
            }

            if (Hbody < y0 + height) {
                // 重置菜单y坐标，防止溢出屏幕下方
                menuTop = y0 - height;
            }

            return {
                left: menuLeft + 3 + 'px',
                top: menuTop + 'px'
            };
        }
    }
};
</script>

<style lang="scss" scoped>
  .m-context-menu {
    position: fixed;
    z-index: 100000;
    padding: 8px 0;
    background-clip: padding-box;
    background:rgba(255,255,255,1);
    box-shadow:0 2px 10px 4px rgba(77,100,169,0.1);
    border-radius: 3px;
    white-space: nowrap;
  }
</style>
