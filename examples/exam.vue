<template>
  <div>
      <h3>context menu</h3>
      <ContextMenu id="component">
          <ContextMenuItem @on-click="handleComponentsCopy" :data="{trigger: 'copy'}">
              <div>复制</div>
          </ContextMenuItem>
          <ContextSubMenu title="调整层级">
              <ContextMenuItem @on-click="handleComponentsLevel" :data="{trigger: 'level+up'}">
                <div>上移一层</div>
              </ContextMenuItem>
              <ContextMenuItem @on-click="handleComponentsLevel" :data="{trigger: 'level+low'}">
                <div>下移一层</div>
              </ContextMenuItem>
              <ContextMenuItem @on-click="handleComponentsLevel" :data="{trigger: 'level+upper'}">
                <div>置于顶层</div>
              </ContextMenuItem>
              <ContextMenuItem @on-click="handleComponentsLevel" :data="{trigger: 'level+lower'}">
                <div>置于底层</div>
              </ContextMenuItem>
          </ContextSubMenu>
          <ContextSubMenu title="对齐方式">
              <ContextMenuItem @on-click="handleComponentsAlign" :data="{trigger: 'align+up'}">
                <div>上对齐</div>
              </ContextMenuItem>
              <ContextMenuItem @on-click="handleComponentsAlign" :data="{trigger: 'align+middle'}">
                <div>垂直居中对齐</div>
              </ContextMenuItem>
              <ContextMenuItem @on-click="handleComponentsAlign" :data="{trigger: 'align+low'}">
                <div>下对齐</div>
              </ContextMenuItem>
              <ContextMenuItem @on-click="handleComponentsAlign" :data="{trigger: 'align+left'}">
                <div>左对齐</div>
              </ContextMenuItem>
              <ContextMenuItem @on-click="handleComponentsAlign" :data="{trigger: 'align+center'}">
                <div>水平居中对齐</div>
              </ContextMenuItem>
              <ContextMenuItem @on-click="handleComponentsAlign" :data="{trigger: 'align+right'}">
                <div>右对齐</div>
              </ContextMenuItem>
          </ContextSubMenu>
          <ContextMenuItem @on-click="handleComponentsDel" :data="{trigger: 'del'}">
              <div>删除</div>
          </ContextMenuItem>
      </ContextMenu>

      <!-- trigger -->
      <ContextMenuTrigger
        v-for="(item, index) in dataList"
        :key="index"
        id="component"
        :attributes="{
          name: item
        }">
          <div class="button-item">{{ item }}</div>
      </ContextMenuTrigger>
  </div>
</template>

<script>
export default {
    data() {
        return {
            dataList: [
                'Banana', 'Apple', 'Papaya'
            ]
        };
    },
    methods: {
        printf(e, event, data) {
            alert(`
              event： ${event.trigger},
              data: ${data.name}
            `);
        },
        handleComponentsCopy(e, event, data) {
            this.printf(e, event, data);
        },
        handleComponentsLevel(e, event, data) {
            this.printf(e, event, data);
        },
        handleComponentsAlign(e, event, data) {
            this.printf(e, event, data);
        },
        handleComponentsDel(e, event, data) {
            this.printf(e, event, data);
        }
    }
};
</script>

<style lang="scss">
    .button-item {
        display: inline-block;
        width: 152px;
        height: 44px;
        line-height: 44px;
        margin-right: 10px;
        text-align: center;
        background: #ccc;
        cursor: pointer;
    }
</style>