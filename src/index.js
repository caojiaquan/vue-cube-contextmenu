/**
 * @file 入口文件
 */
import ContextMenu from './ContextMenu.vue';
import ContextMenuTrigger from './ContextMenuTrigger.vue';
import ContextMenuItem from './ContextMenuItem.vue';
import ContextSubMenu from './ContextSubMenu.vue';
const components = {
    ContextMenu,
    ContextMenuTrigger,
    ContextMenuItem,
    ContextSubMenu
};

/**
 * 注册组件
 * @param {Function} Vue 构造函数
 */
const installComponent = function (Vue) {
    if (installComponent.installed) {
        return;
    }
    // 注册组件到全局
    Object.keys(components).forEach(component => {
        Vue.component(component, components[component]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    installComponent(window.Vue);
}

export default {
    install: installComponent
};
