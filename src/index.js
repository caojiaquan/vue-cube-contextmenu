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

const install = function (Vue) {
    if (install.installed) {
        return;
    }
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
};
