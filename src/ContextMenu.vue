<template>
  <div class="m-context-menu" ref="contextElem" :style="contextMenuStyle">
      <slot></slot>
  </div>
</template>

<script>
import EventBus from './EventBus';
export default {
    props: {
        id: {
            type: String,
            default: 'ref'
        }
    },
    data() {
        return {
            contextMenuStyle: {
                left: '-500px',
                top: '-500px'
            }
        };
    },

    mounted() {
        document.addEventListener('click', e => {
            this.hide();
        });

        EventBus.$on(`${this.id}-show-poptip`, (e, attributes) => {
            this.show(e);
            EventBus.$emit(`${this.id}-set-attributes`, attributes);
        });

        EventBus.$on(`${this.id}-hide-poptip`, attributes => {
            this.hide();
        });
    },

    methods: {
        show(e) {
            e.preventDefault();
            this.$nextTick(() => {
                this.contextMenuStyle = this.getMenuPos(e);
            });
        },

        hide() {
            this.contextMenuStyle = {
                left: '-500px',
                top: '-500px'
            };
        },

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
                menuLeft = x0 - width;
            }

            if (Hbody < y0 + height) {
                menuTop = y0 - height;
            }

            return {
                left: menuLeft + 3 + 'px',
                top: menuTop + 'px'
            };
        }
    }
}
</script>

<style lang="scss" scoped>
  .m-context-menu {
    position: fixed;
    z-index: 100000;
    padding: 8px 0;
    background-clip: padding-box;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 10px 4px rgba(77,100,169,0.1);
    border-radius: 3px;
    white-space: nowrap;
  }
</style>
