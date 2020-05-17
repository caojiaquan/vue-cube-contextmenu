<template>
  <div>
    <ContextMenu id="component">
      <ContextMenuItem @on-click="handleComponentsCopy" :data="{trigger: 'del'}">
        <div>复制</div>
      </ContextMenuItem>
      <ContextSubMenu title="调整层级">
        <ContextMenuItem @on-click="handleComponentsLevel" :data="{trigger: 'up'}">
          <div>上移一层</div>
        </ContextMenuItem>
        <ContextMenuItem @on-click="handleComponentsLevel" :data="{trigger: 'low'}">
          <div>下移一层</div>
        </ContextMenuItem>
        <ContextMenuItem @on-click="handleComponentsLevel" :data="{trigger: 'upper'}">
          <div>置于顶层</div>
        </ContextMenuItem>
        <ContextMenuItem @on-click="handleComponentsLevel" :data="{trigger: 'lower'}">
          <div>置于底层</div>
        </ContextMenuItem>
      </ContextSubMenu>
      <ContextSubMenu title="对齐方式">
        <ContextMenuItem @on-click="handleComponentsAlign" :data="{trigger: 'up'}">
          <div>上对齐</div>
        </ContextMenuItem>
        <ContextMenuItem @on-click="handleComponentsAlign" :data="{trigger: 'low'}">
          <div>垂直居中对齐</div>
        </ContextMenuItem>
        <ContextMenuItem @on-click="handleComponentsAlign" :data="{trigger: 'upper'}">
          <div>下对齐</div>
        </ContextMenuItem>
        <ContextMenuItem @on-click="handleComponentsAlign" :data="{trigger: 'lower'}">
          <div>左对齐</div>
        </ContextMenuItem>
        <ContextMenuItem @on-click="handleComponentsAlign" :data="{trigger: 'lower'}">
          <div>水平居中对齐</div>
        </ContextMenuItem>
        <ContextMenuItem @on-click="handleComponentsAlign" :data="{trigger: 'lower'}">
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
      <div>{{ item }}</div>
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
    }
  },
  methods: {
    printf(e, event, data) {
      alert(`
        event： ${event.trigger},
        data: ${data.name}
      `)
    },
    handleComponentsCopy(e, event, data) {
      this.printf(e, event, data)
    },
    handleComponentsLevel(e, event, data) {
      this.printf(e, event, data)
    },
    handleComponentsAlign(e, event, data) {
      this.printf(e, event, data)
    },
    handleComponentsDel(e, event, data) {
      this.printf(e, event, data)
    }
  }
}
</script>